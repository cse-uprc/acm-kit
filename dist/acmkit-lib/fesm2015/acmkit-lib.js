import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, Component, ɵɵprojectionDef, ɵɵprojection, ɵɵelement, ɵɵtemplate, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵproperty, ɵɵdirectiveInject, ɵɵpureFunction1, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵdefineInjectable, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterLinkWithHref, RouterModule } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

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

const _c0 = ["*"];
class BasePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
BasePageComponent.ɵfac = function BasePageComponent_Factory(t) { return new (t || BasePageComponent)(); };
BasePageComponent.ɵcmp = ɵɵdefineComponent({ type: BasePageComponent, selectors: [["ak-base-page"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "global-app-background"]], template: function BasePageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵelementEnd();
    } }, styles: [".global-app-background[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;width:100%;height:100vh;background:url(../../../../style/assets/images/global-app-background.jpg) 0 0/cover no-repeat;text-align:center;position:absolute;overflow:auto;overflow-x:hidden!important}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BasePageComponent, [{
        type: Component,
        args: [{
                selector: 'ak-base-page',
                templateUrl: './base-page.component.html',
                styleUrls: ['./base-page.component.scss']
            }]
    }], function () { return []; }, null); })();

function CardComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 6);
} }
function CardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelementStart(1, "div", 4);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, CardComponent_div_1_div_3_Template, 1, 0, "div", 5);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.title);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.editRoute);
} }
const _c0$1 = function (a0) { return { "card-padding": a0 }; };
const _c1 = ["*"];
class CardComponent {
    constructor(router) {
        this.router = router;
        this.editRoute = '/';
    }
    ngOnInit() { }
    onEditClick() {
        this.router.navigate([this.editRoute]);
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(ɵɵdirectiveInject(Router)); };
CardComponent.ɵcmp = ɵɵdefineComponent({ type: CardComponent, selectors: [["ak-card"]], inputs: { title: "title", editRoute: "editRoute" }, ngContentSelectors: _c1, decls: 4, vars: 4, consts: [[1, "card", 3, "ngClass"], ["class", "header", 4, "ngIf"], [1, "content-padding"], [1, "header"], [1, "title"], ["class", "edit-icon", 4, "ngIf"], [1, "edit-icon"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, CardComponent_div_1_Template, 4, 2, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵprojection(3);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction1(2, _c0$1, !ctx.title));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.title);
    } }, directives: [NgClass, NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardComponent, [{
        type: Component,
        args: [{
                selector: 'ak-card',
                templateUrl: './card.component.html',
            }]
    }], function () { return [{ type: Router }]; }, { title: [{
            type: Input
        }], editRoute: [{
            type: Input
        }] }); })();

class LoginCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginCardComponent.ɵfac = function LoginCardComponent_Factory(t) { return new (t || LoginCardComponent)(); };
LoginCardComponent.ɵcmp = ɵɵdefineComponent({ type: LoginCardComponent, selectors: [["ak-login-card"]], decls: 28, vars: 0, consts: [[1, "center-card"], [1, "padding-card"], [1, "lccc-logo"], [1, "login-header"], [2, "text-align", "center", "margin-bottom", "30px"], ["routerLink", "/create-account"], [1, "card-formatting"], ["type", "text"], ["type", "button", 1, "btn", "btn-primary"], [2, "text-align", "center", "margin-top", "20px"], ["routerLink", "/reset-password"], [1, "bottom-container"], ["href", "https://github.com/cse-uprc", "target", "_blank"]], template: function LoginCardComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "ak-card");
        ɵɵelementStart(2, "div", 1);
        ɵɵelement(3, "div", 2);
        ɵɵelementStart(4, "h1", 3);
        ɵɵtext(5, "UPRC ACM Login");
        ɵɵelementEnd();
        ɵɵelementStart(6, "p", 4);
        ɵɵtext(7, "or ");
        ɵɵelementStart(8, "a", 5);
        ɵɵtext(9, "Create Account");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(10, "div", 6);
        ɵɵelementStart(11, "label");
        ɵɵtext(12, "Username:");
        ɵɵelementEnd();
        ɵɵelement(13, "input", 7);
        ɵɵelementEnd();
        ɵɵelementStart(14, "div", 6);
        ɵɵelementStart(15, "label");
        ɵɵtext(16, "Password:");
        ɵɵelementEnd();
        ɵɵelement(17, "input", 7);
        ɵɵelementEnd();
        ɵɵelementStart(18, "button", 8);
        ɵɵtext(19, "Login");
        ɵɵelementEnd();
        ɵɵelementStart(20, "p", 9);
        ɵɵelementStart(21, "a", 10);
        ɵɵtext(22, "Forgot password?");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(23, "p", 11);
        ɵɵtext(24, "Check out our ");
        ɵɵelementStart(25, "a", 12);
        ɵɵtext(26, "GitHub");
        ɵɵelementEnd();
        ɵɵtext(27, "!");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [CardComponent, RouterLinkWithHref], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LoginCardComponent, [{
        type: Component,
        args: [{
                selector: 'ak-login-card',
                templateUrl: './login-card.component.html'
            }]
    }], function () { return []; }, null); })();

class AcmkitLibModule {
}
AcmkitLibModule.ɵmod = ɵɵdefineNgModule({ type: AcmkitLibModule });
AcmkitLibModule.ɵinj = ɵɵdefineInjector({ factory: function AcmkitLibModule_Factory(t) { return new (t || AcmkitLibModule)(); }, providers: [], imports: [[BrowserModule, RouterModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AcmkitLibModule, { declarations: [AcmkitLibComponent, CardComponent, BasePageComponent, LoginCardComponent], imports: [BrowserModule, RouterModule], exports: [AcmkitLibComponent, CardComponent, BasePageComponent, LoginCardComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AcmkitLibModule, [{
        type: NgModule,
        args: [{
                declarations: [AcmkitLibComponent, CardComponent, BasePageComponent, LoginCardComponent],
                imports: [BrowserModule, RouterModule],
                exports: [AcmkitLibComponent, CardComponent, BasePageComponent, LoginCardComponent],
                providers: [],
            }]
    }], null, null); })();

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

/**
 * Public API Surface of acmkit-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AcmkitLibComponent, AcmkitLibModule, AcmkitLibService, BasePageComponent, CardComponent, LoginCardComponent };
//# sourceMappingURL=acmkit-lib.js.map
