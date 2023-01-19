/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {FocusableOption, FocusOrigin} from '@angular/cdk/a11y';
import {BooleanInput, coerceBooleanProperty} from '@angular/cdk/coercion';
import {ENTER, hasModifierKey, P, SPACE} from '@angular/cdk/keycodes';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ElementRef,
  ChangeDetectorRef,
  Optional,
  Inject,
  Directive,
  AfterViewChecked,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  QueryList,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
  NgZone,
  Injectable,
} from '@angular/core';
import {Observable, Subject, Subscription, fromEvent, observable} from 'rxjs';
import {MatOptgroup, MAT_OPTGROUP, _MatOptgroupBase} from './optgroup';
import {MatOptionParentComponent, MAT_OPTION_PARENT_COMPONENT} from './option-parent';
import {finalize, share, takeUntil} from 'rxjs/operators';
import {DOCUMENT} from '@angular/common';

/**
 * Option IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */
let _uniqueIdCounter = 0;

/** Event object emitted by MatOption when selected or deselected. */
export class MatOptionSelectionChange<T = any> {
  constructor(
    /** Reference to the option that emitted the event. */
    public source: _MatOptionBase<T>,
    /** Whether the change in the option's value was a result of a user action. */
    public isUserInput = false,
  ) {}
}

@Directive()
export class _MatOptionBase<T = any> implements FocusableOption, AfterViewChecked, OnDestroy {
  private _selected = false;
  private _active = false;
  private _disabled = false;
  private _mostRecentViewValue = '';

  /** Whether the wrapping component is in multiple selection mode. */
  get multiple() {
    return this._parent && this._parent.multiple;
  }

  /** Whether or not the option is currently selected. */
  get selected(): boolean {
    return this._selected;
  }

  /** The form value of the option. */
  @Input() value: T;

  /** The unique ID of the option. */
  @Input() id: string = `mat-option-${_uniqueIdCounter++}`;

  /** Whether the option is disabled. */
  @Input()
  get disabled(): boolean {
    return (this.group && this.group.disabled) || this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }

  /** Whether ripples for the option are disabled. */
  get disableRipple(): boolean {
    return !!(this._parent && this._parent.disableRipple);
  }

  /** Event emitted when the option is selected or deselected. */
  // tslint:disable-next-line:no-output-on-prefix
  @Output() readonly onSelectionChange = new EventEmitter<MatOptionSelectionChange<T>>();

  /** Element containing the option's text. */
  @ViewChild('text', {static: true}) _text: ElementRef<HTMLElement> | undefined;

  /** Emits when the state of the option changes and any parents have to be notified. */
  readonly _stateChanges = new Subject<void>();

  constructor(
    private _element: ElementRef<HTMLElement>,
    private _changeDetectorRef: ChangeDetectorRef,
    private _parent: MatOptionParentComponent,
    readonly group: _MatOptgroupBase,
  ) {}

  /**
   * Whether or not the option is currently active and ready to be selected.
   * An active option displays styles as if it is focused, but the
   * focus is actually retained somewhere else. This comes in handy
   * for components like autocomplete where focus must remain on the input.
   */
  get active(): boolean {
    return this._active;
  }

  /**
   * The displayed value of the option. It is necessary to show the selected option in the
   * select's trigger.
   */
  get viewValue(): string {
    // TODO(kara): Add input property alternative for node envs.
    return (this._text?.nativeElement.textContent || '').trim();
  }

  /** Selects the option. */
  select(): void {
    if (!this._selected) {
      this._selected = true;
      this._changeDetectorRef.markForCheck();
      this._emitSelectionChangeEvent();
    }
  }

  /** Deselects the option. */
  deselect(): void {
    if (this._selected) {
      this._selected = false;
      this._changeDetectorRef.markForCheck();
      this._emitSelectionChangeEvent();
    }
  }

  /** Sets focus onto this option. */
  focus(_origin?: FocusOrigin, options?: FocusOptions): void {
    // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
    // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.
    const element = this._getHostElement();

    if (typeof element.focus === 'function') {
      element.focus(options);
    }
  }

  /**
   * This method sets display styles on the option to make it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */
  setActiveStyles(): void {
    if (!this._active) {
      this._active = true;
      this._changeDetectorRef.markForCheck();
    }
  }

  /**
   * This method removes display styles on the option that made it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */
  setInactiveStyles(): void {
    if (this._active) {
      this._active = false;
      this._changeDetectorRef.markForCheck();
    }
  }

  /** Gets the label to be used when determining whether the option should be focused. */
  getLabel(): string {
    return this.viewValue;
  }

