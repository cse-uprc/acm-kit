import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, Component, ɵɵnamespaceSVG, ɵɵelement, ɵɵnamespaceHTML, ɵɵadvance, ɵɵtextInterpolate, Input, ɵɵdefineInjectable, Injectable, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

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

class AngularTestTitleComponent {
    constructor() {
        this.titleText = 'Angular Testing';
    }
    ngOnInit() { }
}
AngularTestTitleComponent.ɵfac = function AngularTestTitleComponent_Factory(t) { return new (t || AngularTestTitleComponent)(); };
AngularTestTitleComponent.ɵcmp = ɵɵdefineComponent({ type: AngularTestTitleComponent, selectors: [["ak-angular-test-title"]], inputs: { titleText: "titleText" }, decls: 10, vars: 1, consts: [["role", "main", 1, "content"], [1, "card", "highlight-card", "card-small"], ["id", "rocket", "alt", "Rocket Ship", "xmlns", "http://www.w3.org/2000/svg", "width", "101.678", "height", "101.678", "viewBox", "0 0 101.678 101.678"], ["id", "Group_83", "data-name", "Group 83", "transform", "translate(-141 -696)"], ["id", "Ellipse_8", "data-name", "Ellipse 8", "cx", "50.839", "cy", "50.839", "r", "50.839", "transform", "translate(141 696)", "fill", "#dd0031"], ["id", "Group_47", "data-name", "Group 47", "transform", "translate(165.185 720.185)"], ["id", "Path_33", "data-name", "Path 33", "d", "M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z", "transform", "translate(0.371 3.363)", "fill", "#fff"], ["id", "Path_34", "data-name", "Path 34", "d", "M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z", "transform", "translate(0 0.005)", "fill", "#fff"]], template: function AngularTestTitleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵnamespaceSVG();
        ɵɵelementStart(2, "svg", 2);
        ɵɵelementStart(3, "g", 3);
        ɵɵelement(4, "circle", 4);
        ɵɵelementStart(5, "g", 5);
        ɵɵelement(6, "path", 6);
        ɵɵelement(7, "path", 7);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(8, "span");
        ɵɵtext(9);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(9);
        ɵɵtextInterpolate(ctx.titleText);
    } }, styles: ["@charset \"UTF-8\";[_nghost-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";font-size:14px;color:#333;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:8px 0}p[_ngcontent-%COMP%]{margin:0}.spacer[_ngcontent-%COMP%]{flex:1}.toolbar[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;height:60px;display:flex;align-items:center;background-color:#1976d2;color:#fff;font-weight:600}.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 16px}.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]{height:40px;margin:0 16px}.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover{opacity:.8}.content[_ngcontent-%COMP%]{display:flex;margin:82px auto 32px;padding:0 16px;max-width:960px;flex-direction:column;align-items:center}svg.material-icons[_ngcontent-%COMP%]{height:24px;width:auto}svg.material-icons[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#888}.card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;margin-top:16px}.card[_ngcontent-%COMP%]{border-radius:4px;border:1px solid #eee;background-color:#fafafa;height:40px;width:200px;margin:0 8px 16px;padding:16px;display:flex;flex-direction:row;justify-content:center;align-items:center;transition:.2s ease-in-out;line-height:24px}.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child){margin-right:0}.card.card-small[_ngcontent-%COMP%]{height:16px;width:168px}.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card){cursor:pointer}.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover{transform:translateY(-3px);box-shadow:0 4px 17px rgba(0,0,0,.35)}.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#696767}.card.highlight-card[_ngcontent-%COMP%]{background-color:#1976d2;color:#fff;font-weight:600;border:none;width:auto;min-width:30%;position:relative}.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:60px}svg#rocket[_ngcontent-%COMP%]{width:80px;position:absolute;left:-10px;top:-24px}svg#rocket-smoke[_ngcontent-%COMP%]{height:calc(100vh - 95px);position:absolute;top:10px;right:180px;z-index:-10}a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:visited{color:#1976d2;text-decoration:none}a[_ngcontent-%COMP%]:hover{color:#125699}.terminal[_ngcontent-%COMP%]{position:relative;width:80%;max-width:600px;border-radius:6px;padding-top:45px;margin-top:8px;overflow:hidden;background-color:#0f0f10}.terminal[_ngcontent-%COMP%]::before{content:\"\u2022\u2022\u2022\";position:absolute;top:0;left:0;height:4px;background:#3a3a3a;color:#c2c3c4;width:100%;font-size:2rem;line-height:0;padding:14px 0;text-indent:4px}.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;color:#fff;padding:0 1rem 1rem;margin:0}.circle-link[_ngcontent-%COMP%]{height:40px;width:40px;border-radius:40px;margin:8px;background-color:#fff;border:1px solid #eee;display:flex;justify-content:center;align-items:center;cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);transition:1s ease-out}.circle-link[_ngcontent-%COMP%]:hover{transform:translateY(-.25rem);box-shadow:0 3px 15px rgba(0,0,0,.2)}footer[_ngcontent-%COMP%]{margin-top:8px;display:flex;align-items:center;line-height:20px}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center}.github-star-badge[_ngcontent-%COMP%]{color:#24292e;display:flex;align-items:center;font-size:12px;padding:3px 10px;border:1px solid rgba(27,31,35,.2);border-radius:3px;background-image:linear-gradient(-180deg,#fafbfc,#eff3f6 90%);margin-left:4px;font-weight:600;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol}.github-star-badge[_ngcontent-%COMP%]:hover{background-image:linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);border-color:rgba(27,31,35,.35);background-position:-.5em}.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{height:16px;width:16px;margin-right:4px}svg#clouds[_ngcontent-%COMP%]{position:fixed;bottom:-160px;left:-230px;z-index:-10;width:1920px}@media screen and (max-width:767px){.card-container[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%]{width:100%}.card[_ngcontent-%COMP%]:not(.highlight-card){height:16px;margin:8px 0}.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:72px}svg#rocket-smoke[_ngcontent-%COMP%]{right:120px;transform:rotate(-5deg)}}@media screen and (max-width:575px){svg#rocket-smoke[_ngcontent-%COMP%]{display:none;visibility:hidden}}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AngularTestTitleComponent, [{
        type: Component,
        args: [{
                selector: 'ak-angular-test-title',
                templateUrl: './angular-test-title.component.html',
                styleUrls: ['./angular-test-title.component.scss'],
            }]
    }], function () { return []; }, { titleText: [{
            type: Input
        }] }); })();

