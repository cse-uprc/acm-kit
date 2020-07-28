import { __decorate } from 'tslib';
import { Component, NgModule, ɵɵdefineInjectable, Injectable } from '@angular/core';

var AcmkitLibComponent = /** @class */ (function () {
    function AcmkitLibComponent() {
    }
    AcmkitLibComponent.prototype.ngOnInit = function () {
    };
    AcmkitLibComponent = __decorate([
        Component({
            selector: 'ak-acmkit-lib',
            template: "\n    <p>\n      acmkit-lib works!\n    </p>\n  "
        })
    ], AcmkitLibComponent);
    return AcmkitLibComponent;
}());

var TestFolderComponent = /** @class */ (function () {
    function TestFolderComponent() {
    }
    TestFolderComponent.prototype.ngOnInit = function () {
    };
    TestFolderComponent = __decorate([
        Component({
            selector: 'ak-test-folder',
            template: "<p>test-folder works!</p>\n",
            styles: [""]
        })
    ], TestFolderComponent);
    return TestFolderComponent;
}());

var AcmkitLibModule = /** @class */ (function () {
    function AcmkitLibModule() {
    }
    AcmkitLibModule = __decorate([
        NgModule({
            declarations: [AcmkitLibComponent, TestFolderComponent],
            imports: [],
            exports: [AcmkitLibComponent, TestFolderComponent],
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

/*
 * Public API Surface of acmkit-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AcmkitLibComponent, AcmkitLibModule, AcmkitLibService, TestFolderComponent };
//# sourceMappingURL=acmkit-lib.js.map