  /** Ensures the option is selected when activated from the keyboard. */
  _handleKeydown(event: KeyboardEvent): void {
    if ((event.keyCode === ENTER || event.keyCode === SPACE) && !hasModifierKey(event)) {
      this._selectViaInteraction();

      // Prevent the page from scrolling down and form submits.
      event.preventDefault();
    }
  }

  /**
   * `Selects the option while indicating the selection came from the user. Used to
   * determine if the select's view -> model callback should be invoked.`
   */
  _selectViaInteraction(): void {
    if (!this.disabled) {
      this._selected = this.multiple ? !this._selected : true;
      this._changeDetectorRef.markForCheck();
      this._emitSelectionChangeEvent(true);
    }
  }

  /**
   * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
   * attribute from single-selection, unselected options. Including the `aria-selected="false"`
   * attributes adds a significant amount of noise to screen-reader users without providing useful
   * information.
   */
  _getAriaSelected(): boolean | null {
    return this.selected || (this.multiple ? false : null);
  }

  /** Returns the correct tabindex for the option depending on disabled state. */
  _getTabIndex(): string {
    return this.disabled ? '-1' : '0';
  }

  /** Gets the host DOM element. */
  _getHostElement(): HTMLElement {
    return this._element.nativeElement;
  }

  ngAfterViewChecked() {
    // Since parent components could be using the option's label to display the selected values
    // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
    // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
    // relatively cheap, however we still limit them only to selected options in order to avoid
    // hitting the DOM too often.
    if (this._selected) {
      const viewValue = this.viewValue;

      if (viewValue !== this._mostRecentViewValue) {
        if (this._mostRecentViewValue) {
          this._stateChanges.next();
        }

        this._mostRecentViewValue = viewValue;
      }
    }
  }

  ngOnDestroy() {
    this._stateChanges.complete();
  }

  /** Emits the selection change event. */
  private _emitSelectionChangeEvent(isUserInput = false): void {
    this.onSelectionChange.emit(new MatOptionSelectionChange<T>(this, isUserInput));
  }
}

/**
 * Single option inside of a `<mat-select>` element.
 */
