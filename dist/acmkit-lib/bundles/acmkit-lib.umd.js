(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('acmkit-lib', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['acmkit-lib'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var AcmkitLibComponent = /** @class */ (function () {
        function AcmkitLibComponent() {
        }
        AcmkitLibComponent.prototype.ngOnInit = function () { };
        AcmkitLibComponent.ɵfac = function AcmkitLibComponent_Factory(t) { return new (t || AcmkitLibComponent)(); };
        AcmkitLibComponent.ɵcmp = core.ɵɵdefineComponent({ type: AcmkitLibComponent, selectors: [["ak-test-component"]], decls: 2, vars: 0, template: function AcmkitLibComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "p");
                core.ɵɵtext(1, " Library is Working! On Version 1.0.3 Finally ");
                core.ɵɵelementEnd();
            } }, encapsulation: 2 });
        return AcmkitLibComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(AcmkitLibComponent, [{
            type: core.Component,
            args: [{
                    selector: 'ak-test-component',
                    template: "\n    <p>\n      Library is Working! On Version 1.0.3 Finally\n    </p>\n  ",
                    styles: [],
                }]
        }], function () { return []; }, null); })();

    var MathService = /** @class */ (function () {
        function MathService() {
        }
        MathService.prototype.addNumbers = function (num1, num2) {
            return num1 + num2;
        };
        MathService.prototype.subtractNumbes = function (num1, num2) {
            return num1 - num2;
        };
        MathService.prototype.multiplyNumbers = function (num1, num2) {
            return num1 * num2;
        };
        MathService.ɵfac = function MathService_Factory(t) { return new (t || MathService)(); };
        MathService.ɵprov = core.ɵɵdefineInjectable({ token: MathService, factory: MathService.ɵfac, providedIn: 'root' });
        return MathService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MathService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], function () { return []; }, null); })();

    var AcmkitLibModule = /** @class */ (function () {
        function AcmkitLibModule() {
        }
        AcmkitLibModule.ɵmod = core.ɵɵdefineNgModule({ type: AcmkitLibModule });
        AcmkitLibModule.ɵinj = core.ɵɵdefineInjector({ factory: function AcmkitLibModule_Factory(t) { return new (t || AcmkitLibModule)(); }, providers: [MathService], imports: [[]] });
        return AcmkitLibModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(AcmkitLibModule, { declarations: [AcmkitLibComponent], exports: [AcmkitLibComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(AcmkitLibModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [AcmkitLibComponent],
                    imports: [],
                    exports: [AcmkitLibComponent],
                    providers: [MathService],
                }]
        }], null, null); })();

    var AcmkitLibService = /** @class */ (function () {
        function AcmkitLibService() {
        }
        AcmkitLibService.ɵfac = function AcmkitLibService_Factory(t) { return new (t || AcmkitLibService)(); };
        AcmkitLibService.ɵprov = core.ɵɵdefineInjectable({ token: AcmkitLibService, factory: AcmkitLibService.ɵfac, providedIn: 'root' });
        return AcmkitLibService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(AcmkitLibService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    exports.AcmkitLibComponent = AcmkitLibComponent;
    exports.AcmkitLibModule = AcmkitLibModule;
    exports.AcmkitLibService = AcmkitLibService;
    exports.MathService = MathService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=acmkit-lib.umd.js.map
