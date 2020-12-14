(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@angular/router'), require('jwt-decode'), require('@stomp/ng2-stompjs'), require('rxjs/operators'), require('@angular/core/testing'), require('@angular/common'), require('@angular/common/http/testing'), require('@angular/router/testing'), require('ng-bullet')) :
    typeof define === 'function' && define.amd ? define('acmkit-lib', ['exports', '@angular/core', '@angular/common/http', '@angular/platform-browser', '@angular/platform-browser/animations', '@angular/router', 'jwt-decode', '@stomp/ng2-stompjs', 'rxjs/operators', '@angular/core/testing', '@angular/common', '@angular/common/http/testing', '@angular/router/testing', 'ng-bullet'], factory) :
    (global = global || self, factory(global['acmkit-lib'] = {}, global.ng.core, global.ng.common.http, global.ng.platformBrowser, global.ng.platformBrowser.animations, global.ng.router, global.jwt_decode, global.ng2Stompjs, global.rxjs.operators, global.ng.core.testing, global.ng.common, global.ng.common.http.testing, global.ng.router.testing, global.ngBullet));
}(this, (function (exports, core, http, platformBrowser, animations, router, jwt_decode, ng2Stompjs, operators, testing, common, testing$1, testing$2, ngBullet) { 'use strict';

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

    /**
     * Class to help manage a particle config.
     *
     * @author Sam Butler
     * @since August 24, 2020
     */
    var ParticlesService = /** @class */ (function () {
        function ParticlesService() {
        }
        /**
         * Initializes the particlesJS based on the passed in config file
         *
         * @param configFile - The particle config file we want to initialize
         */
        ParticlesService.prototype.init = function (configFile) {
            particlesJS('particles-js', configFile, function () { });
        };
        ParticlesService.ɵprov = core.ɵɵdefineInjectable({ factory: function ParticlesService_Factory() { return new ParticlesService(); }, token: ParticlesService, providedIn: "root" });
        ParticlesService = __decorate([
            core.Injectable({
                providedIn: 'root',
            })
        ], ParticlesService);
        return ParticlesService;
    }());

    var LandingParticleConfig = {
        particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 1500,
                },
            },
            color: {
                value: '#ffffff',
            },
            shape: {
                type: 'polygon',
                stroke: {
                    width: 1,
                    color: '#ffffff',
                },
                polygon: {
                    nb_sides: 10,
                },
            },
            opacity: {
                value: 1,
                random: true,
                anim: {
                    enable: true,
                    speed: 1.0,
                    opacity_min: 0.25,
                    sync: true,
                },
            },
            size: {
                value: 2,
                random: true,
                anim: {
                    enable: true,
                    speed: 10,
                    size_min: 1.25,
                    sync: true,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 1,
                width: 1,
            },
            move: {
                enable: true,
                speed: 8,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: true,
                attract: {
                    enable: true,
                    rotateX: 2000,
                    rotateY: 2000,
                },
            },
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab',
                },
                onclick: {
                    enable: true,
                    mode: 'repulse',
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: {
                        opacity: 3,
                    },
                },
                repulse: {
                    distance: 250,
                    duration: 2,
                },
            },
        },
        retina_detect: true,
    };

    var LandingComponent = /** @class */ (function () {
        function LandingComponent(router, particleService) {
            this.router = router;
            this.particleService = particleService;
            this.currentActive = 0;
            this.homeOffset = null;
            this.aboutOffset = null;
            this.featureOffset = null;
            this.teamOffset = null;
        }
        LandingComponent.prototype.ngOnInit = function () {
            this.particleService.init(LandingParticleConfig);
        };
        LandingComponent.prototype.ngAfterViewInit = function () {
            this.homeOffset = this.homeElement.nativeElement.offsetTop;
            this.aboutOffset = this.aboutElement.nativeElement.offsetTop - 500;
            this.featureOffset = this.featureElemet.nativeElement.offsetTop - 500;
            this.teamOffset = this.teamElement.nativeElement.offsetTop - 500;
        };
        LandingComponent.prototype.scrollHandler = function () {
            if (window.pageYOffset < 625) {
                this.currentActive = 0;
            }
            else if (window.pageYOffset >= 625 && window.pageYOffset < 1200) {
                this.currentActive = 1;
            }
            else if (window.pageYOffset >= 1200 && window.pageYOffset < 1800) {
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
            { type: router.Router },
            { type: ParticlesService }
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
                template: "<nav class=\"navbar navbar-expand-md navbar-dark header sticky\">\r\n  <a href=\"/\" class=\"navbar-brand logo-text\">\r\n    ACM Website\r\n  </a>\r\n  <button\r\n    class=\"navbar-toggler nav-icon\"\r\n    type=\"button\"\r\n    data-toggle=\"collapse\"\r\n    data-target=\"#collapsibleNavbar\"\r\n  >\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div\r\n    class=\"collapse navbar-collapse text-center header-text\"\r\n    id=\"collapsibleNavbar\"\r\n  >\r\n    <div class=\"mainmenu\">\r\n      <ul class=\"navbar-nav text-center\" id=\"primary-menu\">\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 0 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#home\"\r\n            >Home</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 1 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#about\"\r\n            >About Us</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 2 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#feature\"\r\n            >Features</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 3 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#team\"\r\n            >Team</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a class=\"nav-link text-light\" href=\"#contact\">Contact Us</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<!-- header section end -->\r\n<!-- hero area start -->\r\n<section class=\"hero-area\" id=\"home\" #home>\r\n  <div id=\"particles-js\"></div>\r\n  <div class=\"container hero-area-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-7\">\r\n        <div class=\"hero-area-content\">\r\n          <h1>Welcome to ACM!</h1>\r\n          <p>\r\n            Offical University of Toledo UPRC Campus ACM Chapter website to help\r\n            you keep up to date on the latest events, meetings, and sessions\r\n            throughout the year.\r\n          </p>\r\n          <div (click)=\"onSignIn()\" class=\"radius-btn\">Sign In</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- hero area end -->\r\n\r\n<!-- about section start -->\r\n<section class=\"about-area ptb-90\" id=\"about\" #about>\r\n  <div class=\"container about-area-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"sec-title\">\r\n          <h2 data-aos=\"fade-up\">\r\n            About ACM<span class=\"sec-title-border\"></span>\r\n          </h2>\r\n          <p data-aos=\"fade-up\">\r\n            A little information about what ACM is and what we do.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div data-aos=\"fade-up\" class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-ruler-pencil\"></i>\r\n          <h4>What is ACM?</h4>\r\n          <p>\r\n            The Association for Computing Machinery is a US-based international\r\n            learned society for computing. It was founded in 1947, and is the\r\n            world's largest scientific and educational computing society.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div data-aos=\"fade-up\" class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-computer\"></i>\r\n          <h4>What to expect to learn?</h4>\r\n          <p>\r\n            You will learn a variety of skills and techniques through ACM. You\r\n            can learn both software and hardware from our Chief Software and\r\n            Chief Hardware officers Sam Butler and Kiyle Winborne\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div data-aos=\"fade-up\" class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-headphone-alt\"></i>\r\n          <h4>When we meet?</h4>\r\n          <p>\r\n            We meet every other Friday for meetings and talks about information\r\n            that might be useful to tell people. We meet for coding sessions\r\n            every other Wednesday to learn about other languages and platforms.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"feature-area ptb-90\" id=\"feature\" #feature>\r\n  <div class=\"container feature-area-wrapper\">\r\n    <div class=\"row flexbox-center\">\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"single-feature-box text-lg-right text-center\">\r\n          <ul>\r\n            <li>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-info\">\r\n                <h4>Calendar</h4>\r\n                <p>Keep Up to date on what events are coming up.</p>\r\n              </div>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-icon\"></div>\r\n            </li>\r\n            <li>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-info\">\r\n                <h4>Meetings</h4>\r\n                <p>When we have meetings for topics and events.</p>\r\n              </div>\r\n              <div class=\"feature-box-icon\"></div>\r\n            </li>\r\n            <li>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-info\">\r\n                <h4>Code Documentation</h4>\r\n                <p>\r\n                  What is used to help manage source code and documentation.\r\n                </p>\r\n              </div>\r\n              <div class=\"feature-box-icon\"></div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"single-feature-box text-lg-left text-center\">\r\n          <ul>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div\r\n                data-aos=\"fade-left\"\r\n                data-aos-duration=\"500\"\r\n                class=\"feature-box-info\"\r\n              >\r\n                <h4>Projects</h4>\r\n                <p>What projects we are currently working on or updating.</p>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div\r\n                data-aos=\"fade-left\"\r\n                data-aos-duration=\"500\"\r\n                class=\"feature-box-info\"\r\n              >\r\n                <h4>Session Links</h4>\r\n                <p>Informative talks or information for learning purposes.</p>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div\r\n                data-aos=\"fade-left\"\r\n                data-aos-duration=\"500\"\r\n                class=\"feature-box-info\"\r\n              >\r\n                <h4>Ideas</h4>\r\n                <p>\r\n                  Section to keep track of project ideas and upcoming projects.\r\n                </p>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- feature section end -->\r\n\r\n<!-- team section start -->\r\n<section class=\"team-area ptb-90\" id=\"team\" #team>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"sec-title\">\r\n          <h2>Meet Our Team<span class=\"sec-title-border\"></span></h2>\r\n          <p>\r\n            These are the current board memebers of ACM. You can click on them\r\n            to learn more information and contact them if need be.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Josue Van Dyke</div></strong>\r\n            <p>Chair</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Sam Butler</div></strong>\r\n            <p>Chief Software Engineer</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Luke Lengel</div></strong>\r\n            <p>Treasurer/Secretary</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Kiyle Winborne</div></strong>\r\n            <p>Chief Hardware Engineer</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- footer section start -->\r\n<footer class=\"footer\" id=\"contact\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"copyright-area\">\r\n          <br />\r\n          <p>\r\n            Copyright &copy; 2020 All rights reserved\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"
            })
        ], LandingComponent);
        return LandingComponent;
    }());

    var Environment = /** @class */ (function () {
        function Environment() {
        }
        Environment.SOCKET_URL = window.location.href.includes('acm-web')
            ? 'wss://acm-microservice-prod.herokuapp.com/api/web-notification-app/websocket'
            : window.location.href.includes('localhost')
                ? 'ws://localhost:8080/api/web-notification-app/websocket'
                : 'wss://acm-microservice-dev.herokuapp.com/api/web-notification-app/websocket';
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

    /**
     * Auth service class that deals with authorizing a user
     *
     * @author Sam Butler
     * @since August 24, 2020
     */
    var AuthService = /** @class */ (function () {
        function AuthService(http) {
            this.http = http;
        }
        /**
         * Logs a user in and generates a JWT token for that user
         *
         * @param username - username of the user
         * @param password - password for the user
         */
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

    var UserService = /** @class */ (function () {
        function UserService(http) {
            this.http = http;
            this.BASE = Environment.API_URL;
            this.USER_MICROSERVICE = this.BASE + "/api/acm/users";
        }
        /**
         * Method to create a new user given a User object
         *
         * @param newUser - The new user to be created
         */
        UserService.prototype.createUser = function (newUser) {
            this.http
                .post(this.USER_MICROSERVICE, newUser)
                .subscribe(function (r) { return console.log(r); });
        };
        UserService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        UserService.ɵprov = core.ɵɵdefineInjectable({ factory: function UserService_Factory() { return new UserService(core.ɵɵinject(http.HttpClient)); }, token: UserService, providedIn: "root" });
        UserService = __decorate([
            core.Injectable({
                providedIn: 'root',
            })
            /**
             * User Service class that deal with the user microservice
             *
             * @author Sam Butler
             * @since August 31, 2020
             */
        ], UserService);
        return UserService;
    }());

    var LoginCardComponent = /** @class */ (function () {
        function LoginCardComponent(authService, userService) {
            this.authService = authService;
            this.userService = userService;
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
        LoginCardComponent.prototype.onSignUp = function (firstName, lastName, email) {
            var newUser = {
                firstName: firstName,
                lastName: lastName,
                email: email,
            };
            this.userService.createUser(newUser);
        };
        LoginCardComponent.ctorParameters = function () { return [
            { type: AuthService },
            { type: UserService }
        ]; };
        LoginCardComponent = __decorate([
            core.Component({
                selector: 'ak-login-card',
                template: "<div class=\"placeholder-padding\">\r\n  <div class=\"login-wrap\">\r\n    <div class=\"login-html\">\r\n      <input id=\"tab-1\" type=\"radio\" name=\"tab\" class=\"sign-in\" checked />\r\n      <label for=\"tab-1\" class=\"tab\">Sign In</label>\r\n\r\n      <input id=\"tab-2\" type=\"radio\" name=\"tab\" class=\"sign-up\" />\r\n      <label for=\"tab-2\" class=\"tab\">Sign Up</label>\r\n      <div class=\"login-form\">\r\n        <div class=\"sign-in-htm\">\r\n          <div class=\"group\">\r\n            <label for=\"user\" class=\"label\">Username</label>\r\n            <input #username type=\"text\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label for=\"pass\" class=\"label\">Password</label>\r\n            <input #pass type=\"password\" class=\"input\" data-type=\"password\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label class=\"forgot\">Forgot Password?</label>\r\n          </div>\r\n          <div class=\"group\">\r\n            <input\r\n              (click)=\"onSignIn(username.value, pass.value)\"\r\n              type=\"submit\"\r\n              class=\"button\"\r\n              value=\"Sign In\"\r\n            />\r\n          </div>\r\n          <div class=\"hr\"></div>\r\n          <div class=\"social\">\r\n            <div class=\"inline-block\">\r\n              <a [href]=\"twitterLink\" class=\"target-pointer\" target=\"_blank\">\r\n                <img class=\"social-icon\" [src]=\"twitterIcon\" />\r\n              </a>\r\n              <div class=\"social-text\">Twitter</div>\r\n            </div>\r\n\r\n            <div class=\"inline-block\">\r\n              <a [href]=\"githubLink\" class=\"target-pointer\" target=\"_blank\">\r\n                <img class=\"social-icon\" [src]=\"githubIcon\" />\r\n              </a>\r\n              <div class=\"social-text\">Github</div>\r\n            </div>\r\n            <div class=\"inline-block\">\r\n              <a [href]=\"facebookLink\" class=\"target-pointer\" target=\"_blank\">\r\n                <img class=\"social-icon\" [src]=\"facebookIcon\" />\r\n              </a>\r\n              <div class=\"social-text\">Facebook</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"sign-up-htm\">\r\n          <div class=\"group\">\r\n            <label for=\"user\" class=\"label\">First Name</label>\r\n            <input #first type=\"text\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label for=\"pass\" class=\"label\">Last Name</label>\r\n            <input #last type=\"text\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label for=\"pass\" class=\"label\">Email Address</label>\r\n            <input #email type=\"email\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <input\r\n              type=\"submit\"\r\n              class=\"button\"\r\n              value=\"Sign Up\"\r\n              (click)=\"onSignUp(first.value, last.value, email.value)\"\r\n            />\r\n          </div>\r\n          <div class=\"hr\"></div>\r\n          <div class=\"foot-lnk\">\r\n            <label class=\"target-pointer\" for=\"tab-1\">Already Member?</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
            })
        ], LoginCardComponent);
        return LoginCardComponent;
    }());

    var TOKEN_NAME = 'token';
    /**
     * JWT class to handle all the modifications of a users jwt token
     * and handling the storing and retrieval of the token.
     *
     * @author Sam Butler
     * @since August 24, 2020
     */
    var JwtService = /** @class */ (function () {
        function JwtService(router) {
            this.router = router;
        }
        /**
         * Get the current cached token
         *
         * @return String value of the token
         */
        JwtService.prototype.getToken = function () {
            return localStorage.getItem(TOKEN_NAME);
        };
        /**
         * Sets the jwt token for the current active user
         *
         * @param token - the token to store in the local cache
         */
        JwtService.prototype.setToken = function (token) {
            localStorage.setItem(TOKEN_NAME, token);
        };
        /**
         * Get the expiration date of the currently stored token
         *
         * @return Tokens expiration date
         */
        JwtService.prototype.getTokenExpirationDate = function () {
            var exp = this.getDecodedToken().exp;
            if (exp === undefined) {
                return null;
            }
            var date = new Date(0);
            date.setUTCSeconds(exp);
            return date;
        };
        /**
         * Checks to see if the users token is expired
         *
         * @return Boolean indicating if the token is expired
         */
        JwtService.prototype.isTokenExpired = function () {
            var date = this.getTokenExpirationDate();
            if (date === undefined) {
                return false;
            }
            return !(date.valueOf() > new Date().valueOf());
        };
        /**
         * Confirms that the users token is valid
         *
         * @return Boolean saying if the token is valid or not
         */
        JwtService.prototype.isValidToken = function () {
            if (localStorage.getItem(TOKEN_NAME) != null) {
                if (this.isTokenExpired()) {
                    localStorage.removeItem(TOKEN_NAME);
                    return false;
                }
                return true;
            }
            else {
                return false;
            }
        };
        /**
         * Gets the decoded token object
         *
         * @return Object of the decoded token
         */
        JwtService.prototype.getDecodedToken = function () {
            return jwt_decode(this.getToken());
        };
        /**
         * Get method to get a certain field from the users token
         *
         * @param field - The field we want to get from the token
         * @return the object the field contains
         */
        JwtService.prototype.get = function (field) {
            var decoded = jwt_decode(this.getToken());
            return decoded[field];
        };
        /**
         * Checks to see if the user is logged in
         *
         * @return A boolean value indicating that status of the user
         */
        JwtService.prototype.isUserLoggedIn = function () {
            return localStorage.getItem(TOKEN_NAME) !== null;
        };
        /**
         * Logs the user out and deletes their token from the local cache
         */
        JwtService.prototype.logout = function () {
            localStorage.removeItem(TOKEN_NAME);
            this.router.navigate(['login']);
        };
        JwtService.ctorParameters = function () { return [
            { type: router.Router }
        ]; };
        JwtService.ɵprov = core.ɵɵdefineInjectable({ factory: function JwtService_Factory() { return new JwtService(core.ɵɵinject(router.Router)); }, token: JwtService, providedIn: "root" });
        JwtService = __decorate([
            core.Injectable({
                providedIn: 'root',
            })
        ], JwtService);
        return JwtService;
    }());

    var ServicesModule = /** @class */ (function () {
        function ServicesModule() {
        }
        ServicesModule = __decorate([
            core.NgModule({
                imports: [platformBrowser.BrowserModule, http.HttpClientModule],
                providers: [AuthService, ParticlesService, UserService, JwtService],
            })
        ], ServicesModule);
        return ServicesModule;
    }());

    var defaultStompConfig = {
        // Which server?
        brokerURL: '',
        // How often to heartbeat?
        // Interval in milliseconds, set to 0 to disable
        heartbeatIncoming: 20000,
        heartbeatOutgoing: 20000,
        // Wait in milliseconds before attempting auto reconnect
        // Set to 0 to disable
        // Typical value 500 (500 milli seconds)
        reconnectDelay: 5000,
    };
    var StompUrlService = /** @class */ (function () {
        function StompUrlService() {
        }
        /**
         * Builds the broker URL.
         * @param subdomain The subdomain.
         */
        StompUrlService.prototype.buildBrokerUrl = function () {
            console.log(Environment.SOCKET_URL);
            return Environment.SOCKET_URL;
        };
        StompUrlService = __decorate([
            core.Injectable()
        ], StompUrlService);
        return StompUrlService;
    }());
    /**
     * A factory for creating an InjectableRxStompConfig for use with Insite notifications.
     * @param stompUrlService The STOMP URL service
     */
    var stompConfigFactory = function (stompUrlService) {
        return __assign(__assign({}, defaultStompConfig), { brokerURL: stompUrlService.buildBrokerUrl() });
    };

    /**
     * Stomp Service
     *
     * @author Sam Butler
     * @since August 31, 2020
     */
    var StompWebsocketService = /** @class */ (function (_super) {
        __extends(StompWebsocketService, _super);
        function StompWebsocketService() {
            var _this = _super.call(this) || this;
            _this.isActivated = false;
            return _this;
        }
        /**
         * Initiate the connection with the broker.
         * If the connection breaks, as per reconnectDelay,it will keep trying to reconnect.
         */
        StompWebsocketService.prototype.activate = function () {
            if (!this.isActivated) {
                this.isActivated = true;
                _super.prototype.activate.call(this);
            }
        };
        /**
         * Disconnect if connected and stop auto reconnect loop.
         * Appropriate callbacks will be invoked if underlying STOMP connection was connected.
         *
         * To reactivate you can call activate.
         */
        StompWebsocketService.prototype.deactivate = function () {
            this.isActivated = false;
            _super.prototype.deactivate.call(this);
        };
        StompWebsocketService.prototype.watch = function (destination) {
            var _this = this;
            return _super.prototype.watch.call(this, destination).pipe(operators.map(function (message) { return _this.parse(message); }));
        };
        /**
         * Parses an IMessage into an StompMessage.
         * @param message The message to parse
         */
        StompWebsocketService.prototype.parse = function (message) {
            var instance = message.body ? JSON.parse(message.body) : null;
            return __assign(__assign({}, message), { data: instance });
        };
        StompWebsocketService.ɵprov = core.ɵɵdefineInjectable({ factory: function StompWebsocketService_Factory() { return new StompWebsocketService(); }, token: StompWebsocketService, providedIn: "root" });
        StompWebsocketService = __decorate([
            core.Injectable({
                providedIn: 'root',
            })
        ], StompWebsocketService);
        return StompWebsocketService;
    }(ng2Stompjs.RxStompService));
    /**
     * Factory to create an setup the StompWebsocketService.
     * @param authService The AuthService
     */
    var stompWebsocketServiceFactory = function (stompConfig) {
        var service = new StompWebsocketService();
        service.configure(stompConfig);
        return service;
    };

    var ɵ0 = stompWebsocketServiceFactory, ɵ1 = stompConfigFactory;
    var StompWebsocketModule = /** @class */ (function () {
        function StompWebsocketModule() {
        }
        StompWebsocketModule = __decorate([
            core.NgModule({
                providers: [
                    StompUrlService,
                    {
                        provide: StompWebsocketService,
                        useFactory: ɵ0,
                        deps: [ng2Stompjs.InjectableRxStompConfig],
                    },
                    {
                        provide: ng2Stompjs.InjectableRxStompConfig,
                        useFactory: ɵ1,
                        deps: [StompUrlService],
                    },
                ],
            })
        ], StompWebsocketModule);
        return StompWebsocketModule;
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
                    StompWebsocketModule,
                ],
                exports: [
                    AcmkitLibComponent,
                    CardComponent,
                    BasePageComponent,
                    LoginCardComponent,
                    LandingComponent,
                    StompWebsocketModule,
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
    exports.JwtService = JwtService;
    exports.LandingComponent = LandingComponent;
    exports.LoginCardComponent = LoginCardComponent;
    exports.ParticlesService = ParticlesService;
    exports.ServicesModule = ServicesModule;
    exports.StompUrlService = StompUrlService;
    exports.StompWebsocketModule = StompWebsocketModule;
    exports.StompWebsocketService = StompWebsocketService;
    exports.TOKEN_NAME = TOKEN_NAME;
    exports.defaultStompConfig = defaultStompConfig;
    exports.setupTests = setupTests;
    exports.stompConfigFactory = stompConfigFactory;
    exports.stompWebsocketServiceFactory = stompWebsocketServiceFactory;
    exports.ɵ0 = ɵ0;
    exports.ɵ1 = ɵ1;
    exports.ɵa = UserService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=acmkit-lib.umd.js.map
