export declare const EXPANSION_PANEL_ANIMATION_TIMING = "225ms cubic-bezier(0.4,0.0,0.2,1)";

export declare const MAT_ACCORDION: InjectionToken<MatAccordionBase>;

export declare const MAT_EXPANSION_PANEL_DEFAULT_OPTIONS: InjectionToken<MatExpansionPanelDefaultOptions>;

export declare class MatAccordion extends CdkAccordion implements MatAccordionBase, AfterContentInit, OnDestroy {
    _headers: QueryList<MatExpansionPanelHeader>;
    displayMode: MatAccordionDisplayMode;
    get hideToggle(): boolean;
    set hideToggle(show: boolean);
    togglePosition: MatAccordionTogglePosition;
    _handleHeaderFocus(header: MatExpansionPanelHeader): void;
    _handleHeaderKeydown(event: KeyboardEvent): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ngAcceptInputType_hideToggle: BooleanInput;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatAccordion, "mat-accordion", ["matAccordion"], { "multi": "multi"; "hideToggle": "hideToggle"; "displayMode": "displayMode"; "togglePosition": "togglePosition"; }, {}, ["_headers"]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatAccordion, never>;
}

export interface MatAccordionBase extends CdkAccordion {
    _handleHeaderFocus: (header: any) => void;
    _handleHeaderKeydown: (event: KeyboardEvent) => void;
    displayMode: MatAccordionDisplayMode;
    hideToggle: boolean;
    togglePosition: MatAccordionTogglePosition;
}

export declare type MatAccordionDisplayMode = 'default' | 'flat';

export declare type MatAccordionTogglePosition = 'before' | 'after';

export declare const matExpansionAnimations: {
    readonly indicatorRotate: AnimationTriggerMetadata;
    readonly bodyExpansion: AnimationTriggerMetadata;
};

export declare class MatExpansionModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MatExpansionModule, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MatExpansionModule>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatExpansionModule, [typeof i1.MatAccordion, typeof i2.MatExpansionPanel, typeof i2.MatExpansionPanelActionRow, typeof i3.MatExpansionPanelHeader, typeof i3.MatExpansionPanelTitle, typeof i3.MatExpansionPanelDescription, typeof i4.MatExpansionPanelContent], [typeof i5.CommonModule, typeof i6.MatCommonModule, typeof i7.CdkAccordionModule, typeof i8.PortalModule], [typeof i1.MatAccordion, typeof i2.MatExpansionPanel, typeof i2.MatExpansionPanelActionRow, typeof i3.MatExpansionPanelHeader, typeof i3.MatExpansionPanelTitle, typeof i3.MatExpansionPanelDescription, typeof i4.MatExpansionPanelContent]>;
}

export declare class MatExpansionPanel extends CdkAccordionItem implements AfterContentInit, OnChanges, OnDestroy {
    _animationMode: string;
    _body: ElementRef<HTMLElement>;
    readonly _bodyAnimationDone: Subject<AnimationEvent>;
    _headerId: string;
    readonly _inputChanges: Subject<SimpleChanges>;
    _lazyContent: MatExpansionPanelContent;
    _portal: TemplatePortal;
    accordion: MatAccordionBase;
    readonly afterCollapse: EventEmitter<void>;
    readonly afterExpand: EventEmitter<void>;
    get hideToggle(): boolean;
    set hideToggle(value: boolean);
    get togglePosition(): MatAccordionTogglePosition;
    set togglePosition(value: MatAccordionTogglePosition);
    constructor(accordion: MatAccordionBase, _changeDetectorRef: ChangeDetectorRef, _uniqueSelectionDispatcher: UniqueSelectionDispatcher, _viewContainerRef: ViewContainerRef, _document: any, _animationMode: string, defaultOptions?: MatExpansionPanelDefaultOptions);
    _containsFocus(): boolean;
    _getExpandedState(): MatExpansionPanelState;
    _hasSpacing(): boolean;
    close(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    open(): void;
    toggle(): void;
    static ngAcceptInputType_hideToggle: BooleanInput;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatExpansionPanel, "mat-expansion-panel", ["matExpansionPanel"], { "disabled": "disabled"; "expanded": "expanded"; "hideToggle": "hideToggle"; "togglePosition": "togglePosition"; }, { "opened": "opened"; "closed": "closed"; "expandedChange": "expandedChange"; "afterExpand": "afterExpand"; "afterCollapse": "afterCollapse"; }, ["_lazyContent"], ["mat-expansion-panel-header", "*", "mat-action-row"]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatExpansionPanel, [{ optional: true; skipSelf: true; }, null, null, null, null, { optional: true; }, { optional: true; }]>;
}

export declare class MatExpansionPanelActionRow {
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatExpansionPanelActionRow, "mat-action-row", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatExpansionPanelActionRow, never>;
}

export declare class MatExpansionPanelContent {
    _template: TemplateRef<any>;
    constructor(_template: TemplateRef<any>);
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatExpansionPanelContent, "ng-template[matExpansionPanelContent]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatExpansionPanelContent, never>;
}

export interface MatExpansionPanelDefaultOptions {
    collapsedHeight: string;
    expandedHeight: string;
    hideToggle: boolean;
}

export declare class MatExpansionPanelDescription {
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatExpansionPanelDescription, "mat-panel-description", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatExpansionPanelDescription, never>;
}

export declare class MatExpansionPanelHeader extends _MatExpansionPanelHeaderMixinBase implements AfterViewInit, OnDestroy, FocusableOption, HasTabIndex {
    _animationMode?: string | undefined;
    collapsedHeight: string;
    get disabled(): boolean;
    expandedHeight: string;
    panel: MatExpansionPanel;
    constructor(panel: MatExpansionPanel, _element: ElementRef, _focusMonitor: FocusMonitor, _changeDetectorRef: ChangeDetectorRef, defaultOptions?: MatExpansionPanelDefaultOptions, _animationMode?: string | undefined, tabIndex?: string);
    _getExpandedState(): string;
    _getHeaderHeight(): string | null;
    _getPanelId(): string;
    _getTogglePosition(): MatAccordionTogglePosition;
    _isExpanded(): boolean;
    _keydown(event: KeyboardEvent): void;
    _showToggle(): boolean;
    _toggle(): void;
    focus(origin?: FocusOrigin, options?: FocusOptions): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ngAcceptInputType_tabIndex: NumberInput;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatExpansionPanelHeader, "mat-expansion-panel-header", never, { "tabIndex": "tabIndex"; "expandedHeight": "expandedHeight"; "collapsedHeight": "collapsedHeight"; }, {}, never, ["mat-panel-title", "mat-panel-description", "*"]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatExpansionPanelHeader, [{ host: true; }, null, null, null, { optional: true; }, { optional: true; }, { attribute: "tabindex"; }]>;
}

export declare type MatExpansionPanelState = 'expanded' | 'collapsed';

export declare class MatExpansionPanelTitle {
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatExpansionPanelTitle, "mat-panel-title", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatExpansionPanelTitle, never>;
}
