(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@angular/router'), require('@angular/core/testing'), require('@angular/common'), require('@angular/common/http/testing'), require('@angular/router/testing'), require('ng-bullet')) :
    typeof define === 'function' && define.amd ? define('acmkit-lib', ['exports', '@angular/core', '@angular/common/http', '@angular/platform-browser', '@angular/platform-browser/animations', '@angular/router', '@angular/core/testing', '@angular/common', '@angular/common/http/testing', '@angular/router/testing', 'ng-bullet'], factory) :
    (global = global || self, factory(global['acmkit-lib'] = {}, global.ng.core, global.ng.common.http, global.ng.platformBrowser, global.ng.platformBrowser.animations, global.ng.router, global.ng.core.testing, global.ng.common, global.ng.common.http.testing, global.ng.router.testing, global.ngBullet));
}(this, (function (exports, core, http, platformBrowser, animations, router, testing, common, testing$1, testing$2, ngBullet) { 'use strict';

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

    var BasePageComponent = /** @class */ (function () {
        function BasePageComponent() {
        }
        BasePageComponent.prototype.ngOnInit = function () { };
        BasePageComponent = __decorate([
            core.Component({
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
                template: "<div class=\"card\" [ngClass]=\"{ 'card-padding': !title }\">\r\n  <div *ngIf=\"title\" class=\"header\">\r\n    <div class=\"title\">{{ title }}</div>\r\n    <div *ngIf=\"editRoute\" class=\"edit-icon\"></div>\r\n  </div>\r\n  <div class=\"content-padding\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n"
            })
        ], CardComponent);
        return CardComponent;
    }());

    var LandingComponent = /** @class */ (function () {
        function LandingComponent(router) {
            this.router = router;
            this.currentActive = 0;
            this.homeOffset = null;
            this.aboutOffset = null;
            this.featureOffset = null;
            this.teamOffset = null;
        }
        LandingComponent.prototype.ngAfterViewInit = function () {
            this.homeOffset = this.homeElement.nativeElement.offsetTop;
            this.aboutOffset = this.aboutElement.nativeElement.offsetTop - 500;
            this.featureOffset = this.featureElemet.nativeElement.offsetTop - 500;
            this.teamOffset = this.teamElement.nativeElement.offsetTop - 500;
        };
        LandingComponent.prototype.scrollHandler = function () {
            if (window.pageYOffset / 4 < 40) {
                this.currentActive = 0;
            }
            else if (window.pageYOffset / 4 >= 40 && window.pageYOffset / 4 < 162) {
                this.currentActive = 1;
            }
            else if (window.pageYOffset / 4 >= 162 && window.pageYOffset / 4 < 284) {
                this.currentActive = 2;
            }
            else {
                this.currentActive = 3;
            }
        };
        LandingComponent.prototype.onSignIn = function () {
            this.router.navigate(['/login']);
        };
        LandingComponent.ctorParameters = function () { return [
            { type: router.Router }
        ]; };
        __decorate([
            core.ViewChild('home')
        ], LandingComponent.prototype, "homeElement", void 0);
        __decorate([
            core.ViewChild('about')
        ], LandingComponent.prototype, "aboutElement", void 0);
        __decorate([
            core.ViewChild('feature')
        ], LandingComponent.prototype, "featureElemet", void 0);
        __decorate([
            core.ViewChild('team')
        ], LandingComponent.prototype, "teamElement", void 0);
        __decorate([
            core.HostListener('window:scroll', ['$event'])
        ], LandingComponent.prototype, "scrollHandler", null);
        LandingComponent = __decorate([
            core.Component({
                selector: 'ak-landing',
                template: "<nav class=\"navbar navbar-expand-md navbar-dark header sticky\">\r\n  <a href=\"/\" class=\"navbar-brand logo-text\">\r\n    ACM Website\r\n  </a>\r\n  <button\r\n    class=\"navbar-toggler nav-icon\"\r\n    type=\"button\"\r\n    data-toggle=\"collapse\"\r\n    data-target=\"#collapsibleNavbar\"\r\n  >\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div\r\n    class=\"collapse navbar-collapse text-center header-text\"\r\n    id=\"collapsibleNavbar\"\r\n  >\r\n    <div class=\"mainmenu\">\r\n      <ul class=\"navbar-nav text-center\" id=\"primary-menu\">\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 0 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#home\"\r\n            >Home</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 1 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#about\"\r\n            >About Us</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 2 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#feature\"\r\n            >Features</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 3 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#team\"\r\n            >Team</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a class=\"nav-link text-light\" href=\"#contact\">Contact Us</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<!-- header section end -->\r\n<!-- hero area start -->\r\n<section class=\"hero-area\" id=\"home\" #home>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-7\">\r\n        <div class=\"hero-area-content\">\r\n          <h1>Welcome to ACM!</h1>\r\n          <p>\r\n            Offical ACM website to help you keep up to date on the latest\r\n            events, meetings, and sessions throughout the year.\r\n          </p>\r\n          <div (click)=\"onSignIn()\" class=\"radius-btn\">Sign In</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- hero area end -->\r\n\r\n<!-- about section start -->\r\n<section class=\"about-area ptb-90\" id=\"about\" #about>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"sec-title\">\r\n          <h2>\r\n            About ACM<span class=\"sec-title-border\"\r\n              ><span></span><span></span><span></span\r\n            ></span>\r\n          </h2>\r\n          <p>\r\n            A little information about what ACM is and what we do.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-ruler-pencil\"></i>\r\n          <h4>What is ACM?</h4>\r\n          <p>\r\n            The Association for Computing Machinery is a US-based international\r\n            learned society for computing. It was founded in 1947, and is the\r\n            world's largest scientific and educational computing society.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-computer\"></i>\r\n          <h4>What to expect to learn?</h4>\r\n          <p>\r\n            You will learn a variety of skills and techniques through ACM. You\r\n            can learn both software and hardware from our Chief Software and\r\n            Chief Hardware officers Sam Butler and Kiyle Winborne\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-headphone-alt\"></i>\r\n          <h4>When we meet?</h4>\r\n          <p>\r\n            We meet every other Friday for meetings and talks about information\r\n            that might be useful to tell people. We meet for coding sessions\r\n            every other Wednesday to learn about other languages and platforms.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"feature-area ptb-90\" id=\"feature\" #feature>\r\n  <div class=\"container\">\r\n    <div class=\"row flexbox-center\">\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"single-feature-box text-lg-right text-center\">\r\n          <ul>\r\n            <li>\r\n              <div class=\"feature-box-info\">\r\n                <h4>Calendar</h4>\r\n                <p>Keep Up to date on what events are coming up.</p>\r\n              </div>\r\n              <div class=\"feature-box-icon\"></div>\r\n            </li>\r\n            <li>\r\n              <div class=\"feature-box-info\">\r\n                <h4>Meetings</h4>\r\n                <p>When we have meetings for topics and events.</p>\r\n              </div>\r\n              <div class=\"feature-box-icon\"></div>\r\n            </li>\r\n            <li>\r\n              <div class=\"feature-box-info\">\r\n                <h4>Code Documentation</h4>\r\n                <p>\r\n                  What is used to help manage source code and documentation.\r\n                </p>\r\n              </div>\r\n              <div class=\"feature-box-icon\"></div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"single-feature-box text-lg-left text-center\">\r\n          <ul>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div class=\"feature-box-info\">\r\n                <h4>Projects</h4>\r\n                <p>What projects we are currently working on or updating.</p>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div class=\"feature-box-info\">\r\n                <h4>Session Links</h4>\r\n                <p>Informative talks or information for learning purposes.</p>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div class=\"feature-box-info\">\r\n                <h4>Ideas</h4>\r\n                <p>\r\n                  Section to keep track of project ideas and upcoming projects.\r\n                </p>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- feature section end -->\r\n\r\n<!-- team section start -->\r\n<section class=\"team-area ptb-90\" id=\"team\" #team>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"sec-title\">\r\n          <h2>\r\n            Meet Our Team<span class=\"sec-title-border\"\r\n              ><span></span><span></span><span></span\r\n            ></span>\r\n          </h2>\r\n          <p>\r\n            These are the current board memebers of ACM. You can click on them\r\n            to learn more information and contact them if need be.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Josue Van Dyke</div></strong>\r\n            <p>Chair</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Sam Butler</div></strong>\r\n            <p>Chief Software Engineer</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Luke Lengel</div></strong>\r\n            <p>Treasurer/Secretary</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Kiyle Winborne</div></strong>\r\n            <p>Chief Hardware Engineer</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- footer section start -->\r\n<footer class=\"footer\" id=\"contact\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"copyright-area\">\r\n          <p>\r\n            &copy; Copyright &copy; 2020 All rights reserved\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"
            })
        ], LandingComponent);
        return LandingComponent;
    }());

    var Environment = /** @class */ (function () {
        function Environment() {
        }
        Environment.API_URL = window.location.href.includes('acm-web')
            ? 'https://acm-microservice-prod.herokuapp.com'
            : 'https://acm-microservice-dev.herokuapp.com';
        Environment.AUTH = window.location.href.includes('acm-web')
            ? 'https://acm-microservice-prod.herokuapp.com/authenticate'
            : 'https://acm-microservice-dev.herokuapp.com/authenticate';
        Environment.ENV = window.location.href.includes('acm-web')
            ? 'app prod'
            : window.location.href.includes('localhost')
                ? 'app local'
                : 'app dev';
        return Environment;
    }());

    var AuthService = /** @class */ (function () {
        function AuthService(http) {
            this.http = http;
        }
        AuthService.prototype.authenticate = function (username, password) {
            this.http
                .post(Environment.AUTH, { username: username, password: password })
                .subscribe(function (response) { return console.log(response.token); });
        };
        AuthService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        AuthService.ɵprov = core.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(core.ɵɵinject(http.HttpClient)); }, token: AuthService, providedIn: "root" });
        AuthService = __decorate([
            core.Injectable({
                providedIn: 'root',
            })
        ], AuthService);
        return AuthService;
    }());

    var LoginCardComponent = /** @class */ (function () {
        function LoginCardComponent(authService) {
            this.authService = authService;
            this.twitterLink = '';
            this.twitterIcon = 'https://cdn4.iconfinder.com/data/icons/miu-hexagon-flat-social/60/twitter-hexagon-social-media-32.png';
            this.githubLink = 'https://github.com/cse-uprc';
            this.githubIcon = 'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_six_gray-256.png';
            this.facebookLink = '';
            this.facebookIcon = 'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/Untitled-16-32.png';
        }
        LoginCardComponent.prototype.onSignIn = function (username, password) {
            this.authService.authenticate(username, password);
        };
        LoginCardComponent.ctorParameters = function () { return [
            { type: AuthService }
        ]; };
        LoginCardComponent = __decorate([
            core.Component({
                selector: 'ak-login-card',
                template: "<div class=\"placeholder-padding\">\r\n  <div class=\"login-wrap\">\r\n    <div class=\"login-html\">\r\n      <input id=\"tab-1\" type=\"radio\" name=\"tab\" class=\"sign-in\" checked />\r\n      <label for=\"tab-1\" class=\"tab\">Sign In</label>\r\n\r\n      <input id=\"tab-2\" type=\"radio\" name=\"tab\" class=\"sign-up\" />\r\n      <label for=\"tab-2\" class=\"tab\">Sign Up</label>\r\n      <div class=\"login-form\">\r\n        <div class=\"sign-in-htm\">\r\n          <div class=\"group\">\r\n            <label for=\"user\" class=\"label\">Username</label>\r\n            <input #username type=\"text\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label for=\"pass\" class=\"label\">Password</label>\r\n            <input #pass type=\"password\" class=\"input\" data-type=\"password\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label class=\"forgot\">Forgot Password?</label>\r\n          </div>\r\n          <div class=\"group\">\r\n            <input\r\n              (click)=\"onSignIn(username.value, pass.value)\"\r\n              type=\"submit\"\r\n              class=\"button\"\r\n              value=\"Sign In\"\r\n            />\r\n          </div>\r\n          <div class=\"hr\"></div>\r\n          <div class=\"social\">\r\n            <div class=\"inline-block\">\r\n              <a [href]=\"twitterLink\" class=\"target-pointer\" target=\"_blank\">\r\n                <img class=\"social-icon\" [src]=\"twitterIcon\" />\r\n              </a>\r\n              <div class=\"social-text\">Twitter</div>\r\n            </div>\r\n\r\n            <div class=\"inline-block\">\r\n              <a [href]=\"githubLink\" class=\"target-pointer\" target=\"_blank\">\r\n                <img class=\"social-icon\" [src]=\"githubIcon\" />\r\n              </a>\r\n              <div class=\"social-text\">Github</div>\r\n            </div>\r\n            <div class=\"inline-block\">\r\n              <a [href]=\"facebookLink\" class=\"target-pointer\" target=\"_blank\">\r\n                <img class=\"social-icon\" [src]=\"facebookIcon\" />\r\n              </a>\r\n              <div class=\"social-text\">Facebook</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"sign-up-htm\">\r\n          <div class=\"group\">\r\n            <label for=\"user\" class=\"label\">First Name</label>\r\n            <input #first type=\"text\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label for=\"pass\" class=\"label\">Last Name</label>\r\n            <input #last type=\"text\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label for=\"pass\" class=\"label\">Email Address</label>\r\n            <input #email type=\"email\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <input type=\"submit\" class=\"button\" value=\"Sign Up\" />\r\n          </div>\r\n          <div class=\"hr\"></div>\r\n          <div class=\"foot-lnk\">\r\n            <label class=\"target-pointer\" for=\"tab-1\">Already Member?</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
            })
        ], LoginCardComponent);
        return LoginCardComponent;
    }());

    var ServicesModule = /** @class */ (function () {
        function ServicesModule() {
        }
        ServicesModule = __decorate([
            core.NgModule({
                imports: [platformBrowser.BrowserModule, http.HttpClientModule],
                providers: [AuthService],
            })
        ], ServicesModule);
        return ServicesModule;
    }());

    var AcmkitLibModule = /** @class */ (function () {
        function AcmkitLibModule() {
        }
        AcmkitLibModule = __decorate([
            core.NgModule({
                declarations: [
                    AcmkitLibComponent,
                    CardComponent,
                    BasePageComponent,
                    LoginCardComponent,
                    LandingComponent,
                ],
                imports: [
                    platformBrowser.BrowserModule,
                    router.RouterModule,
                    animations.BrowserAnimationsModule,
                    http.HttpClientModule,
                    ServicesModule,
                ],
                exports: [
                    AcmkitLibComponent,
                    CardComponent,
                    BasePageComponent,
                    LoginCardComponent,
                    LandingComponent,
                ],
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

    var AbstractTestBed = /** @class */ (function () {
        function AbstractTestBed() {
        }
        AbstractTestBed.useProvider = function (moduleMetaData, provider) {
            var index = moduleMetaData.providers.findIndex(function (p) { return p.provide === provider || p.provide === provider.provide; });
            if (index >= 0) {
                moduleMetaData.providers.splice(index, 1);
            }
            moduleMetaData.providers.push(provider);
        };
        AbstractTestBed.setup = function (updateModuleMetaData) {
            return __awaiter(this, void 0, void 0, function () {
                var moduleMetaData;
                return __generator(this, function (_a) {
                    moduleMetaData = this.getModuleMetaData();
                    if (updateModuleMetaData) {
                        updateModuleMetaData(moduleMetaData);
                    }
                    testing.TestBed.configureTestingModule(moduleMetaData);
                    return [2 /*return*/];
                });
            });
        };
        AbstractTestBed.getModuleMetaData = function () {
            return null;
        };
        return AbstractTestBed;
    }());

    var AcmKitTestBed = /** @class */ (function (_super) {
        __extends(AcmKitTestBed, _super);
        function AcmKitTestBed() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AcmKitTestBed.getModuleMetaData = function () {
            return {
                imports: [testing$2.RouterTestingModule, common.CommonModule, testing$1.HttpClientTestingModule],
                declarations: [],
            };
        };
        return AcmKitTestBed;
    }(AbstractTestBed));

    var setupTests = function (initTest) { return ngBullet.configureTestSuite(function () { return initTest(); }); };

    exports.AbstractTestBed = AbstractTestBed;
    exports.AcmKitTestBed = AcmKitTestBed;
    exports.AcmkitLibComponent = AcmkitLibComponent;
    exports.AcmkitLibModule = AcmkitLibModule;
    exports.AcmkitLibService = AcmkitLibService;
    exports.AuthService = AuthService;
    exports.BasePageComponent = BasePageComponent;
    exports.CardComponent = CardComponent;
    exports.LandingComponent = LandingComponent;
    exports.LoginCardComponent = LoginCardComponent;
    exports.ServicesModule = ServicesModule;
    exports.setupTests = setupTests;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=acmkit-lib.umd.js.map
