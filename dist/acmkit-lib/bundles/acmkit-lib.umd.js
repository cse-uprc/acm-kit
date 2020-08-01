(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@angular/router'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('acmkit-lib', ['exports', '@angular/core', '@angular/platform-browser', '@angular/router', '@angular/common'], factory) :
    (global = global || self, factory(global['acmkit-lib'] = {}, global.ng.core, global.ng.platformBrowser, global.ng.router, global.ng.common));
}(this, (function (exports, core, platformBrowser, router, common) { 'use strict';

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

    var _c0 = ["*"];
    var BasePageComponent = /** @class */ (function () {
        function BasePageComponent() {
        }
        BasePageComponent.prototype.ngOnInit = function () {
        };
        BasePageComponent.ɵfac = function BasePageComponent_Factory(t) { return new (t || BasePageComponent)(); };
        BasePageComponent.ɵcmp = core.ɵɵdefineComponent({ type: BasePageComponent, selectors: [["ak-base-page"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "global-app-background"]], template: function BasePageComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵprojection(1);
                core.ɵɵelementEnd();
            } }, styles: [".global-app-background[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;width:100%;height:100vh;background:url(../../../../style/assets/images/global-app-background.jpg) 0 0/cover no-repeat;text-align:center;position:absolute;overflow:auto;overflow-x:hidden!important}"] });
        return BasePageComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(BasePageComponent, [{
            type: core.Component,
            args: [{
                    selector: 'ak-base-page',
                    templateUrl: './base-page.component.html',
                    styleUrls: ['./base-page.component.scss']
                }]
        }], function () { return []; }, null); })();

    function CardComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "div", 6);
    } }
    function CardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 3);
        core.ɵɵelementStart(1, "div", 4);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(3, CardComponent_div_1_div_3_Template, 1, 0, "div", 5);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r0 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r0.title);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r0.editRoute);
    } }
    var _c0$1 = function (a0) { return { "card-padding": a0 }; };
    var _c1 = ["*"];
    var CardComponent = /** @class */ (function () {
        function CardComponent(router) {
            this.router = router;
            this.editRoute = '/';
        }
        CardComponent.prototype.ngOnInit = function () { };
        CardComponent.prototype.onEditClick = function () {
            this.router.navigate([this.editRoute]);
        };
        CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(core.ɵɵdirectiveInject(router.Router)); };
        CardComponent.ɵcmp = core.ɵɵdefineComponent({ type: CardComponent, selectors: [["ak-card"]], inputs: { title: "title", editRoute: "editRoute" }, ngContentSelectors: _c1, decls: 4, vars: 4, consts: [[1, "card", 3, "ngClass"], ["class", "header", 4, "ngIf"], [1, "content-padding"], [1, "header"], [1, "title"], ["class", "edit-icon", 4, "ngIf"], [1, "edit-icon"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵtemplate(1, CardComponent_div_1_Template, 4, 2, "div", 1);
                core.ɵɵelementStart(2, "div", 2);
                core.ɵɵprojection(3);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵproperty("ngClass", core.ɵɵpureFunction1(2, _c0$1, !ctx.title));
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.title);
            } }, directives: [common.NgClass, common.NgIf], encapsulation: 2 });
        return CardComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CardComponent, [{
            type: core.Component,
            args: [{
                    selector: 'ak-card',
                    templateUrl: './card.component.html',
                }]
        }], function () { return [{ type: router.Router }]; }, { title: [{
                type: core.Input
            }], editRoute: [{
                type: core.Input
            }] }); })();

    var LoginCardComponent = /** @class */ (function () {
        function LoginCardComponent() {
        }
        LoginCardComponent.prototype.ngOnInit = function () {
        };
        LoginCardComponent.ɵfac = function LoginCardComponent_Factory(t) { return new (t || LoginCardComponent)(); };
        LoginCardComponent.ɵcmp = core.ɵɵdefineComponent({ type: LoginCardComponent, selectors: [["ak-login-card"]], decls: 28, vars: 0, consts: [[1, "center-card"], [1, "padding-card"], [1, "lccc-logo"], [1, "login-header"], [2, "text-align", "center", "margin-bottom", "30px"], ["routerLink", "/create-account"], [1, "card-formatting"], ["type", "text"], ["type", "button", 1, "btn", "btn-primary"], [2, "text-align", "center", "margin-top", "20px"], ["routerLink", "/reset-password"], [1, "bottom-container"], ["href", "https://github.com/cse-uprc", "target", "_blank"]], template: function LoginCardComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "ak-card");
                core.ɵɵelementStart(2, "div", 1);
                core.ɵɵelement(3, "div", 2);
                core.ɵɵelementStart(4, "h1", 3);
                core.ɵɵtext(5, "UPRC ACM Login");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(6, "p", 4);
                core.ɵɵtext(7, "or ");
                core.ɵɵelementStart(8, "a", 5);
                core.ɵɵtext(9, "Create Account");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(10, "div", 6);
                core.ɵɵelementStart(11, "label");
                core.ɵɵtext(12, "Username:");
                core.ɵɵelementEnd();
                core.ɵɵelement(13, "input", 7);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(14, "div", 6);
                core.ɵɵelementStart(15, "label");
                core.ɵɵtext(16, "Password:");
                core.ɵɵelementEnd();
                core.ɵɵelement(17, "input", 7);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(18, "button", 8);
                core.ɵɵtext(19, "Login");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(20, "p", 9);
                core.ɵɵelementStart(21, "a", 10);
                core.ɵɵtext(22, "Forgot password?");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(23, "p", 11);
                core.ɵɵtext(24, "Check out our ");
                core.ɵɵelementStart(25, "a", 12);
                core.ɵɵtext(26, "GitHub");
                core.ɵɵelementEnd();
                core.ɵɵtext(27, "!");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } }, directives: [CardComponent, router.RouterLinkWithHref], encapsulation: 2 });
        return LoginCardComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(LoginCardComponent, [{
            type: core.Component,
            args: [{
                    selector: 'ak-login-card',
                    templateUrl: './login-card.component.html'
                }]
        }], function () { return []; }, null); })();

    var AcmkitLibModule = /** @class */ (function () {
        function AcmkitLibModule() {
        }
        AcmkitLibModule.ɵmod = core.ɵɵdefineNgModule({ type: AcmkitLibModule });
        AcmkitLibModule.ɵinj = core.ɵɵdefineInjector({ factory: function AcmkitLibModule_Factory(t) { return new (t || AcmkitLibModule)(); }, providers: [], imports: [[platformBrowser.BrowserModule, router.RouterModule]] });
        return AcmkitLibModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(AcmkitLibModule, { declarations: [AcmkitLibComponent, CardComponent, BasePageComponent, LoginCardComponent], imports: [platformBrowser.BrowserModule, router.RouterModule], exports: [AcmkitLibComponent, CardComponent, BasePageComponent, LoginCardComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(AcmkitLibModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [AcmkitLibComponent, CardComponent, BasePageComponent, LoginCardComponent],
                    imports: [platformBrowser.BrowserModule, router.RouterModule],
                    exports: [AcmkitLibComponent, CardComponent, BasePageComponent, LoginCardComponent],
                    providers: [],
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
    exports.BasePageComponent = BasePageComponent;
    exports.CardComponent = CardComponent;
    exports.LoginCardComponent = LoginCardComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=acmkit-lib.umd.js.map
