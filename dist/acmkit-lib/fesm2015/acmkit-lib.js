import { __decorate } from 'tslib';
import { Component, Input, NgModule, ɵɵdefineInjectable, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

let AcmkitLibComponent = class AcmkitLibComponent {
    constructor() { }
    ngOnInit() { }
};
AcmkitLibComponent = __decorate([
    Component({
        selector: 'ak-test-component',
        template: `
    <p>
      Library is Working! On Version 1.0.3 Finally
    </p>
  `
    })
], AcmkitLibComponent);

let BasePageComponent = class BasePageComponent {
    constructor() { }
    ngOnInit() {
    }
};
BasePageComponent = __decorate([
    Component({
        selector: 'ak-base-page',
        template: "<div class=\"global-app-background\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
        styles: [".global-app-background{-o-object-fit:cover;object-fit:cover;width:100%;height:100vh;background:url(../../../../style/assets/images/global-app-background.jpg) 0 0/cover no-repeat;text-align:center;position:absolute;overflow:auto;overflow-x:hidden!important}"]
    })
], BasePageComponent);

let CardComponent = class CardComponent {
    constructor(router) {
        this.router = router;
        this.editRoute = '/';
    }
    ngOnInit() { }
    onEditClick() {
        this.router.navigate([this.editRoute]);
    }
};
CardComponent.ctorParameters = () => [
    { type: Router }
];
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

let AcmkitLibModule = class AcmkitLibModule {
};
AcmkitLibModule = __decorate([
    NgModule({
        declarations: [AcmkitLibComponent, CardComponent, BasePageComponent],
        imports: [BrowserModule, RouterModule],
        exports: [AcmkitLibComponent, CardComponent, BasePageComponent],
        providers: [],
    })
], AcmkitLibModule);

let AcmkitLibService = class AcmkitLibService {
    constructor() { }
};
AcmkitLibService.ɵprov = ɵɵdefineInjectable({ factory: function AcmkitLibService_Factory() { return new AcmkitLibService(); }, token: AcmkitLibService, providedIn: "root" });
AcmkitLibService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AcmkitLibService);

/**
 * Public API Surface of acmkit-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AcmkitLibComponent, AcmkitLibModule, AcmkitLibService, BasePageComponent, CardComponent };
//# sourceMappingURL=acmkit-lib.js.map
