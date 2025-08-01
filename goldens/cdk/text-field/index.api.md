## API Report File for "@angular/cdk_text-field"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AfterViewInit } from '@angular/core';
import { DoCheck } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import * as i0 from '@angular/core';
import { Observable } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';

// @public
export type AutofillEvent = {
    target: Element;
    isAutofilled: boolean;
};

// @public
export class AutofillMonitor implements OnDestroy {
    constructor(...args: unknown[]);
    monitor(element: Element): Observable<AutofillEvent>;
    monitor(element: ElementRef<Element>): Observable<AutofillEvent>;
    // (undocumented)
    ngOnDestroy(): void;
    stopMonitoring(element: Element): void;
    stopMonitoring(element: ElementRef<Element>): void;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<AutofillMonitor, never>;
    // (undocumented)
    static ɵprov: i0.ɵɵInjectableDeclaration<AutofillMonitor>;
}

// @public
export class CdkAutofill implements OnDestroy, OnInit {
    constructor(...args: unknown[]);
    readonly cdkAutofill: EventEmitter<AutofillEvent>;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<CdkAutofill, "[cdkAutofill]", never, {}, { "cdkAutofill": "cdkAutofill"; }, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkAutofill, never>;
}

// @public
export class CdkTextareaAutosize implements AfterViewInit, DoCheck, OnDestroy {
    constructor(...args: unknown[]);
    protected _document: Document;
    get enabled(): boolean;
    set enabled(value: boolean);
    get maxRows(): number;
    set maxRows(value: NumberInput);
    get minRows(): number;
    set minRows(value: NumberInput);
    // (undocumented)
    static ngAcceptInputType_enabled: unknown;
    // (undocumented)
    ngAfterViewInit(): void;
    // (undocumented)
    ngDoCheck(): void;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    _noopInputHandler(): void;
    // (undocumented)
    get placeholder(): string;
    set placeholder(value: string);
    reset(): void;
    resizeToFitContent(force?: boolean): void;
    _setMaxHeight(): void;
    _setMinHeight(): void;
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<CdkTextareaAutosize, "textarea[cdkTextareaAutosize]", ["cdkTextareaAutosize"], { "minRows": { "alias": "cdkAutosizeMinRows"; "required": false; }; "maxRows": { "alias": "cdkAutosizeMaxRows"; "required": false; }; "enabled": { "alias": "cdkTextareaAutosize"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; }, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTextareaAutosize, never>;
}

// @public (undocumented)
export class TextFieldModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<TextFieldModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<TextFieldModule>;
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<TextFieldModule, never, [typeof CdkAutofill, typeof CdkTextareaAutosize], [typeof CdkAutofill, typeof CdkTextareaAutosize]>;
}

// (No @packageDocumentation comment for this package)

```