@Component({
  selector: 'mat-option',
  exportAs: 'matOption',
  host: {
    'role': 'option',
    '[attr.tabindex]': '_getTabIndex()',
    '[class.mdc-list-item--selected]': 'selected',
    '[class.mat-mdc-option-multiple]': 'multiple',
    '[class.mat-mdc-option-active]': 'active',
    '[class.mdc-list-item--disabled]': 'disabled',
    '[id]': 'id',
    '[attr.aria-selected]': '_getAriaSelected()',
    '[attr.aria-disabled]': 'disabled.toString()',
    '(click)': '_selectViaInteraction()',
    '(keydown)': '_handleKeydown($event)',
    'class': 'mat-mdc-option mat-mdc-focus-indicator mdc-list-item',
  },
  styleUrls: ['option.css'],
  templateUrl: 'option.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatOption<T = any> extends _MatOptionBase<T> {
  constructor(
    element: ElementRef<HTMLElement>,
    changeDetectorRef: ChangeDetectorRef,
    @Optional() @Inject(MAT_OPTION_PARENT_COMPONENT) parent: MatOptionParentComponent,
    @Optional() @Inject(MAT_OPTGROUP) group: MatOptgroup,
  ) {
    super(element, changeDetectorRef, parent, group);
  }
}

// @Directive({selector: '[lazy]'})
// export class MatLazyOption {
//   @Input()
//   set lazy(value: boolean) {
//     if (!value && !this._rendered.closed) {
//       this._render();
//     }
//   }

//   private readonly _rendered = new Subject<void>();

//   constructor(
//     private _ngZone: NgZone,
//     private templateRef: TemplateRef<any>,
//     private viewContainer: ViewContainerRef,
//     @Optional() @Inject(MAT_OPTION_PARENT_COMPONENT) private parent: MatOptionParentComponent,
//   ) {
//     this.listen();
//   }

//   ngOnDestroy() {
//     this._ngZone.runOutsideAngular(() => {
//       this._rendered.next();
//       this._rendered.complete();
//     });
//   }

//   private listen(): void {
//     this._ngZone.runOutsideAngular(() => {
//       this.parent.openedChange.pipe(takeUntil(this._rendered)).subscribe(open => {
//         if (open) {
//           this._render();
//         }
//       });
//     });
//   }

//   private _render(): void {
//     if (!this._rendered.closed) {
//       this.viewContainer.createEmbeddedView(this.templateRef);
//       this._ngZone.runOutsideAngular(() => {
//         this._rendered.next();
//         this._rendered.complete();
//       });
//     }
//   }
// }

@Directive({selector: '[lazy]'})
export class MatLazyOption {
  @Input('lazyTrigger') trigger: HTMLElement;

  @Input()
  set lazy(isLazy: boolean) {
    this._lazy = isLazy;
    if (!isLazy) {
      this._render();
    }
  }
  get lazy(): boolean {
    return this._lazy;
  }
  private _lazy = true;

  private _focusSubscription?: Subscription;
  private _mouseoverSubscription?: Subscription;

  constructor(
    private _ngZone: NgZone,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private listener: GlobalListener,
  ) {}

  ngAfterViewInit() {
    if (this.lazy) {
      this.listen();
    }
  }

  ngOnDestroy() {
    this._ngZone.runOutsideAngular(() => {
      this._focusSubscription?.unsubscribe();
      this._mouseoverSubscription?.unsubscribe();
    });
  }

  private listen(): void {
    this._ngZone.runOutsideAngular(() => {
      this._focusSubscription = this.listener.listen('focus', this.trigger, () => {
        this._render();
      });
      this._mouseoverSubscription = this.listener.listen('mouseover', this.trigger, () => {
        this._render();
      });
    });
  }

  private _render(): void {
    if (!this._focusSubscription?.closed) {
      console.log('render!');
      this.viewContainer.createEmbeddedView(this.templateRef);
      this._ngZone.runOutsideAngular(() => {
        this._focusSubscription?.unsubscribe();
        this._mouseoverSubscription?.unsubscribe();
      });
    }
  }
}

/**
 * Provides a global listener for all events that occur on the document.
 */
@Injectable({providedIn: 'root'})
export class GlobalListener implements OnDestroy {
  private _elementToTypeToObservable = new Map<
    HTMLElement | Document,
    Map<keyof DocumentEventMap, Observable<Event>>
  >();

  /** The notifier that triggers the global event observables to stop emitting and complete. */
  private _destroyed = new Subject();

  constructor(private _ngZone: NgZone) {}

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
    this._elementToTypeToObservable.clear();
  }

  /**
   * Appends an event listener for events whose type attribute value is type.
   * The callback argument sets the callback that will be invoked when the event is dispatched.
   */
  listen(
    type: keyof DocumentEventMap,
    element: HTMLElement | Document,
    listener: (ev: Event) => any,
  ): Subscription {
    // This is the first listener on this element. Instantiate the type-to-observable map.
    if (!this._elementToTypeToObservable.has(element)) {
      this._elementToTypeToObservable.set(element, new Map());
    }

    // This is the first listener of this type for this element. Instantiate the observable.
    if (!this._elementToTypeToObservable.get(element)!.get(type)) {
      const typeToObservable = this._elementToTypeToObservable.get(element)!;
      typeToObservable.set(type, this._createGlobalEventObservable(element, type));
    }

    return this._ngZone.runOutsideAngular(() =>
      this._elementToTypeToObservable
        .get(element)!
        .get(type)!
        .subscribe((event: Event) => listener(event)),
    );
  }

  /** Creates an observable that emits all events of the given type. */
  private _createGlobalEventObservable(
    element: HTMLElement | Document,
    type: keyof DocumentEventMap,
  ) {
    return fromEvent(element, type, {passive: true, capture: true}).pipe(
      takeUntil(this._destroyed),
      finalize(() => this._elementToTypeToObservable.get(element)?.delete(type)),
      share(),
    );
  }
}

/**
 * Counts the amount of option group labels that precede the specified option.
 * @param optionIndex Index of the option at which to start counting.
 * @param options Flat list of all of the options.
 * @param optionGroups Flat list of all of the option groups.
 * @docs-private
 */
export function _countGroupLabelsBeforeOption(
  optionIndex: number,
  options: QueryList<MatOption>,
  optionGroups: QueryList<MatOptgroup>,
): number {
  if (optionGroups.length) {
    let optionsArray = options.toArray();
    let groups = optionGroups.toArray();
    let groupCounter = 0;

    for (let i = 0; i < optionIndex + 1; i++) {
      if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
        groupCounter++;
      }
    }

    return groupCounter;
  }

  return 0;
}

/**
 * Determines the position to which to scroll a panel in order for an option to be into view.
 * @param optionOffset Offset of the option from the top of the panel.
 * @param optionHeight Height of the options.
 * @param currentScrollPosition Current scroll position of the panel.
 * @param panelHeight Height of the panel.
 * @docs-private
 */
export function _getOptionScrollPosition(
  optionOffset: number,
  optionHeight: number,
  currentScrollPosition: number,
  panelHeight: number,
): number {
  if (optionOffset < currentScrollPosition) {
    return optionOffset;
  }

  if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
    return Math.max(0, optionOffset - panelHeight + optionHeight);
  }

  return currentScrollPosition;
}
