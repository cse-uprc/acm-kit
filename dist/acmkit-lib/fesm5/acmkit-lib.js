import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, Component, ɵɵdefineInjectable, Injectable, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

var AcmkitLibComponent = /** @class */ (function () {
    function AcmkitLibComponent() {
    }
    AcmkitLibComponent.prototype.ngOnInit = function () { };
    AcmkitLibComponent.ɵfac = function AcmkitLibComponent_Factory(t) { return new (t || AcmkitLibComponent)(); };
    AcmkitLibComponent.ɵcmp = ɵɵdefineComponent({ type: AcmkitLibComponent, selectors: [["ak-test-component"]], decls: 2, vars: 0, template: function AcmkitLibComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1, " Library is Working! On Version 1.0.3 Finally ");
            ɵɵelementEnd();
        } }, encapsulation: 2 });
    return AcmkitLibComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(AcmkitLibComponent, [{
        type: Component,
        args: [{
                selector: 'ak-test-component',
                template: "\n    <p>\n      Library is Working! On Version 1.0.3 Finally\n    </p>\n  ",
                styles: [],
            }]
    }], function () { return []; }, null); })();

var NumberAdderService = /** @class */ (function () {
    function NumberAdderService() {
    }
    NumberAdderService.prototype.addNumbers = function (num1, num2) {
        return num1 + num2;
    };
    NumberAdderService.ɵfac = function NumberAdderService_Factory(t) { return new (t || NumberAdderService)(); };
    NumberAdderService.ɵprov = ɵɵdefineInjectable({ token: NumberAdderService, factory: NumberAdderService.ɵfac, providedIn: 'root' });
    return NumberAdderService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NumberAdderService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();

var AcmkitLibModule = /** @class */ (function () {
    function AcmkitLibModule() {
    }
    AcmkitLibModule.ɵmod = ɵɵdefineNgModule({ type: AcmkitLibModule });
    AcmkitLibModule.ɵinj = ɵɵdefineInjector({ factory: function AcmkitLibModule_Factory(t) { return new (t || AcmkitLibModule)(); }, providers: [NumberAdderService], imports: [[]] });
    return AcmkitLibModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AcmkitLibModule, { declarations: [AcmkitLibComponent], exports: [AcmkitLibComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AcmkitLibModule, [{
        type: NgModule,
        args: [{
                declarations: [AcmkitLibComponent],
                imports: [],
                exports: [AcmkitLibComponent],
                providers: [NumberAdderService],
            }]
    }], null, null); })();

var AcmkitLibService = /** @class */ (function () {
    function AcmkitLibService() {
    }
    AcmkitLibService.ɵfac = function AcmkitLibService_Factory(t) { return new (t || AcmkitLibService)(); };
    AcmkitLibService.ɵprov = ɵɵdefineInjectable({ token: AcmkitLibService, factory: AcmkitLibService.ɵfac, providedIn: 'root' });
    return AcmkitLibService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(AcmkitLibService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

/**
 * Public API Surface of acmkit-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AcmkitLibComponent, AcmkitLibModule, AcmkitLibService, NumberAdderService };
//# sourceMappingURL=acmkit-lib.js.map
