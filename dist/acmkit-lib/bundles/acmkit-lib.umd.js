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

    var BellIconComponent = /** @class */ (function () {
        function BellIconComponent() {
        }
        BellIconComponent = __decorate([
            core.Component({
                selector: 'ak-icon-bell',
                template: "<svg\r\n  viewBox=\"0 0 24 24\"\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  width=\"32px\"\r\n  height=\"32px\"\r\n>\r\n  <path\r\n    d=\"M12,24c1.6,0,2.9-1.1,3.3-2.6H8.7C9.1,22.9,10.4,24,12,24z M18.9,14.6v-6c0-2.8-1.8-5.4-4.5-6.4L13.7,0h-3.5\r\n  \tL9.5,2.2c-2.7,1-4.5,3.6-4.5,6.4v6c0,1.4-1.2,2.6-2.6,2.6v2.6h19v-2.6C20.1,17.1,18.9,16,18.9,14.6z\"\r\n    fill=\"#A8A8A8\"\r\n  />\r\n</svg>"
            })
        ], BellIconComponent);
        return BellIconComponent;
    }());

    var BoardMemebersIconComponent = /** @class */ (function () {
        function BoardMemebersIconComponent() {
        }
        BoardMemebersIconComponent = __decorate([
            core.Component({
                selector: 'ak-icon-board-members',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  viewBox=\"0 0 64 64\"\r\n  width=\"24px\"\r\n  height=\"24px\"\r\n  fill=\"currentColor\"\r\n>\r\n  <path\r\n    d=\"m25 15c0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4s-4 1.79395-4 4c0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405zm5-9c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm2 4c2.41455 0 4.43506 1.7207 4.89941 4h-9.79883c.46436-2.2793 2.48487-4 4.89942-4z\"\r\n  />\r\n  <path\r\n    d=\"m41 22c0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4s-4 1.79395-4 4c0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405zm5-9c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm2 4c2.41455 0 4.43506 1.7207 4.89941 4h-9.79883c.46436-2.2793 2.48487-4 4.89942-4z\"\r\n  />\r\n  <path\r\n    d=\"m48 41c-2.20557 0-4 1.79395-4 4 0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405 0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4zm-2 4c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm6.89941 8h-9.79883c.46436-2.2793 2.48486-4 4.89941-4s4.43507 1.7207 4.89942 4z\"\r\n  />\r\n  <path\r\n    d=\"m25 61c0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4s-4 1.79395-4 4c0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405zm5-9c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm2 4c2.41455 0 4.43506 1.7207 4.89941 4h-9.79883c.46436-2.2793 2.48487-4 4.89942-4z\"\r\n  />\r\n  <path\r\n    d=\"m57.96027 31.66595c.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4s-4 1.79395-4 4c0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405 0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405zm-4.96027-2.66595c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm-2.89941 8c.46436-2.2793 2.48486-4 4.89941-4s4.43506 1.7207 4.89941 4z\"\r\n  />\r\n  <path\r\n    d=\"m9 22c0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4s-4 1.79395-4 4c0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405zm5-9c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm2 4c2.41455 0 4.43506 1.7207 4.89941 4h-9.79883c.46436-2.2793 2.48487-4 4.89942-4z\"\r\n  />\r\n  <path\r\n    d=\"m9 54c0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4s-4 1.79395-4 4c0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405zm5-9c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm2 4c2.41455 0 4.43506 1.7207 4.89941 4h-9.79883c.46436-2.2793 2.48487-4 4.89942-4z\"\r\n  />\r\n  <path\r\n    d=\"m2 38c0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4s-4 1.79395-4 4c0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405zm5-9c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm2 4c2.41455 0 4.43506 1.7207 4.89941 4h-9.79882c.46435-2.2793 2.48486-4 4.89941-4z\"\r\n  />\r\n  <path\r\n    d=\"m21 32c0 6.06543 4.93457 11 11 11s11-4.93457 11-11-4.93457-11-11-11-11 4.93457-11 11zm11-9c4.9624 0 9 4.03711 9 9s-4.0376 9-9 9-9-4.03711-9-9 4.0376-9 9-9z\"\r\n  />\r\n</svg>\r\n"
            })
        ], BoardMemebersIconComponent);
        return BoardMemebersIconComponent;
    }());

    var CalendarIconComponent = /** @class */ (function () {
        function CalendarIconComponent() {
        }
        CalendarIconComponent = __decorate([
            core.Component({
                selector: 'ak-icon-calendar',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n  viewBox=\"0 0 512 512\"\r\n  width=\"24px\"\r\n  height=\"24px\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g>\r\n    <g>\r\n      <path\r\n        d=\"M452,40h-24V0h-40v40H124V0H84v40H60C26.916,40,0,66.916,0,100v352c0,33.084,26.916,60,60,60h392\r\n\t\t\tc33.084,0,60-26.916,60-60V100C512,66.916,485.084,40,452,40z M472,452c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20V188\r\n\t\t\th432V452z M472,148H40v-48c0-11.028,8.972-20,20-20h24v40h40V80h264v40h40V80h24c11.028,0,20,8.972,20,20V148z\"\r\n      />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"76\" y=\"230\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"156\" y=\"230\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"236\" y=\"230\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"316\" y=\"230\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"396\" y=\"230\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"76\" y=\"310\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"156\" y=\"310\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"236\" y=\"310\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"316\" y=\"310\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"76\" y=\"390\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"156\" y=\"390\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"236\" y=\"390\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"316\" y=\"390\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"396\" y=\"310\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n</svg>\r\n"
            })
        ], CalendarIconComponent);
        return CalendarIconComponent;
    }());

    var ClassroomIconComponent = /** @class */ (function () {
        function ClassroomIconComponent() {
        }
        ClassroomIconComponent = __decorate([
            core.Component({
                selector: 'ak-icon-classroom',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  viewBox=\"0 0 64 64\"\r\n  width=\"24px\"\r\n  height=\"24px\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g id=\"blackboard-board-classroom-presentation-chalkboard\">\r\n    <path\r\n      d=\"M60,38.18V11.82A3,3,0,0,0,59,6H35V5a3,3,0,0,0-6,0V6H5a3,3,0,0,0-1,5.82V38.18A3,3,0,0,0,5,44H8v6.18a3,3,0,1,0,2,0V44H22.96L10.21,60.39a1,1,0,0,0-.11,1.05A1.012,1.012,0,0,0,11,62h5a.985.985,0,0,0,.79-.39L29,45.91V61a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V45.91l12.21,15.7A.985.985,0,0,0,48,62h5a1.012,1.012,0,0,0,.9-.56,1,1,0,0,0-.11-1.05L41.04,44H59a3,3,0,0,0,1-5.82ZM31,5a1,1,0,0,1,2,0V6H31ZM5,8H59a1,1,0,0,1,0,2H5A1,1,0,0,1,5,8Zm53,4V38H6V12ZM9,54a1,1,0,1,1,1-1A1,1,0,0,1,9,54Zm6.51,6H13.04L25.49,44h2.47ZM33,60H31V44h2Zm17.96,0H48.49L36.04,44h2.47ZM59,42H5a1,1,0,0,1,0-2H59a1,1,0,0,1,0,2Z\"\r\n    />\r\n  </g>\r\n</svg>\r\n"
            })
        ], ClassroomIconComponent);
        return ClassroomIconComponent;
    }());

    var ContactIconComponent = /** @class */ (function () {
        function ContactIconComponent() {
        }
        ContactIconComponent = __decorate([
            core.Component({
                selector: 'ak-icon-contact',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  viewBox=\"0 0 512 512\"\r\n  width=\"24px\"\r\n  height=\"24px\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g id=\"XMLID_1750_\">\r\n    <g id=\"XMLID_831_\">\r\n      <path\r\n        id=\"XMLID_834_\"\r\n        d=\"m354.404 344.404h-30.689l-15.942-7.095v-19.357c22.321-12.297 39.832-32.285 48.944-56.368h13.676c32.567 0 59.063-26.496 59.063-59.063 0-21.029-11.056-39.515-27.652-49.982v-6.735c.001-80.397-65.407-145.804-145.804-145.804s-145.805 65.407-145.805 145.805v6.73c-16.6 10.467-27.659 28.954-27.659 49.986 0 32.567 26.496 59.063 59.063 59.063h13.683c9.112 24.083 26.623 44.071 48.944 56.368v19.277l-16.121 7.174h-30.51c-86.898.001-157.595 70.699-157.595 157.597 0 5.522 4.477 10 10 10h201c5.523 0 10-4.478 10-10s-4.477-10-10-10h-190.641c4.986-69.108 61.239-124.232 130.816-127.444-.026.084-.062.164-.086.248-.811 2.85-.316 5.912 1.35 8.362l47.305 69.544c1.676 2.464 4.363 4.052 7.329 4.332.314.029.628.044.941.044 2.639 0 5.186-1.045 7.07-2.929l40.827-40.827 40.826 40.827c1.884 1.884 4.432 2.929 7.07 2.929.312 0 .626-.015.94-.044 2.967-.28 5.654-1.868 7.33-4.332l47.306-69.544c1.666-2.449 2.16-5.513 1.35-8.362-.025-.087-.061-.168-.088-.254 69.66 3.125 126.006 58.284 130.996 127.451h-190.641c-5.522 0-10 4.478-10 10s4.478 10 10 10h201c5.522 0 10-4.478 10-10 0-86.899-70.697-157.597-157.596-157.597zm-10.967-188.787c-20.545-2.821-39.825-11.007-56.206-23.967-3.591-2.842-8.656-2.88-12.291-.091-21.482 16.482-47.18 25.194-74.314 25.194-10.89 0-21.628-1.451-32.029-4.27v-5.084c0-48.192 39.207-87.399 87.399-87.399s87.4 39.207 87.4 87.399c.001 0 .02 7.95.041 8.218zm26.957 85.968h-6.757v-78.127h6.757c21.54 0 39.063 17.523 39.063 39.064 0 21.539-17.523 39.063-39.063 39.063zm-114.394-221.585c68.957 0 125.124 55.769 125.789 124.572-3.689-.724-7.497-1.114-11.396-1.114h-7.077c-2.082-57.401-49.419-103.458-107.32-103.458s-105.238 46.057-107.32 103.458h-7.076c-3.896 0-7.701.389-11.389 1.113.666-68.802 56.833-124.571 125.789-124.571zm-107.644 221.585h-6.756c-21.54 0-39.063-17.524-39.063-39.064s17.523-39.064 39.063-39.064h6.757v78.128zm20-17.98v-50.54c10.536 2.448 21.341 3.688 32.27 3.688 29.018 0 56.629-8.565 80.319-24.845 18.62 13.124 40.042 21.272 62.691 23.886v48.349c-.057 9.374-1.593 18.403-4.386 26.866h-47.754c-4.132-11.684-15.284-20.08-28.364-20.08h-13.387c-16.586 0-30.079 13.494-30.079 30.08s13.493 30.08 30.079 30.08h13.387c13.081 0 24.233-8.396 28.364-20.08h38.188c-15.615 24.191-42.81 40.239-73.684 40.239-48.327 0-87.644-39.316-87.644-87.643zm104.857 37.404c0 5.559-4.521 10.08-10.08 10.08h-13.387c-5.558 0-10.079-4.521-10.079-10.08s4.521-10.08 10.079-10.08h13.387c5.558 0 10.08 4.521 10.08 10.08zm-17.213 70.239c11.056 0 21.726-1.678 31.773-4.788v16.722l-31.862 31.862-31.685-31.684v-16.9c10.048 3.11 20.718 4.788 31.774 4.788zm-46.515 90.223-33.778-49.658 33.692-14.994 32.369 32.369zm92.851 0-32.283-32.283 32.369-32.369 33.693 14.994z\"\r\n      />\r\n      <path\r\n        id=\"XMLID_843_\"\r\n        d=\"m256 492c-2.63 0-5.21 1.069-7.07 2.93-1.86 1.86-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.069c1.86 1.86 4.44 2.931 7.07 2.931s5.21-1.07 7.069-2.931c1.861-1.859 2.931-4.439 2.931-7.069s-1.07-5.21-2.931-7.07c-1.859-1.861-4.439-2.93-7.069-2.93z\"\r\n      />\r\n    </g>\r\n  </g>\r\n</svg>\r\n"
            })
        ], ContactIconComponent);
        return ContactIconComponent;
    }());

    var ContractIconComponent = /** @class */ (function () {
        function ContractIconComponent() {
        }
        ContractIconComponent = __decorate([
            core.Component({
                selector: 'ak-icon-contract',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n  viewBox=\"0 0 512 512\"\r\n  width=\"24px\"\r\n  height=\"24px\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g>\r\n    <g>\r\n      <path\r\n        d=\"M498.791,161.127c-17.545-17.546-46.094-17.545-63.645,0.004c-5.398,5.403-39.863,39.896-45.128,45.166V87.426\r\n\t\t\tc0-12.02-4.681-23.32-13.181-31.819L334.412,13.18C325.913,4.68,314.612,0,302.592,0H45.018c-24.813,0-45,20.187-45,45v422\r\n\t\t\tc0,24.813,20.187,45,45,45h300c24.813,0,45-20.187,45-45V333.631L498.79,224.767C516.377,207.181,516.381,178.715,498.791,161.127\r\n\t\t\tz M300.019,30c2.834,0,8.295-0.491,13.18,4.393l42.426,42.427c4.76,4.761,4.394,9.978,4.394,13.18h-60V30z M360.018,467\r\n\t\t\tc0,8.271-6.728,15-15,15h-300c-8.271,0-15-6.729-15-15V45c0-8.271,6.729-15,15-15h225v75c0,8.284,6.716,15,15,15h75v116.323\r\n\t\t\tc0,0-44.254,44.292-44.256,44.293l-21.203,21.204c-1.646,1.646-2.888,3.654-3.624,5.863l-21.214,63.64\r\n\t\t\tc-1.797,5.39-0.394,11.333,3.624,15.35c4.023,4.023,9.968,5.419,15.35,3.624l63.64-21.213c2.209-0.736,4.217-1.977,5.863-3.624\r\n\t\t\tl1.82-1.82V467z M326.378,312.427l21.213,21.213l-8.103,8.103l-31.819,10.606l10.606-31.82L326.378,312.427z M368.8,312.422\r\n\t\t\tl-21.213-21.213c11.296-11.305,61.465-61.517,72.105-72.166l21.213,21.213L368.8,312.422z M477.573,203.558l-15.463,15.476\r\n\t\t\tl-21.213-21.213l15.468-15.481c5.852-5.849,15.366-5.848,21.214,0C483.426,188.19,483.457,197.673,477.573,203.558z\"\r\n      />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <path\r\n        d=\"M285.018,150h-210c-8.284,0-15,6.716-15,15s6.716,15,15,15h210c8.284,0,15-6.716,15-15S293.302,150,285.018,150z\"\r\n      />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <path\r\n        d=\"M225.018,210h-150c-8.284,0-15,6.716-15,15s6.716,15,15,15h150c8.284,0,15-6.716,15-15S233.302,210,225.018,210z\"\r\n      />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <path\r\n        d=\"M225.018,270h-150c-8.284,0-15,6.716-15,15s6.716,15,15,15h150c8.284,0,15-6.716,15-15S233.302,270,225.018,270z\"\r\n      />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <path\r\n        d=\"M225.018,330h-150c-8.284,0-15,6.716-15,15s6.716,15,15,15h150c8.284,0,15-6.716,15-15S233.302,330,225.018,330z\"\r\n      />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <path\r\n        d=\"M285.018,422h-90c-8.284,0-15,6.716-15,15s6.716,15,15,15h90c8.284,0,15-6.716,15-15S293.302,422,285.018,422z\"\r\n      />\r\n    </g>\r\n  </g>\r\n</svg>\r\n"
            })
        ], ContractIconComponent);
        return ContractIconComponent;
    }());

    var HamburgerIconComponent = /** @class */ (function () {
        function HamburgerIconComponent() {
        }
        HamburgerIconComponent = __decorate([
            core.Component({
                selector: 'ak-icon-hamburger',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  width=\"2rem\"\r\n  height=\"2rem\"\r\n  viewBox=\"0 0 24 24\"\r\n  class=\"eva eva-menu-2-outline\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g data-name=\"Layer 2\">\r\n    <g data-name=\"menu-2\">\r\n      <rect\r\n        width=\"24\"\r\n        height=\"24\"\r\n        transform=\"rotate(180 12 12)\"\r\n        opacity=\"0\"\r\n      ></rect>\r\n      <circle cx=\"4\" cy=\"12\" r=\"1\"></circle>\r\n      <rect x=\"7\" y=\"11\" width=\"14\" height=\"2\" rx=\".94\" ry=\".94\"></rect>\r\n      <rect x=\"3\" y=\"16\" width=\"18\" height=\"2\" rx=\".94\" ry=\".94\"></rect>\r\n      <rect x=\"3\" y=\"6\" width=\"18\" height=\"2\" rx=\".94\" ry=\".94\"></rect>\r\n    </g>\r\n  </g>\r\n</svg>\r\n"
            })
        ], HamburgerIconComponent);
        return HamburgerIconComponent;
    }());

    var HouseIconComponent = /** @class */ (function () {
        function HouseIconComponent() {
        }
        HouseIconComponent = __decorate([
            core.Component({
                selector: 'ak-icon-house',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  width=\"24px\"\r\n  height=\"24px\"\r\n  viewBox=\"0 0 24 24\"\r\n  class=\"eva eva-home-outline\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g data-name=\"Layer 2\">\r\n    <g data-name=\"home\">\r\n      <path\r\n        d=\"M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z\"\r\n      ></path>\r\n    </g>\r\n  </g>\r\n</svg>\r\n"
            })
        ], HouseIconComponent);
        return HouseIconComponent;
    }());

    var IconComponent = /** @class */ (function () {
        function IconComponent() {
            this.icon = '';
        }
        __decorate([
            core.Input()
        ], IconComponent.prototype, "icon", void 0);
        IconComponent = __decorate([
            core.Component({
                selector: 'ak-icon',
                template: "<div style=\"display: inline-block;\">\r\n  <ak-icon-house *ngIf=\"icon === 'house'\"></ak-icon-house>\r\n  <ak-icon-bell *ngIf=\"icon === 'bell'\"></ak-icon-bell>\r\n  <ak-icon-hamburger *ngIf=\"icon === 'hamburger'\"></ak-icon-hamburger>\r\n  <ak-icon-video *ngIf=\"icon === 'video'\"></ak-icon-video>\r\n  <ak-icon-classroom *ngIf=\"icon === 'classroom'\"></ak-icon-classroom>\r\n  <ak-icon-resources *ngIf=\"icon === 'resources'\"></ak-icon-resources>\r\n  <ak-icon-teachers *ngIf=\"icon === 'teachers'\"></ak-icon-teachers>\r\n  <ak-icon-board-members\r\n    *ngIf=\"icon === 'board-members'\"\r\n  ></ak-icon-board-members>\r\n  <ak-icon-contract\r\n    style=\"margin-left: 2px;\"\r\n    *ngIf=\"icon === 'contract'\"\r\n  ></ak-icon-contract>\r\n  <ak-icon-calendar *ngIf=\"icon === 'calendar'\"></ak-icon-calendar>\r\n  <ak-icon-info *ngIf=\"icon === 'info'\"></ak-icon-info>\r\n  <ak-icon-robot *ngIf=\"icon === 'robot'\"></ak-icon-robot>\r\n  <ak-icon-question *ngIf=\"icon === 'question'\"></ak-icon-question>\r\n  <ak-icon-contact *ngIf=\"icon === 'contact'\"></ak-icon-contact>\r\n</div>\r\n"
            })
        ], IconComponent);
        return IconComponent;
    }());

    var InfoIconComponent = /** @class */ (function () {
        function InfoIconComponent() {
        }
        InfoIconComponent = __decorate([
            core.Component({
                selector: 'ak-icon-info',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n  viewBox=\"0 0 330 330\"\r\n  width=\"24px\"\r\n  height=\"24px\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g>\r\n    <path\r\n      d=\"M165,0C74.019,0,0,74.02,0,165.001C0,255.982,74.019,330,165,330s165-74.018,165-164.999C330,74.02,255.981,0,165,0z\r\n\t\t M165,300c-74.44,0-135-60.56-135-134.999C30,90.562,90.56,30,165,30s135,60.562,135,135.001C300,239.44,239.439,300,165,300z\"\r\n    />\r\n    <path\r\n      d=\"M164.998,70c-11.026,0-19.996,8.976-19.996,20.009c0,11.023,8.97,19.991,19.996,19.991\r\n\t\tc11.026,0,19.996-8.968,19.996-19.991C184.994,78.976,176.024,70,164.998,70z\"\r\n    />\r\n    <path\r\n      d=\"M165,140c-8.284,0-15,6.716-15,15v90c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-90C180,146.716,173.284,140,165,140z\r\n\t\t\"\r\n    />\r\n  </g>\r\n</svg>\r\n"
            })
        ], InfoIconComponent);
        return InfoIconComponent;
    }());

    var QuestionIconComponent = /** @class */ (function () {
        function QuestionIconComponent() {
        }
        QuestionIconComponent = __decorate([
            core.Component({
                selector: 'ak-icon-question',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  viewBox=\"0 0 512 512\"\r\n  width=\"24px\"\r\n  height=\"24px\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g>\r\n    <path\r\n      d=\"m256 512c-68.38 0-132.667-26.628-181.02-74.98s-74.98-112.64-74.98-181.02 26.628-132.667 74.98-181.02 112.64-74.98 181.02-74.98 132.667 26.628 181.02 74.98 74.98 112.64 74.98 181.02-26.628 132.667-74.98 181.02-112.64 74.98-181.02 74.98zm0-480c-123.514 0-224 100.486-224 224s100.486 224 224 224 224-100.486 224-224-100.486-224-224-224z\"\r\n    />\r\n    <path\r\n      d=\"m256 368c-8.836 0-16-7.164-16-16 0-40.386 15.727-78.354 44.285-106.912 17.872-17.873 27.715-41.635 27.715-66.911 0-27.668-22.509-50.177-50.177-50.177h-3.646c-27.668 0-50.177 22.509-50.177 50.177v5.823c0 8.836-7.164 16-16 16s-16-7.164-16-16v-5.823c0-45.313 36.864-82.177 82.177-82.177h3.646c45.313 0 82.177 36.864 82.177 82.177 0 33.823-13.171 65.622-37.088 89.539-22.514 22.513-34.912 52.446-34.912 84.284 0 8.836-7.164 16-16 16z\"\r\n    />\r\n    <path\r\n      d=\"m256.02 432c-8.836 0-16.005-7.164-16.005-16s7.158-16 15.995-16h.01c8.836 0 16 7.164 16 16s-7.164 16-16 16z\"\r\n    />\r\n  </g>\r\n</svg>\r\n"
            })
        ], QuestionIconComponent);
        return QuestionIconComponent;
    }());

    var ResourcesIconComponent = /** @class */ (function () {
        function ResourcesIconComponent() {
        }
        ResourcesIconComponent = __decorate([
            core.Component({
                selector: 'ak-icon-resources',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  viewBox=\"0 0 64 64\"\r\n  width=\"24px\"\r\n  height=\"24px\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g>\r\n    <path\r\n      d=\"m26 14c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10z\"\r\n    />\r\n    <path\r\n      d=\"m61.879 56.464-10.879-10.878v-39.586c0-.552-.447-1-1-1h-3v-3c0-.552-.447-1-1-1h-34c-.266 0-.52.105-.707.293l-10 10c-.188.187-.293.442-.293.707v46c0 .552.447 1 1 1h3v3c0 .552.447 1 1 1h44c.553 0 1-.448 1-1v-5.587l5.465 5.465c.723.724 1.683 1.122 2.707 1.122 2.11 0 3.828-1.717 3.828-3.829 0-1.022-.398-1.983-1.121-2.707zm-12.879-49.464v36.586l-2-2v-34.586zm-38-2.586v6.586h-6.586zm-8 8.586h9c.553 0 1-.448 1-1v-9h32v36.586l-1.655-1.655c.399-.755.29-1.71-.345-2.345l-2.619-2.619c1.026-2.11 1.619-4.468 1.619-6.967 0-8.822-7.178-16-16-16s-16 7.178-16 16 7.178 16 16 16c2.499 0 4.857-.593 6.967-1.619l2.619 2.619c.39.39.902.585 1.414.585.321 0 .64-.086.931-.24l7.069 7.069v6.586h-42zm34 28.586-2.223-2.223c1.823-1.201 3.385-2.763 4.586-4.586l2.223 2.223zm-11-1.586c-7.72 0-14-6.28-14-14s6.28-14 14-14 14 6.28 14 14-6.28 14-14 14zm23 21h-42v-2h39c.553 0 1-.448 1-1v-5.586l2 2zm10.172 0c-.481 0-.952-.195-1.293-.536l-18.465-18.464 2.586-2.586 18.465 18.464c.345.346.535.805.535 1.293 0 1.009-.82 1.829-1.828 1.829z\"\r\n    />\r\n    <path d=\"m17 7h24v2h-24z\" />\r\n    <path d=\"m7 51h34v2h-34z\" />\r\n    <path d=\"m7 47h34v2h-34z\" />\r\n    <path d=\"m7 43h26v2h-26z\" />\r\n    <path\r\n      d=\"m28.793 24.855c.743-.727 1.207-1.736 1.207-2.855 0-2.206-1.794-4-4-4s-4 1.794-4 4c0 1.119.464 2.128 1.207 2.855-1.331.9-2.207 2.422-2.207 4.145v3c0 .552.447 1 1 1h8c.553 0 1-.448 1-1v-3c0-1.723-.876-3.245-2.207-4.145zm-4.793-2.855c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2zm5 9h-6v-2c0-1.654 1.346-3 3-3s3 1.346 3 3z\"\r\n    />\r\n  </g>\r\n</svg>\r\n"
            })
        ], ResourcesIconComponent);
        return ResourcesIconComponent;
    }());

    var RobotIconComponent = /** @class */ (function () {
        function RobotIconComponent() {
        }
        RobotIconComponent = __decorate([
            core.Component({
                selector: 'ak-icon-robot',
                template: "<svg\r\n  viewBox=\"0 0 128 128\"\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  width=\"26px\"\r\n  height=\"26px\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g>\r\n    <path\r\n      d=\"m89.917 75.305a7.759 7.759 0 0 0 7.75-7.75v-.385h6.143a1.751 1.751 0 0 0 1.75-1.75v-23.54a1.751 1.751 0 0 0 -1.75-1.75h-6.143v-.383a7.759 7.759 0 0 0 -7.75-7.747h-21.167v-6.871a10.75 10.75 0 1 0 -9.5 0v6.871h-21.167a7.759 7.759 0 0 0 -7.75 7.75v.383h-6.143a1.751 1.751 0 0 0 -1.75 1.75v23.537a1.751 1.751 0 0 0 1.75 1.75h6.143v.385a7.759 7.759 0 0 0 7.75 7.75h12.167v5.316h-20.058a7.759 7.759 0 0 0 -7.75 7.75v33.129a1.751 1.751 0 0 0 1.75 1.75h79.616a1.751 1.751 0 0 0 1.75-1.75v-33.129a7.759 7.759 0 0 0 -7.75-7.75h-20.058v-5.316zm12.143-31.675v20.04h-4.393v-20.04zm-45.31-28.13a7.25 7.25 0 1 1 7.25 7.25 7.258 7.258 0 0 1 -7.25-7.25zm6 10.671a9.929 9.929 0 0 0 2.5 0v5.829h-2.5zm-36.81 37.499v-20.04h4.393v20.04zm7.893 3.885v-27.808a4.255 4.255 0 0 1 4.25-4.25h22.888.029s.019 0 .029 0h5.942.029s.019 0 .029 0h22.888a4.255 4.255 0 0 1 4.25 4.25v27.808a4.255 4.255 0 0 1 -4.25 4.25h-13.869c-.016 0-.031-.005-.048-.005s-.032 0-.048.005h-23.9c-.016 0-.031-.005-.048-.005s-.032 0-.048.005h-13.873a4.255 4.255 0 0 1 -4.25-4.25zm50.916 52.195h-41.5v-14.437h41.5zm17.309-31.379v31.379h-13.809v-16.187a1.75 1.75 0 0 0 -1.75-1.75h-45a1.751 1.751 0 0 0 -1.75 1.75v16.187h-13.807v-31.379a4.255 4.255 0 0 1 4.25-4.25h67.616a4.255 4.255 0 0 1 4.25 4.25zm-27.808-7.75h-20.5v-5.316h20.5z\"\r\n    />\r\n    <path\r\n      d=\"m55.251 49.648a7.75 7.75 0 1 0 -7.751 7.752 7.759 7.759 0 0 0 7.751-7.752zm-7.751 4.252a4.25 4.25 0 1 1 4.25-4.25 4.255 4.255 0 0 1 -4.25 4.25z\"\r\n    />\r\n    <path\r\n      d=\"m80.5 57.4a7.75 7.75 0 1 0 -7.75-7.75 7.759 7.759 0 0 0 7.75 7.75zm0-12a4.25 4.25 0 1 1 -4.25 4.25 4.255 4.255 0 0 1 4.25-4.25z\"\r\n    />\r\n    <path\r\n      d=\"m51.875 64.875a1.751 1.751 0 0 0 1.75 1.75h20.75a1.75 1.75 0 0 0 0-3.5h-20.75a1.751 1.751 0 0 0 -1.75 1.75z\"\r\n    />\r\n    <path\r\n      d=\"m94.808 96.121a4.75 4.75 0 1 0 -4.75-4.75 4.756 4.756 0 0 0 4.75 4.75zm0-6a1.25 1.25 0 1 1 -1.25 1.25 1.251 1.251 0 0 1 1.25-1.25z\"\r\n    />\r\n    <path\r\n      d=\"m28.442 91.371a4.75 4.75 0 1 0 4.75-4.75 4.756 4.756 0 0 0 -4.75 4.75zm4.75-1.25a1.25 1.25 0 1 1 -1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z\"\r\n    />\r\n  </g>\r\n</svg>\r\n"
            })
        ], RobotIconComponent);
        return RobotIconComponent;
    }());

    var TeachersIconComponent = /** @class */ (function () {
        function TeachersIconComponent() {
        }
        TeachersIconComponent = __decorate([
            core.Component({
                selector: 'ak-icon-teachers',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n  viewBox=\"0 0 512 512\"\r\n  width=\"24px\"\r\n  height=\"24px\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g>\r\n    <g>\r\n      <path\r\n        d=\"M135,0c-33.358,0-60,28.006-60,61c0,33.084,26.916,60,60,60s60-26.916,60-60C195,27.98,168.324,0,135,0z M135,91\r\n\t\t\tc-16.542,0-30-13.458-30-30c0-16.804,13.738-31,30-31s30,14.196,30,31C165,77.542,151.542,91,135,91z\"\r\n      />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <path\r\n        d=\"M467,0H255c-24.813,0-45,20.187-45,45v102.365l-13.183-13.182C188.317,125.682,177.017,121,165,121h-30\r\n\t\t\tc-6.359,0-53.641,0-60,0c-41.355,0-75,33.645-75,75c0,8.529,0,77.68,0,90c0,24.813,20.187,45,45,45c5.257,0,10.307-0.906,15-2.57\r\n\t\t\tV467c0,24.813,20.187,45,45,45c11.515,0,22.033-4.347,30-11.486c7.967,7.139,18.485,11.486,30,11.486c24.813,0,45-20.187,45-45\r\n\t\t\tV268.444c11.469,4.045,24.174,3.266,35.126-2.191L295.631,241H467c24.813,0,45-20.187,45-45V45C512,20.187,491.813,0,467,0z\r\n\t\t\t M291.709,209.419l-59.982,29.991c-5.627,2.804-12.616,1.91-17.333-2.806l-8.786-8.787c-9.276-9.276-25.567-2.967-25.607,10.56\r\n\t\t\tc0,0.015-0.002,0.029-0.002,0.044V467c0,8.271-6.729,15-15,15s-15-6.729-15-15V316c0-8.284-6.716-15-15-15s-15,6.716-15,15v151\r\n\t\t\tc0,8.271-6.729,15-15,15s-15-6.729-15-15V286c0-11.31,0-80.756,0-90c0-8.284-6.716-15-15-15s-15,6.716-15,15c0,8.529,0,77.68,0,90\r\n\t\t\tc0,8.271-6.729,15-15,15c-8.271,0-15-6.729-15-15C30,274.69,30,205.244,30,196c0-24.813,20.187-45,45-45c11.31,0,80.756,0,90,0\r\n\t\t\tc4.004,0,7.77,1.561,10.604,4.396l44.707,44.707c4.564,4.565,11.54,5.696,17.314,2.81l40.669-20.335\r\n\t\t\tc7.444-3.725,16.415-0.714,20.124,6.712C302.128,196.711,299.13,205.709,291.709,209.419z M482,196c0,8.271-6.729,15-15,15\r\n\t\t\tH327.419c0.091-0.257,0.191-0.509,0.277-0.768c2.16-6.48,2.808-13.218,1.982-19.8l82.03-41.015\r\n\t\t\tc7.41-3.705,10.413-12.715,6.708-20.125c-3.705-7.41-12.716-10.414-20.125-6.708l-82.025,41.013\r\n\t\t\tc-13.142-12.712-33.613-16.747-51.393-7.849L240,168.185V45c0-8.271,6.729-15,15-15h212c8.271,0,15,6.729,15,15V196z\"\r\n      />\r\n    </g>\r\n  </g>\r\n</svg>\r\n"
            })
        ], TeachersIconComponent);
        return TeachersIconComponent;
    }());

    var VideoIconComponent = /** @class */ (function () {
        function VideoIconComponent() {
        }
        VideoIconComponent = __decorate([
            core.Component({
                selector: 'ak-icon-video',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n  viewBox=\"0 0 277.392 277.392\"\r\n  width=\"24px\"\r\n  height=\"24px\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g>\r\n    <g>\r\n      <path\r\n        d=\"M46.232,213.541h119.659c25.493,0,46.232-20.739,46.232-46.232v-10.106l51.339,51.345\r\n\t\t\tc1.561,1.561,3.65,2.388,5.771,2.388c1.05,0,2.116-0.201,3.122-0.62c3.051-1.262,5.037-4.237,5.037-7.539V72.011\r\n\t\t\tc0-3.302-1.985-6.277-5.037-7.539c-3.04-1.262-6.554-0.566-8.893,1.768l-51.377,51.383c-0.397-25.15-20.951-45.498-46.194-45.498\r\n\t\t\tH46.232C20.739,72.125,0,92.864,0,118.357v48.952C0,192.802,20.739,213.541,46.232,213.541z M261.075,91.711v91.371\r\n\t\t\tl-45.683-45.688L261.075,91.711z M16.317,118.357c0-16.497,13.424-29.915,29.915-29.915h119.659\r\n\t\t\tc16.491,0,29.915,13.418,29.915,29.915v18.466v1.148v29.338c0,16.497-13.424,29.915-29.915,29.915H46.232\r\n\t\t\tc-16.491,0-29.915-13.418-29.915-29.915V118.357z\"\r\n      />\r\n    </g>\r\n  </g>\r\n</svg>\r\n"
            })
        ], VideoIconComponent);
        return VideoIconComponent;
    }());

    var IconsModule = /** @class */ (function () {
        function IconsModule() {
        }
        IconsModule = __decorate([
            core.NgModule({
                declarations: [
                    BellIconComponent,
                    HouseIconComponent,
                    IconComponent,
                    HamburgerIconComponent,
                    VideoIconComponent,
                    ClassroomIconComponent,
                    ResourcesIconComponent,
                    TeachersIconComponent,
                    BoardMemebersIconComponent,
                    ContractIconComponent,
                    CalendarIconComponent,
                    InfoIconComponent,
                    RobotIconComponent,
                    QuestionIconComponent,
                    ContactIconComponent,
                ],
                exports: [
                    BellIconComponent,
                    HouseIconComponent,
                    IconComponent,
                    HamburgerIconComponent,
                    VideoIconComponent,
                    ClassroomIconComponent,
                    ResourcesIconComponent,
                    TeachersIconComponent,
                    BoardMemebersIconComponent,
                    ContractIconComponent,
                    CalendarIconComponent,
                    InfoIconComponent,
                    RobotIconComponent,
                    QuestionIconComponent,
                    ContactIconComponent,
                ],
                imports: [platformBrowser.BrowserModule],
            })
        ], IconsModule);
        return IconsModule;
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
                template: "<div class=\"card column-half\" [ngClass]=\"{ 'card-padding': !title }\">\r\n  <div *ngIf=\"title\" class=\"header\">\r\n    <div class=\"title\">{{ title }}</div>\r\n    <div *ngIf=\"editRoute\" class=\"edit-icon\"></div>\r\n  </div>\r\n  <div class=\"content-padding\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
                styles: [".card{width:100%;display:inline-block;height:auto;border-radius:8px;text-align:left;background:linear-gradient(to bottom,#fff 12%,#fffff5 100%);margin-bottom:15px}.header{display:inline-block;height:auto;width:100%;border-radius:8px 8px 0 0;background:#eeeff0;border-bottom:1px solid #d2d4d6;padding:10px 15px}.header .title{font-size:20px;font-weight:600;font-family:ColinSerifWeb-Bold,Georgia,\"Times New Roman\",Times,serif;color:#363b42;display:inline-block}.card-padding{padding:20px}.content-padding{padding:10px}"]
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
        ParticlesService = __decorate([
            core.Injectable()
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
                template: "<nav class=\"navbar navbar-expand-md navbar-dark header sticky global-font\">\r\n  <a href=\"/\" class=\"navbar-brand logo-text\">\r\n    ACM Website\r\n  </a>\r\n  <div\r\n    class=\"collapse navbar-collapse text-center header-text\"\r\n    id=\"collapsibleNavbar\"\r\n  >\r\n    <div class=\"mainmenu\">\r\n      <ul class=\"navbar-nav text-center\" id=\"primary-menu\">\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 0 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#home\"\r\n            >Home</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 1 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#about\"\r\n            >About Us</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 2 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#feature\"\r\n            >Features</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 3 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#team\"\r\n            >Team</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a class=\"nav-link text-light\" href=\"#contact\">Contact Us</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<!-- header section end -->\r\n<!-- hero area start -->\r\n<section class=\"hero-area\" id=\"home\" #home>\r\n  <div id=\"particles-js\"></div>\r\n  <div class=\"container hero-area-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-7\">\r\n        <div class=\"hero-area-content\">\r\n          <h1>Welcome to ACM!</h1>\r\n          <p>\r\n            Offical University of Toledo UPRC Campus ACM Chapter website to help\r\n            you keep up to date on the latest events, meetings, and sessions\r\n            throughout the year.\r\n          </p>\r\n          <div (click)=\"onSignIn()\" class=\"radius-btn\">Sign In</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- hero area end -->\r\n\r\n<!-- about section start -->\r\n<section class=\"about-area ptb-90\" id=\"about\" #about>\r\n  <div class=\"container about-area-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"sec-title\">\r\n          <h2 data-aos=\"fade-up\">\r\n            About ACM<span class=\"sec-title-border\"></span>\r\n          </h2>\r\n          <p data-aos=\"fade-up\">\r\n            A little information about what ACM is and what we do.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div data-aos=\"fade-up\" class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-ruler-pencil\"></i>\r\n          <h4>What is ACM?</h4>\r\n          <p>\r\n            The Association for Computing Machinery is a US-based international\r\n            learned society for computing. It was founded in 1947, and is the\r\n            world's largest scientific and educational computing society.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div data-aos=\"fade-up\" class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-computer\"></i>\r\n          <h4>What to expect to learn?</h4>\r\n          <p>\r\n            You will learn a variety of skills and techniques through ACM. You\r\n            can learn both software and hardware from our Chief Software and\r\n            Chief Hardware officers Sam Butler and Kiyle Winborne\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div data-aos=\"fade-up\" class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-headphone-alt\"></i>\r\n          <h4>When we meet?</h4>\r\n          <p>\r\n            We meet every other Friday for meetings and talks about information\r\n            that might be useful to tell people. We meet for coding sessions\r\n            every other Wednesday to learn about other languages and platforms.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"feature-area ptb-90\" id=\"feature\" #feature>\r\n  <div class=\"container feature-area-wrapper\">\r\n    <div class=\"row flexbox-center\">\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"single-feature-box text-lg-right text-center\">\r\n          <ul>\r\n            <li>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-info\">\r\n                <h4>Calendar</h4>\r\n                <p>Keep Up to date on what events are coming up.</p>\r\n              </div>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-icon\"></div>\r\n            </li>\r\n            <li>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-info\">\r\n                <h4>Meetings</h4>\r\n                <p>When we have meetings for topics and events.</p>\r\n              </div>\r\n              <div class=\"feature-box-icon\"></div>\r\n            </li>\r\n            <li>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-info\">\r\n                <h4>Code Documentation</h4>\r\n                <p>\r\n                  What is used to help manage source code and documentation.\r\n                </p>\r\n              </div>\r\n              <div class=\"feature-box-icon\"></div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"single-feature-box text-lg-left text-center\">\r\n          <ul>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div\r\n                data-aos=\"fade-left\"\r\n                data-aos-duration=\"500\"\r\n                class=\"feature-box-info\"\r\n              >\r\n                <h4>Projects</h4>\r\n                <p>What projects we are currently working on or updating.</p>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div\r\n                data-aos=\"fade-left\"\r\n                data-aos-duration=\"500\"\r\n                class=\"feature-box-info\"\r\n              >\r\n                <h4>Session Links</h4>\r\n                <p>Informative talks or information for learning purposes.</p>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div\r\n                data-aos=\"fade-left\"\r\n                data-aos-duration=\"500\"\r\n                class=\"feature-box-info\"\r\n              >\r\n                <h4>Ideas</h4>\r\n                <p>\r\n                  Section to keep track of project ideas and upcoming projects.\r\n                </p>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- feature section end -->\r\n\r\n<!-- team section start -->\r\n<section class=\"team-area ptb-90\" id=\"team\" #team>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"sec-title\">\r\n          <h2>Meet Our Team<span class=\"sec-title-border\"></span></h2>\r\n          <p>\r\n            These are the current board memebers of ACM. You can click on them\r\n            to learn more information and contact them if need be.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Josue Van Dyke</div></strong>\r\n            <p>Chair</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Sam Butler</div></strong>\r\n            <p>Chief Software Engineer</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Luke Lengel</div></strong>\r\n            <p>Treasurer/Secretary</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Kiyle Winborne</div></strong>\r\n            <p>Chief Hardware Engineer</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- footer section start -->\r\n<footer class=\"footer\" id=\"contact\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"copyright-area\">\r\n          <br />\r\n          <p>\r\n            Copyright &copy; 2020 All rights reserved\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n",
                styles: ["h1,h2,h3,h4,h5,h6{font-weight:500}h1,h2,h3,h4,h5,h6,p{margin:0}h1{font-size:48px}h2{font-size:30px;color:#232323}h4{font-size:18px;color:#232323}h6{font-size:14px;color:#232323}h5{color:#232323}a{transition:.6s}a,a:hover{color:#666}a,a:active,a:focus,a:hover,button:focus{text-decoration:none;border:none;outline:0}ul{list-style:none;margin:0;padding:0}.sec-title{text-align:center;max-width:400px;margin:0 auto 40px}.sec-title h2{padding-bottom:20px;margin-bottom:20px;position:relative;top:-6px}.sec-title h2 .sec-title-border{width:100px;position:absolute;bottom:0;left:0;border-top:4px solid #222;right:0;height:0;margin:auto}.sec-title h2 .sec-title-border span{width:9px;height:9px;position:relative;display:inline-block;margin:0 1px;bottom:23.3px}.sec-title h2 .sec-title-border span::before{background:#222;content:\"\";position:absolute;top:0;left:0;height:100%;width:100%;transform:rotate(45deg)}.mt-100{margin-top:100px}.mt-30{margin-top:30px}.ptb-100{padding:100px 0}.ptb-90{padding:90px 0}.header{display:inline-block}.header.sticky .mainmenu li a.radius-btn,.mainmenu li a.radius-btn,.radius-btn{border:1px solid #fff;color:#fff;border-radius:15px;padding:6px 25px;display:inline-block;text-transform:uppercase;cursor:pointer;font-weight:500;transition:75ms linear}.header.sticky .mainmenu li a.radius-btn:hover,.mainmenu li a.radius-btn:hover,.radius-btn:hover{background:#fff;border:1px solid #fff;color:#666}.flexbox-center{display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;justify-content:center;align-items:center}input::-webkit-input-placeholder{color:#666}.header{position:fixed;top:0;left:0;transition:.4s;width:100%;z-index:99;padding:18px 15px}.mainmenu{text-align:left;display:block}.mainmenu li{display:inline-block;text-transform:uppercase}.mainmenu li a{display:inline-block;color:#fff;position:relative;padding:5px 16px;margin:0 3px;border:1px solid transparent}.slicknav_menu{padding:0;background:0 0;display:none}.mainmenu ul li a.active,.mainmenu ul li a:hover,.slicknav_menu a.active{border:1px solid #fff}.header.sticky{border-radius:0;border-bottom:transparent;background:linear-gradient(to left,rgba(0,32,85,.8),rgba(0,93,181,.8));background:-moz-linear-gradient(to left,rgba(0,32,85,.8),rgba(0,93,181,.8));padding:20px}.mainmenu li a.radius-btn{margin-left:55px}.hero-area{height:100vh;transform:scale(1.1);z-index:1;position:relative;background-image:url(https://3dprintingindustry.com/wp-content/uploads/2014/09/lccc-ridge-campus-3d-printing-industry.png);background-repeat:no-repeat;background-position:center;background-attachment:fixed;background-size:cover;overflow:hidden}.hero-area-wrapper{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.hero-area::before{content:\"\";top:0;left:0;opacity:.85;right:0;bottom:0;z-index:-1;position:absolute;background:#000529;background:linear-gradient(to right,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);background:-webkit-linear-gradient(left,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%)}.hero-area-content{color:#fff;padding:80px 0 170px}.hero-area-content h1{color:#fff}.hero-area-content p{margin:28px 0 25px}.hero-area-content .radius-btn{margin-top:15px;margin-right:15px}.about-area{text-align:center;height:100vh;transform:scale(1.2)}.about-area-wrapper{margin:0;padding:0;position:relative;top:50%;left:50%;transform:translate(-50%,-50%)}.single-about-box{padding:25px;transition:250ms}.single-about-box i::before{color:#0074da;font-size:40px;transition:250ms;display:block}.single-about-box.active,.single-about-box:hover{transform:scale(1.025);box-shadow:0 0 5px #ccc}.single-about-box.active i::before,.single-about-box:hover i::before{color:#000}.single-about-box h4{margin:25px 0 15px}.feature-area{z-index:1;height:100vh;position:relative;background-image:url(https://www.sasaki.com/wp-content/uploads/2019/10/IMG_0046_website-1800x1200.jpg);background-repeat:no-repeat;background-position:center;background-size:cover}.feature-area-wrapper{position:relative;margin:0;top:50%;left:50%;transform:translate(-50%,-50%) scale(1.1)}.feature-area::before{content:\"\";top:0;left:0;opacity:.85;right:0;bottom:0;background:#000529;background:linear-gradient(to right,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);background:-webkit-linear-gradient(left,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);z-index:-1;position:absolute}.single-feature-box h4{font-size:20px;margin-bottom:5px}.single-feature-box li{margin-bottom:45px;display:flex}.single-feature-box li:last-child{margin-bottom:0}.feature-box-info{flex:5}.feature-box-icon{flex:1;font-size:20px;transition:.4s}.single-feature-box li:hover .feature-box-icon i::before{border-radius:0}.single-feature-box,.single-feature-box h2,.single-feature-box h3,.single-feature-box h4{color:#fff}.feature-box-icon i::before{border:2px dashed #fff;width:40px;display:inline-block;height:40px;text-align:center;line-height:38px;border-radius:100%;transition:.4s}.single-team-member{text-align:center;box-shadow:0 2px 15px -5px #222;background:#fff;transition:.5s}.single-team-member:hover{color:#fff;background:linear-gradient(to right,#005db5 67%,#0074d9 100%)}.team-member-info h4{font-size:20px}.team-member-info{padding:20px 10px}.team-member-img{position:relative;z-index:1;overflow:hidden;background:#fff;transition:750ms}.team-member-icon{position:absolute;top:0;left:-100%;height:100%;width:100%}.team-member-img::before{content:\"\";background:#000529;background:linear-gradient(to right,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);background:-webkit-linear-gradient(left,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);top:0;right:0;width:0;height:100%;position:absolute;opacity:.85}.team-member-icon a{color:#fff;width:30px;height:30px;display:inline-block;line-height:30px;border:1px solid transparent}.team-member-icon a:hover{border:1px solid #fff}.single-team-member:hover .team-member-img::before{width:100%}.single-team-member:hover .team-member-icon{left:0}.footer{position:relative;z-index:1;padding-bottom:27.5px}.footer::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:#000529;background:linear-gradient(to right,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);background:-webkit-linear-gradient(left,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);opacity:.85;z-index:-1}.copyright-area{text-align:center;margin-top:10px}.copyright-area ul li{display:inline-block}.copyright-area ul li a{width:35px;height:35px;color:#0074da;background:#fff;display:inline-block;line-height:35px;font-size:16px;border-radius:100%;margin:0 5px}.copyright-area ul li a:hover{background:#0074da;color:#fff}.copyright-area ul{margin-bottom:30px}.copyright-area p{color:#fff}.copyright-area p a{color:#fff;border-bottom:1px solid #fff}.nav-icon{float:right}.header-text{float:right;margin-right:90px;font-weight:500;font-size:20px}.nav-link{padding:.5rem!important;transition:250ms}.nav-link:hover{transform:scale(1.05)}@media only screen and (max-width:767px){.header-text{float:none!important;margin-right:0}}.logo-text{font-size:25px;font-weight:400;padding-top:10px}"]
            })
        ], LandingComponent);
        return LandingComponent;
    }());

    var Environment = /** @class */ (function () {
        function Environment() {
        }
        Environment.PRODUCTION_HOST = 'acm-microservice-prod';
        Environment.DEVELOPMENT_HOST = 'acm-microservice-dev';
        Environment.LOCAL_HOST = 'localhost:8080';
        Environment.HEROKU_URI = 'herokuapp.com';
        Environment.PRODUCTION_PATH = 'acm-web';
        Environment.DEVELOPMENT_PATH = 'acm-ui-dev';
        Environment.LOCAL_PATH = 'localhost:4200';
        Environment.SOCKET_ENDPOINT = '/api/web-notification-app/websocket';
        return Environment;
    }());

    /**
     * URL Service
     *
     * @author Sam Butler
     * @since Dec 15, 2020
     */
    var UrlService = /** @class */ (function () {
        function UrlService() {
            this.urlPath = window.location.href;
        }
        /**
         * Get's the host environment
         *
         * @returns string of the host path
         */
        UrlService.prototype.getHost = function () {
            if (this.urlPath.includes(Environment.PRODUCTION_PATH)) {
                return Environment.PRODUCTION_HOST;
            }
            else if (this.urlPath.includes(Environment.DEVELOPMENT_PATH)) {
                return Environment.DEVELOPMENT_HOST;
            }
            return Environment.LOCAL_HOST;
        };
        /**
         * Get's the web path of the url
         *
         * @returns string of the web path
         */
        UrlService.prototype.getPath = function () {
            if (this.urlPath.includes(Environment.PRODUCTION_PATH)) {
                return Environment.PRODUCTION_PATH;
            }
            else if (this.urlPath.includes(Environment.DEVELOPMENT_PATH)) {
                return Environment.DEVELOPMENT_PATH;
            }
            return Environment.LOCAL_PATH;
        };
        /**
         * Get's the full web URL
         *
         * @returns string of the full web url
         */
        UrlService.prototype.getWebUrl = function () {
            if (this.isHttps()) {
                return "https://" + this.getPath() + "." + Environment.HEROKU_URI;
            }
            else if (this.isLocal()) {
                return "http://" + this.getPath();
            }
            return "http://" + this.getPath() + "." + Environment.HEROKU_URI;
        };
        /**
         * Get's the full API URL
         *
         * @returns string of the full API url
         */
        UrlService.prototype.getAPIUrl = function () {
            if (this.isHttps()) {
                return "https://" + this.getHost() + "." + Environment.HEROKU_URI;
            }
            else if (this.isLocal()) {
                return "http://" + this.getHost();
            }
            return "http://" + this.getHost() + "." + Environment.HEROKU_URI;
        };
        /**
         * Get's the socket environment
         *
         * @returns string of the socket path
         */
        UrlService.prototype.getSocketPath = function () {
            var socketType = this.isHttps() ? 'wss://' : 'ws://';
            if (this.isLocal()) {
                return "" + socketType + this.getHost() + Environment.SOCKET_ENDPOINT;
            }
            return "" + socketType + this.getHost() + "." + Environment.HEROKU_URI + Environment.SOCKET_ENDPOINT;
        };
        /**
         * Determines if the url is https or http
         *
         * @returns boolean of logical comparison
         */
        UrlService.prototype.isHttps = function () {
            return this.urlPath.includes('https');
        };
        /**
         * Determines if the url is local
         *
         * @returns boolean of logical comparison
         */
        UrlService.prototype.isLocal = function () {
            return this.urlPath.includes('localhost');
        };
        UrlService = __decorate([
            core.Injectable()
        ], UrlService);
        return UrlService;
    }());

    /**
     * Auth service class that deals with authorizing a user
     *
     * @author Sam Butler
     * @since August 24, 2020
     */
    var AuthService = /** @class */ (function () {
        function AuthService(http, urlService) {
            this.http = http;
            this.urlService = urlService;
        }
        /**
         * Logs a user in and generates a JWT token for that user
         *
         * @param username - username of the user
         * @param password - password for the user
         */
        AuthService.prototype.authenticate = function (username, password) {
            this.http
                .post(this.urlService.getAPIUrl + "/authenticate", { username: username, password: password })
                .subscribe(function (response) { return console.log(response.token); });
        };
        AuthService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: UrlService }
        ]; };
        AuthService = __decorate([
            core.Injectable()
        ], AuthService);
        return AuthService;
    }());

    /**
     * User Service class that deal with the user microservice
     *
     * @author Sam Butler
     * @since August 31, 2020
     */
    var UserService = /** @class */ (function () {
        function UserService(http, urlService) {
            this.http = http;
            this.urlService = urlService;
        }
        /**
         * Method to create a new user given a User object
         *
         * @param newUser - The new user to be created
         */
        UserService.prototype.createUser = function (newUser) {
            this.http
                .post(this.urlService.getAPIUrl() + "/api/acm/users", newUser)
                .subscribe(function (r) { return console.log(r); });
        };
        UserService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: UrlService }
        ]; };
        UserService = __decorate([
            core.Injectable()
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
                template: "<div class=\"placeholder-padding login-container\">\r\n  <div class=\"login-wrap\">\r\n    <div class=\"login-html\">\r\n      <input id=\"tab-1\" type=\"radio\" name=\"tab\" class=\"sign-in\" checked />\r\n      <label for=\"tab-1\" class=\"tab\">Sign In</label>\r\n\r\n      <input id=\"tab-2\" type=\"radio\" name=\"tab\" class=\"sign-up\" />\r\n      <label for=\"tab-2\" class=\"tab\">Sign Up</label>\r\n      <div class=\"login-form\">\r\n        <div class=\"sign-in-htm\">\r\n          <div class=\"group\">\r\n            <label for=\"user\" class=\"label\">Username</label>\r\n            <input #username type=\"text\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label for=\"pass\" class=\"label\">Password</label>\r\n            <input #pass type=\"password\" class=\"input\" data-type=\"password\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label class=\"forgot\">Forgot Password?</label>\r\n          </div>\r\n          <div class=\"group\">\r\n            <input\r\n              (click)=\"onSignIn(username.value, pass.value)\"\r\n              type=\"submit\"\r\n              class=\"button\"\r\n              value=\"Sign In\"\r\n            />\r\n          </div>\r\n          <div class=\"hr\"></div>\r\n          <div class=\"social\">\r\n            <div class=\"inline-block\">\r\n              <a [href]=\"twitterLink\" class=\"target-pointer\" target=\"_blank\">\r\n                <img class=\"social-icon\" [src]=\"twitterIcon\" />\r\n              </a>\r\n              <div class=\"social-text\">Twitter</div>\r\n            </div>\r\n\r\n            <div class=\"inline-block\">\r\n              <a [href]=\"githubLink\" class=\"target-pointer\" target=\"_blank\">\r\n                <img class=\"social-icon\" [src]=\"githubIcon\" />\r\n              </a>\r\n              <div class=\"social-text\">Github</div>\r\n            </div>\r\n            <div class=\"inline-block\">\r\n              <a [href]=\"facebookLink\" class=\"target-pointer\" target=\"_blank\">\r\n                <img class=\"social-icon\" [src]=\"facebookIcon\" />\r\n              </a>\r\n              <div class=\"social-text\">Facebook</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"sign-up-htm\">\r\n          <div class=\"group\">\r\n            <label for=\"user\" class=\"label\">First Name</label>\r\n            <input #first type=\"text\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label for=\"pass\" class=\"label\">Last Name</label>\r\n            <input #last type=\"text\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label for=\"pass\" class=\"label\">Email Address</label>\r\n            <input #email type=\"email\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <input\r\n              type=\"submit\"\r\n              class=\"button\"\r\n              value=\"Sign Up\"\r\n              (click)=\"onSignUp(first.value, last.value, email.value)\"\r\n            />\r\n          </div>\r\n          <div class=\"hr\"></div>\r\n          <div class=\"foot-lnk\">\r\n            <label class=\"target-pointer\" for=\"tab-1\">Already Member?</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".login-container{margin:0;color:#6a6f8c;font:600 16px/18px \"Open Sans\",sans-serif}.clearfix:after,.clearfix:before{content:\"\";display:table}.clearfix:after{clear:both;display:block}.login-wrap{width:100%;margin:auto;max-width:525px;min-height:670px;position:relative;background:url(https://raw.githubusercontent.com/khadkamhn/day-01-login-form/master/img/bg.jpg) center no-repeat;box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)}.login-html{width:100%;height:100%;position:absolute;padding:90px 70px 50px;background:rgba(40,57,101,.9)}.login-html .sign-in-htm,.login-html .sign-up-htm{top:0;left:0;right:0;bottom:0;position:absolute;transform:rotateY(180deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:.4s linear}.login-form .group .check,.login-html .sign-in,.login-html .sign-up{display:none}.login-form .group .button,.login-form .group .label,.login-html .tab{text-transform:uppercase}.login-html .tab{cursor:pointer;font-size:22px;padding-bottom:5px;margin:0 15px 10px 0;display:inline-block;border-bottom:2px solid transparent}.login-html .sign-in:checked+.tab,.login-html .sign-up:checked+.tab{color:#fff;border-color:#1161ee}.login-form{margin-top:20px;min-height:345px;position:relative;perspective:1000px;transform-style:preserve-3d}.login-form .group{margin-bottom:15px}.login-form .group .button,.login-form .group .input,.login-form .group .label{width:100%;color:#fff;display:block}.login-form .group .button,.login-form .group .input{border:none;padding:15px 20px;border-radius:25px;background:rgba(255,255,255,.1)}.login-form .group input[data-type=password]{-webkit-text-security:circle}.login-form .group .label{color:#aaa;font-size:12px}.login-form .group .button{background:#1161ee}.login-form .group label .icon{width:15px;height:15px;border-radius:2px;position:relative;display:inline-block;background:rgba(255,255,255,.1)}.login-form .group label .icon:after,.login-form .group label .icon:before{content:\"\";width:10px;height:2px;background:#fff;position:absolute;transition:.2s ease-in-out}.login-form .group label .icon:before{left:3px;width:5px;bottom:6px;transform:scale(0) rotate(0)}.login-form .group label .icon:after{top:6px;right:0;transform:scale(0) rotate(0)}.login-form .group .check:checked+label{color:#fff}.login-form .group .check:checked+label .icon{background:#1161ee}.login-form .group .check:checked+label .icon:before{transform:scale(1) rotate(45deg)}.login-form .group .check:checked+label .icon:after{transform:scale(1) rotate(-45deg)}.login-html .sign-in:checked+.tab+.sign-up+.tab+.login-form .sign-in-htm,.login-html .sign-up:checked+.tab+.login-form .sign-up-htm{transform:rotate(0)}.hr{height:2px;margin:30px 0;background:rgba(255,255,255,.2)}.foot-lnk{text-align:center;cursor:pointer;color:#fff}.forgot{cursor:pointer;transition:.2s ease-in}.forgot:hover{color:#fff}.social{text-align:center}.social-icon{width:50px;margin:0 15px;transition:transform .1s}.social-icon:hover{transform:scale(1.5)}.social-text{margin:10px}.placeholder-padding{padding:100px 0}"]
            })
        ], LoginCardComponent);
        return LoginCardComponent;
    }());

    var NavbarComponent = /** @class */ (function () {
        function NavbarComponent() {
            this.title = '';
            this.sidebarClicked = new core.EventEmitter();
        }
        NavbarComponent.prototype.toggleSidebar = function () {
            this.sidebarClicked.emit(true);
        };
        __decorate([
            core.Input()
        ], NavbarComponent.prototype, "title", void 0);
        __decorate([
            core.Output()
        ], NavbarComponent.prototype, "sidebarClicked", void 0);
        NavbarComponent = __decorate([
            core.Component({
                selector: 'ak-navbar',
                template: "<ng-container>\r\n  <div class=\"nav acm-nav\">\r\n    <div class=\"header-container\">\r\n      <ak-icon-hamburger\r\n        class=\"nav-icon\"\r\n        (click)=\"toggleSidebar()\"\r\n      ></ak-icon-hamburger>\r\n      <div class=\"logo-container\">\r\n        <a href=\"#home\">{{ title }}</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"header-container\">\r\n      <ak-icon-bell></ak-icon-bell>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n",
                styles: ["body{background-color:#edf1f7}.nav{display:flex;justify-content:space-between;max-width:1920px;margin-left:auto;margin-right:auto;width:100%}.nav-icon{color:#8f9bb3;cursor:pointer}.acm-nav{background-color:#fff;box-shadow:0 .5rem 1rem 0 rgba(44,51,73,.1);overflow:hidden;padding:1.25rem;height:4.75rem;position:fixed;top:0;left:0;right:0;z-index:1040}.acm-nav a{color:#222b45;text-align:center;padding:0 20px;text-decoration:none;font-size:28px}.header-container,.logo-container{display:flex;align-items:center;width:auto}@media only screen and (max-width:380px){.acm-nav a{font-size:25px}}"]
            })
        ], NavbarComponent);
        return NavbarComponent;
    }());

    var SiderbarComponent = /** @class */ (function () {
        function SiderbarComponent(router) {
            this.router = router;
            this.items = [
                { name: 'Dashboard', icon: 'house', link: '/home/dashboard' },
                { name: 'Classroom', icon: 'classroom', link: '/home/classroom' },
                { name: 'Resources', icon: 'resources', link: '/home/resources' },
                { name: 'Teachers', icon: 'teachers', link: '/home/teachers' },
                {
                    name: 'Student Advisors',
                    icon: 'board-members',
                    link: '/home/student-advisors',
                },
                { name: 'Video Lectures', icon: 'video', link: '/home/video-lectures' },
                { name: 'Calendar', icon: 'calendar', link: '/home/calendar' },
                { name: 'Event Sign Up', icon: 'contract', link: '/home/event-sign-up' },
                { name: 'ACM Information', icon: 'info', link: '/home/acm-information' },
                { name: 'Bot Service Info', icon: 'robot', link: '/home/bot-service-info' },
                { name: 'About Us', icon: 'question', link: '/home/about-us' },
                {
                    name: 'Contact Services',
                    icon: 'contact',
                    link: '/home/contact-services',
                },
            ];
            this.sidebarOpen = true;
        }
        SiderbarComponent.prototype.ngOnInit = function () {
            this.path = window.location.pathname;
        };
        SiderbarComponent.prototype.route = function (item) {
            this.path = item.link;
            this.router.navigate([item.link]);
        };
        SiderbarComponent.prototype.open = function () {
            document.getElementById('sidebar').style.width = '16rem';
            this.sidebarOpen = true;
        };
        SiderbarComponent.prototype.close = function () {
            document.getElementById('sidebar').style.width = '3.5rem';
            this.sidebarOpen = false;
        };
        SiderbarComponent.prototype.toggle = function () {
            if (this.sidebarOpen) {
                this.close();
            }
            else {
                this.open();
            }
        };
        SiderbarComponent.prototype.isOpen = function () {
            return this.sidebarOpen;
        };
        SiderbarComponent.ctorParameters = function () { return [
            { type: router.Router }
        ]; };
        __decorate([
            core.Input()
        ], SiderbarComponent.prototype, "items", void 0);
        SiderbarComponent = __decorate([
            core.Component({
                selector: 'ak-sidebar',
                template: "<ul id=\"sidebar\" class=\"menu-items scrollable\">\r\n  <li class=\"menu-item\" *ngFor=\"let item of items\" (click)=\"route(item)\">\r\n    <a>\r\n      <ak-icon\r\n        [icon]=\"item.icon\"\r\n        class=\"icon\"\r\n        [ngClass]=\"{ 'item-selected': path === item.link }\"\r\n      ></ak-icon>\r\n      <span\r\n        class=\"title\"\r\n        [ngClass]=\"{ 'item-selected': path === item.link }\"\r\n        *ngIf=\"sidebarOpen\"\r\n        >{{ item.name }}</span\r\n      >\r\n    </a>\r\n  </li>\r\n  <li class=\"menu-item\">\r\n    <a>\r\n      <ak-icon></ak-icon>\r\n      <span class=\"title\"></span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n",
                styles: ["li{border-bottom:1px solid #edf1f7}.fixed{position:fixed}.scrollable::-webkit-scrollbar{display:none}.scrollable{-ms-overflow-style:none;scrollbar-width:none}.menu-items{overflow-y:scroll;color:#222b45;top:0;left:0;bottom:0;height:100%;width:16rem;z-index:0;font-weight:400;margin:4.75rem 0 0;padding:0;position:fixed;background:#fff;box-shadow:.5rem .5rem 1rem 0 rgba(44,51,73,.1);font-family:Arial,\"Helvetica Neue\",Helvetica,sans-serif;transition:.5s}.menu-item{font-family:Open Sans,sans-serif;font-size:1rem;font-weight:600;line-height:1.5rem;list-style:none;padding:1.25rem 1rem;cursor:pointer;transition:.4s}.menu-item a .title{flex:1 0 auto;vertical-align:text-top}.menu-item a .icon{color:#8f9bb3;margin:0 .5rem 0 0;transition:.4s}.menu-item a .icon:hover,.menu-item:hover{color:#36f}.item-selected{color:#36f!important}"]
            })
        ], SiderbarComponent);
        return SiderbarComponent;
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
        JwtService = __decorate([
            core.Injectable()
        ], JwtService);
        return JwtService;
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
        function StompUrlService(urlService) {
            this.urlService = urlService;
        }
        /**
         * Builds the broker URL.
         * @param subdomain The subdomain.
         */
        StompUrlService.prototype.buildBrokerUrl = function () {
            return this.urlService.getSocketPath();
        };
        StompUrlService.ctorParameters = function () { return [
            { type: UrlService }
        ]; };
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
        StompWebsocketService = __decorate([
            core.Injectable()
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

    var ServicesModule = /** @class */ (function () {
        function ServicesModule() {
        }
        ServicesModule = __decorate([
            core.NgModule({
                imports: [platformBrowser.BrowserModule, http.HttpClientModule],
                providers: [
                    AuthService,
                    ParticlesService,
                    UserService,
                    JwtService,
                    UrlService,
                ],
                exports: [StompWebsocketModule],
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
                    NavbarComponent,
                    SiderbarComponent,
                ],
                imports: [
                    platformBrowser.BrowserModule,
                    router.RouterModule,
                    animations.BrowserAnimationsModule,
                    http.HttpClientModule,
                    ServicesModule,
                    IconsModule,
                ],
                exports: [
                    AcmkitLibComponent,
                    CardComponent,
                    BasePageComponent,
                    LoginCardComponent,
                    LandingComponent,
                    NavbarComponent,
                    SiderbarComponent,
                    ServicesModule,
                    IconsModule,
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
                imports: [
                    testing$2.RouterTestingModule,
                    common.CommonModule,
                    testing$1.HttpClientTestingModule,
                    AcmkitLibModule,
                ],
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
    exports.BellIconComponent = BellIconComponent;
    exports.BoardMemebersIconComponent = BoardMemebersIconComponent;
    exports.CalendarIconComponent = CalendarIconComponent;
    exports.CardComponent = CardComponent;
    exports.ClassroomIconComponent = ClassroomIconComponent;
    exports.ContactIconComponent = ContactIconComponent;
    exports.ContractIconComponent = ContractIconComponent;
    exports.HamburgerIconComponent = HamburgerIconComponent;
    exports.HouseIconComponent = HouseIconComponent;
    exports.IconsModule = IconsModule;
    exports.InfoIconComponent = InfoIconComponent;
    exports.JwtService = JwtService;
    exports.LandingComponent = LandingComponent;
    exports.LoginCardComponent = LoginCardComponent;
    exports.NavbarComponent = NavbarComponent;
    exports.ParticlesService = ParticlesService;
    exports.QuestionIconComponent = QuestionIconComponent;
    exports.ResourcesIconComponent = ResourcesIconComponent;
    exports.RobotIconComponent = RobotIconComponent;
    exports.ServicesModule = ServicesModule;
    exports.SiderbarComponent = SiderbarComponent;
    exports.StompUrlService = StompUrlService;
    exports.StompWebsocketModule = StompWebsocketModule;
    exports.StompWebsocketService = StompWebsocketService;
    exports.TOKEN_NAME = TOKEN_NAME;
    exports.TeachersIconComponent = TeachersIconComponent;
    exports.VideoIconComponent = VideoIconComponent;
    exports.defaultStompConfig = defaultStompConfig;
    exports.setupTests = setupTests;
    exports.stompConfigFactory = stompConfigFactory;
    exports.stompWebsocketServiceFactory = stompWebsocketServiceFactory;
    exports.ɵ0 = ɵ0;
    exports.ɵ1 = ɵ1;
    exports.ɵa = UrlService;
    exports.ɵb = UserService;
    exports.ɵc = IconComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=acmkit-lib.umd.js.map
