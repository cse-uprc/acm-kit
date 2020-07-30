(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('acmkit-lib', ['exports', '@angular/core', '@angular/platform-browser', '@angular/router'], factory) :
    (global = global || self, factory(global['acmkit-lib'] = {}, global.ng.core, global.ng.platformBrowser, global.ng.router));
}(this, (function (exports, core, platformBrowser, router) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var AcmkitLibComponent = /** @class */ (function () {
        function AcmkitLibComponent() {
        }
        AcmkitLibComponent.prototype.ngOnInit = function () { };
        AcmkitLibComponent = __decorate([
            core.Component({
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
            core.Input()
        ], AngularTestTitleComponent.prototype, "titleText", void 0);
        AngularTestTitleComponent = __decorate([
            core.Component({
                selector: 'ak-angular-test-title',
                template: "<div class=\"content\" role=\"main\">\n  <div class=\"card highlight-card card-small\">\n    <svg\n      id=\"rocket\"\n      alt=\"Rocket Ship\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"101.678\"\n      height=\"101.678\"\n      viewBox=\"0 0 101.678 101.678\"\n    >\n      <g id=\"Group_83\" data-name=\"Group 83\" transform=\"translate(-141 -696)\">\n        <circle\n          id=\"Ellipse_8\"\n          data-name=\"Ellipse 8\"\n          cx=\"50.839\"\n          cy=\"50.839\"\n          r=\"50.839\"\n          transform=\"translate(141 696)\"\n          fill=\"#dd0031\"\n        />\n        <g\n          id=\"Group_47\"\n          data-name=\"Group 47\"\n          transform=\"translate(165.185 720.185)\"\n        >\n          <path\n            id=\"Path_33\"\n            data-name=\"Path 33\"\n            d=\"M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z\"\n            transform=\"translate(0.371 3.363)\"\n            fill=\"#fff\"\n          />\n          <path\n            id=\"Path_34\"\n            data-name=\"Path 34\"\n            d=\"M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z\"\n            transform=\"translate(0 0.005)\"\n            fill=\"#fff\"\n          />\n        </g>\n      </g>\n    </svg>\n\n    <span>{{ titleText }}</span>\n  </div>\n</div>\n",
                styles: ["@charset \"UTF-8\";:host{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";font-size:14px;color:#333;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1,h2,h3,h4,h5,h6{margin:8px 0}p{margin:0}.spacer{flex:1}.toolbar{position:absolute;top:0;left:0;right:0;height:60px;display:flex;align-items:center;background-color:#1976d2;color:#fff;font-weight:600}.toolbar img{margin:0 16px}.toolbar #twitter-logo{height:40px;margin:0 16px}.toolbar #twitter-logo:hover{opacity:.8}.content{display:flex;margin:82px auto 32px;padding:0 16px;max-width:960px;flex-direction:column;align-items:center}svg.material-icons{height:24px;width:auto}svg.material-icons:not(:last-child){margin-right:8px}.card svg.material-icons path{fill:#888}.card-container{display:flex;flex-wrap:wrap;justify-content:center;margin-top:16px}.card{border-radius:4px;border:1px solid #eee;background-color:#fafafa;height:40px;width:200px;margin:0 8px 16px;padding:16px;display:flex;flex-direction:row;justify-content:center;align-items:center;transition:.2s ease-in-out;line-height:24px}.card-container .card:not(:last-child){margin-right:0}.card.card-small{height:16px;width:168px}.card-container .card:not(.highlight-card){cursor:pointer}.card-container .card:not(.highlight-card):hover{transform:translateY(-3px);box-shadow:0 4px 17px rgba(0,0,0,.35)}.card-container .card:not(.highlight-card):hover .material-icons path{fill:#696767}.card.highlight-card{background-color:#1976d2;color:#fff;font-weight:600;border:none;width:auto;min-width:30%;position:relative}.card.card.highlight-card span{margin-left:60px}svg#rocket{width:80px;position:absolute;left:-10px;top:-24px}svg#rocket-smoke{height:calc(100vh - 95px);position:absolute;top:10px;right:180px;z-index:-10}a,a:hover,a:visited{color:#1976d2;text-decoration:none}a:hover{color:#125699}.terminal{position:relative;width:80%;max-width:600px;border-radius:6px;padding-top:45px;margin-top:8px;overflow:hidden;background-color:#0f0f10}.terminal::before{content:\"\u2022\u2022\u2022\";position:absolute;top:0;left:0;height:4px;background:#3a3a3a;color:#c2c3c4;width:100%;font-size:2rem;line-height:0;padding:14px 0;text-indent:4px}.terminal pre{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;color:#fff;padding:0 1rem 1rem;margin:0}.circle-link{height:40px;width:40px;border-radius:40px;margin:8px;background-color:#fff;border:1px solid #eee;display:flex;justify-content:center;align-items:center;cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);transition:1s ease-out}.circle-link:hover{transform:translateY(-.25rem);box-shadow:0 3px 15px rgba(0,0,0,.2)}footer{margin-top:8px;display:flex;align-items:center;line-height:20px}footer a{display:flex;align-items:center}.github-star-badge{color:#24292e;display:flex;align-items:center;font-size:12px;padding:3px 10px;border:1px solid rgba(27,31,35,.2);border-radius:3px;background-image:linear-gradient(-180deg,#fafbfc,#eff3f6 90%);margin-left:4px;font-weight:600;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol}.github-star-badge:hover{background-image:linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);border-color:rgba(27,31,35,.35);background-position:-.5em}.github-star-badge .material-icons{height:16px;width:16px;margin-right:4px}svg#clouds{position:fixed;bottom:-160px;left:-230px;z-index:-10;width:1920px}@media screen and (max-width:767px){.card-container>:not(.circle-link),.terminal{width:100%}.card:not(.highlight-card){height:16px;margin:8px 0}.card.highlight-card span{margin-left:72px}svg#rocket-smoke{right:120px;transform:rotate(-5deg)}}@media screen and (max-width:575px){svg#rocket-smoke{display:none;visibility:hidden}}"]
            })
        ], AngularTestTitleComponent);
        return AngularTestTitleComponent;
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
            { type: router.Router }
        ]; };
        __decorate([
            core.Input()
        ], CardComponent.prototype, "title", void 0);
        __decorate([
            core.Input()
        ], CardComponent.prototype, "editRoute", void 0);
        CardComponent = __decorate([
            core.Component({
                selector: 'ak-card',
                template: "<div class=\"card\" [ngClass]=\"{ 'card-padding': !title }\">\r\n  <div *ngIf=\"title\" class=\"header\">\r\n    <div class=\"title\">{{ title }}</div>\r\n    <div *ngIf=\"editRoute\" class=\"edit-icon\"></div>\r\n  </div>\r\n  <div class=\"content-padding\"><ng-content></ng-content></div>\r\n</div>\r\n"
            })
        ], CardComponent);
        return CardComponent;
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
        MathService.prototype.testMethod = function () {
            console.log('This is from the library');
        };
        MathService.ɵprov = core.ɵɵdefineInjectable({ factory: function MathService_Factory() { return new MathService(); }, token: MathService, providedIn: "root" });
        MathService = __decorate([
            core.Injectable({
                providedIn: 'root',
            })
        ], MathService);
        return MathService;
    }());

    var AcmkitLibModule = /** @class */ (function () {
        function AcmkitLibModule() {
        }
        AcmkitLibModule = __decorate([
            core.NgModule({
                declarations: [AcmkitLibComponent, AngularTestTitleComponent, CardComponent],
                imports: [platformBrowser.BrowserModule, router.RouterModule],
                exports: [AcmkitLibComponent, AngularTestTitleComponent, CardComponent],
                providers: [MathService],
            })
        ], AcmkitLibModule);
        return AcmkitLibModule;
    }());

    var AcmkitLibService = /** @class */ (function () {
        function AcmkitLibService() {
        }
        AcmkitLibService.ɵprov = core.ɵɵdefineInjectable({ factory: function AcmkitLibService_Factory() { return new AcmkitLibService(); }, token: AcmkitLibService, providedIn: "root" });
        AcmkitLibService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], AcmkitLibService);
        return AcmkitLibService;
    }());

    exports.AcmkitLibComponent = AcmkitLibComponent;
    exports.AcmkitLibModule = AcmkitLibModule;
    exports.AcmkitLibService = AcmkitLibService;
    exports.AngularTestTitleComponent = AngularTestTitleComponent;
    exports.MathService = MathService;
    exports.ɵa = CardComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=acmkit-lib.umd.js.map
