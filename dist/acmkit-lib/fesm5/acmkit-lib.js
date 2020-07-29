import { __decorate } from 'tslib';
import { Component, Input, ɵɵdefineInjectable, Injectable, NgModule } from '@angular/core';

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

var AngularTestTitleComponent = /** @class */ (function () {
    function AngularTestTitleComponent() {
        this.titleText = 'Angular Testing';
    }
    AngularTestTitleComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input()
    ], AngularTestTitleComponent.prototype, "titleText", void 0);
    AngularTestTitleComponent = __decorate([
        Component({
            selector: 'ak-angular-test-title',
            template: "<div class=\"content\" role=\"main\">\n  <div class=\"card highlight-card card-small\">\n    <svg\n      id=\"rocket\"\n      alt=\"Rocket Ship\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"101.678\"\n      height=\"101.678\"\n      viewBox=\"0 0 101.678 101.678\"\n    >\n      <g id=\"Group_83\" data-name=\"Group 83\" transform=\"translate(-141 -696)\">\n        <circle\n          id=\"Ellipse_8\"\n          data-name=\"Ellipse 8\"\n          cx=\"50.839\"\n          cy=\"50.839\"\n          r=\"50.839\"\n          transform=\"translate(141 696)\"\n          fill=\"#dd0031\"\n        />\n        <g\n          id=\"Group_47\"\n          data-name=\"Group 47\"\n          transform=\"translate(165.185 720.185)\"\n        >\n          <path\n            id=\"Path_33\"\n            data-name=\"Path 33\"\n            d=\"M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z\"\n            transform=\"translate(0.371 3.363)\"\n            fill=\"#fff\"\n          />\n          <path\n            id=\"Path_34\"\n            data-name=\"Path 34\"\n            d=\"M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z\"\n            transform=\"translate(0 0.005)\"\n            fill=\"#fff\"\n          />\n        </g>\n      </g>\n    </svg>\n\n    <span>{{ titleText }}</span>\n  </div>\n</div>\n",
            styles: ["@charset \"UTF-8\";:host{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";font-size:14px;color:#333;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1,h2,h3,h4,h5,h6{margin:8px 0}p{margin:0}.spacer{flex:1}.toolbar{position:absolute;top:0;left:0;right:0;height:60px;display:flex;align-items:center;background-color:#1976d2;color:#fff;font-weight:600}.toolbar img{margin:0 16px}.toolbar #twitter-logo{height:40px;margin:0 16px}.toolbar #twitter-logo:hover{opacity:.8}.content{display:flex;margin:82px auto 32px;padding:0 16px;max-width:960px;flex-direction:column;align-items:center}svg.material-icons{height:24px;width:auto}svg.material-icons:not(:last-child){margin-right:8px}.card svg.material-icons path{fill:#888}.card-container{display:flex;flex-wrap:wrap;justify-content:center;margin-top:16px}.card{border-radius:4px;border:1px solid #eee;background-color:#fafafa;height:40px;width:200px;margin:0 8px 16px;padding:16px;display:flex;flex-direction:row;justify-content:center;align-items:center;transition:.2s ease-in-out;line-height:24px}.card-container .card:not(:last-child){margin-right:0}.card.card-small{height:16px;width:168px}.card-container .card:not(.highlight-card){cursor:pointer}.card-container .card:not(.highlight-card):hover{transform:translateY(-3px);box-shadow:0 4px 17px rgba(0,0,0,.35)}.card-container .card:not(.highlight-card):hover .material-icons path{fill:#696767}.card.highlight-card{background-color:#1976d2;color:#fff;font-weight:600;border:none;width:auto;min-width:30%;position:relative}.card.card.highlight-card span{margin-left:60px}svg#rocket{width:80px;position:absolute;left:-10px;top:-24px}svg#rocket-smoke{height:calc(100vh - 95px);position:absolute;top:10px;right:180px;z-index:-10}a,a:hover,a:visited{color:#1976d2;text-decoration:none}a:hover{color:#125699}.terminal{position:relative;width:80%;max-width:600px;border-radius:6px;padding-top:45px;margin-top:8px;overflow:hidden;background-color:#0f0f10}.terminal::before{content:\"\u2022\u2022\u2022\";position:absolute;top:0;left:0;height:4px;background:#3a3a3a;color:#c2c3c4;width:100%;font-size:2rem;line-height:0;padding:14px 0;text-indent:4px}.terminal pre{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;color:#fff;padding:0 1rem 1rem;margin:0}.circle-link{height:40px;width:40px;border-radius:40px;margin:8px;background-color:#fff;border:1px solid #eee;display:flex;justify-content:center;align-items:center;cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);transition:1s ease-out}.circle-link:hover{transform:translateY(-.25rem);box-shadow:0 3px 15px rgba(0,0,0,.2)}footer{margin-top:8px;display:flex;align-items:center;line-height:20px}footer a{display:flex;align-items:center}.github-star-badge{color:#24292e;display:flex;align-items:center;font-size:12px;padding:3px 10px;border:1px solid rgba(27,31,35,.2);border-radius:3px;background-image:linear-gradient(-180deg,#fafbfc,#eff3f6 90%);margin-left:4px;font-weight:600;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol}.github-star-badge:hover{background-image:linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);border-color:rgba(27,31,35,.35);background-position:-.5em}.github-star-badge .material-icons{height:16px;width:16px;margin-right:4px}svg#clouds{position:fixed;bottom:-160px;left:-230px;z-index:-10;width:1920px}@media screen and (max-width:767px){.card-container>:not(.circle-link),.terminal{width:100%}.card:not(.highlight-card){height:16px;margin:8px 0}.card.highlight-card span{margin-left:72px}svg#rocket-smoke{right:120px;transform:rotate(-5deg)}}@media screen and (max-width:575px){svg#rocket-smoke{display:none;visibility:hidden}}"]
        })
    ], AngularTestTitleComponent);
    return AngularTestTitleComponent;
}());

var MathService = /** @class */ (function () {
    function MathService() {
    }
    MathService.prototype.addNumbers = function (num1, num2) {
        return num1 + num2;
    };
    MathService.prototype.subtractNumbers = function (num1, num2) {
        return num1 - num2;
    };
    MathService.prototype.multiplyNumbers = function (num1, num2) {
        return num1 * num2;
    };
    MathService.prototype.addThreeNumbers = function (num1, num2, num3) {
        return num1 + num2 + num3;
    };
    MathService.ɵprov = ɵɵdefineInjectable({ factory: function MathService_Factory() { return new MathService(); }, token: MathService, providedIn: "root" });
    MathService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], MathService);
    return MathService;
}());

var AcmkitLibModule = /** @class */ (function () {
    function AcmkitLibModule() {
    }
    AcmkitLibModule = __decorate([
        NgModule({
            declarations: [AcmkitLibComponent, AngularTestTitleComponent],
            imports: [],
            exports: [AcmkitLibComponent, AngularTestTitleComponent],
            providers: [MathService],
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

export { AcmkitLibComponent, AcmkitLibModule, AcmkitLibService, AngularTestTitleComponent, MathService };
//# sourceMappingURL=acmkit-lib.js.map
