import { __decorate } from 'tslib';
import { Component, NgModule, ɵɵdefineInjectable, Injectable } from '@angular/core';

let AcmkitLibComponent = class AcmkitLibComponent {
    constructor() { }
    ngOnInit() {
    }
};
AcmkitLibComponent = __decorate([
    Component({
        selector: 'ak-acmkit-lib',
        template: `
    <p>
      acmkit-lib works!
    </p>
  `
    })
], AcmkitLibComponent);

let TestFolderComponent = class TestFolderComponent {
    constructor() { }
    ngOnInit() {
    }
};
TestFolderComponent = __decorate([
    Component({
        selector: 'ak-test-folder',
        template: "<p>test-folder works!</p>\n",
        styles: [""]
    })
], TestFolderComponent);

let AcmkitLibModule = class AcmkitLibModule {
};
AcmkitLibModule = __decorate([
    NgModule({
        declarations: [AcmkitLibComponent, TestFolderComponent],
        imports: [],
        exports: [AcmkitLibComponent, TestFolderComponent],
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

/*
 * Public API Surface of acmkit-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AcmkitLibComponent, AcmkitLibModule, AcmkitLibService, TestFolderComponent };
//# sourceMappingURL=acmkit-lib.js.map
