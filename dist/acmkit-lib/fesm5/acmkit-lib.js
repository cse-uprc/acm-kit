import { __decorate } from 'tslib';
import { Component, Input, NgModule, ɵɵdefineInjectable, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

var AcmkitLibComponent = /** @class */ (function () {
    function AcmkitLibComponent() {
    }
    AcmkitLibComponent.prototype.ngOnInit = function () { };
    AcmkitLibComponent = __decorate([
        Component({
            selector: 'ak-test-component',
            template: "\n    <p>\n      Library is Working! On Version 1.0.3 Finally\n    </p>\n  "
        })
    ], AcmkitLibComponent);
    return AcmkitLibComponent;
}());

var BasePageComponent = /** @class */ (function () {
    function BasePageComponent() {
    }
    BasePageComponent.prototype.ngOnInit = function () { };
    BasePageComponent = __decorate([
        Component({
            selector: 'ak-base-page',
            template: "<div class=\"global-app-background\">\r\n  <ng-content></ng-content>\r\n</div>\r\n"
        })
    ], BasePageComponent);
    return BasePageComponent;
}());

var CardComponent = /** @class */ (function () {
    function CardComponent(router) {
        this.router = router;
        this.editRoute = '/';
    }
    CardComponent.prototype.ngOnInit = function () { };
    CardComponent.prototype.onEditClick = function () {
        this.router.navigate([this.editRoute]);
    };
    CardComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    __decorate([
        Input()
    ], CardComponent.prototype, "title", void 0);
    __decorate([
        Input()
    ], CardComponent.prototype, "editRoute", void 0);
    CardComponent = __decorate([
        Component({
            selector: 'ak-card',
            template: "<div class=\"card\" [ngClass]=\"{ 'card-padding': !title }\">\r\n  <div *ngIf=\"title\" class=\"header\">\r\n    <div class=\"title\">{{ title }}</div>\r\n    <div *ngIf=\"editRoute\" class=\"edit-icon\"></div>\r\n  </div>\r\n  <div class=\"content-padding\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n"
        })
    ], CardComponent);
    return CardComponent;
}());

var LoginCardComponent = /** @class */ (function () {
    function LoginCardComponent() {
    }
    LoginCardComponent.prototype.ngOnInit = function () {
    };
    LoginCardComponent = __decorate([
        Component({
            selector: 'ak-login-card',
            template: "<div class=\"center-card\">\r\n  <ak-card>\r\n    <div class=\"padding-card\">\r\n      <div class=\"lccc-logo\"></div>\r\n      <h1 class=\"login-header\">UPRC ACM Login</h1>\r\n\r\n      <p style=\"text-align: center; margin-bottom: 30px;\">\r\n        or <a routerLink=\"/create-account\">Create Account</a>\r\n      </p>\r\n\r\n      <div class=\"card-formatting\">\r\n        <label>Username:</label>\r\n        <input type=\"text\" />\r\n      </div>\r\n\r\n      <div class=\"card-formatting\">\r\n        <label>Password:</label>\r\n        <input type=\"text\" />\r\n      </div>\r\n\r\n      <button class=\"btn btn-primary\" type=\"button\">Login</button>\r\n\r\n      <p style=\"text-align: center; margin-top: 20px;\">\r\n        <a routerLink=\"/reset-password\">Forgot password?</a>\r\n      </p>\r\n\r\n      <p class=\"bottom-container\">\r\n        Check out our\r\n        <a href=\"https://github.com/cse-uprc\" target=\"_blank\">GitHub</a>!\r\n      </p>\r\n    </div>\r\n  </ak-card>\r\n</div>\r\n"
        })
    ], LoginCardComponent);
    return LoginCardComponent;
}());

var AcmkitLibModule = /** @class */ (function () {
    function AcmkitLibModule() {
    }
    AcmkitLibModule = __decorate([
        NgModule({
            declarations: [AcmkitLibComponent, CardComponent, BasePageComponent, LoginCardComponent],
            imports: [BrowserModule, RouterModule],
            exports: [AcmkitLibComponent, CardComponent, BasePageComponent, LoginCardComponent],
            providers: [],
        })
    ], AcmkitLibModule);
    return AcmkitLibModule;
}());

var AcmkitLibService = /** @class */ (function () {
    function AcmkitLibService() {
    }
    AcmkitLibService.ɵprov = ɵɵdefineInjectable({ factory: function AcmkitLibService_Factory() { return new AcmkitLibService(); }, token: AcmkitLibService, providedIn: "root" });
    AcmkitLibService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], AcmkitLibService);
    return AcmkitLibService;
}());

/**
 * Public API Surface of acmkit-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AcmkitLibComponent, AcmkitLibModule, AcmkitLibService, BasePageComponent, CardComponent, LoginCardComponent };
//# sourceMappingURL=acmkit-lib.js.map