class MathService {
    constructor() { }
    addNumbers(num1, num2) {
        return num1 + num2;
    }
    subtractNumbers(num1, num2) {
        return num1 - num2;
    }
    multiplyNumbers(num1, num2) {
        return num1 * num2;
    }
    addThreeNumbers(num1, num2, num3) {
        return num1 + num2 + num3;
    }
}
MathService.ɵfac = function MathService_Factory(t) { return new (t || MathService)(); };
MathService.ɵprov = ɵɵdefineInjectable({ token: MathService, factory: MathService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MathService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();

class AcmkitLibModule {
}
AcmkitLibModule.ɵmod = ɵɵdefineNgModule({ type: AcmkitLibModule });
AcmkitLibModule.ɵinj = ɵɵdefineInjector({ factory: function AcmkitLibModule_Factory(t) { return new (t || AcmkitLibModule)(); }, providers: [MathService], imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AcmkitLibModule, { declarations: [AcmkitLibComponent, AngularTestTitleComponent], exports: [AcmkitLibComponent, AngularTestTitleComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AcmkitLibModule, [{
        type: NgModule,
        args: [{
                declarations: [AcmkitLibComponent, AngularTestTitleComponent],
                imports: [],
                exports: [AcmkitLibComponent, AngularTestTitleComponent],
                providers: [MathService],
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

export { AcmkitLibComponent, AcmkitLibModule, AcmkitLibService, AngularTestTitleComponent, MathService };
//# sourceMappingURL=acmkit-lib.js.map
