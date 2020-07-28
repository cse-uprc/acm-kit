import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class AcmkitLibService {
    constructor() { }
}
AcmkitLibService.ɵfac = function AcmkitLibService_Factory(t) { return new (t || AcmkitLibService)(); };
AcmkitLibService.ɵprov = ɵɵdefineInjectable({ token: AcmkitLibService, factory: AcmkitLibService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AcmkitLibService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class AcmkitLibComponent {
    constructor() { }
    ngOnInit() { }
}
AcmkitLibComponent.ɵfac = function AcmkitLibComponent_Factory(t) { return new (t || AcmkitLibComponent)(); };
AcmkitLibComponent.ɵcmp = ɵɵdefineComponent({ type: AcmkitLibComponent, selectors: [["ak-test-component"]], decls: 2, vars: 0, template: function AcmkitLibComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " Library is Working! On Version 1.0.3 Finally ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AcmkitLibComponent, [{
        type: Component,
        args: [{
                selector: 'ak-test-component',
                template: `
    <p>
      Library is Working! On Version 1.0.3 Finally
    </p>
  `,
                styles: [],
            }]
    }], function () { return []; }, null); })();

class AcmkitLibModule {
}
AcmkitLibModule.ɵmod = ɵɵdefineNgModule({ type: AcmkitLibModule });
AcmkitLibModule.ɵinj = ɵɵdefineInjector({ factory: function AcmkitLibModule_Factory(t) { return new (t || AcmkitLibModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AcmkitLibModule, { declarations: [AcmkitLibComponent], exports: [AcmkitLibComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AcmkitLibModule, [{
        type: NgModule,
        args: [{
                declarations: [AcmkitLibComponent],
                imports: [],
                exports: [AcmkitLibComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of acmkit-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AcmkitLibComponent, AcmkitLibModule, AcmkitLibService };
//# sourceMappingURL=acmkit-lib.js.map
