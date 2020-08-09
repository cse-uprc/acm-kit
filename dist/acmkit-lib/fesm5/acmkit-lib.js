import { __decorate, __awaiter, __generator, __extends } from 'tslib';
import { Component, Input, ɵɵdefineInjectable, Injectable, ViewChild, HostListener, ɵɵinject, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { configureTestSuite } from 'ng-bullet';

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

var ParticlesService = /** @class */ (function () {
    function ParticlesService() {
    }
    ParticlesService.prototype.init = function (configFile) {
        particlesJS('particles-js', configFile, function () { });
    };
    ParticlesService.ɵprov = ɵɵdefineInjectable({ factory: function ParticlesService_Factory() { return new ParticlesService(); }, token: ParticlesService, providedIn: "root" });
    ParticlesService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ParticlesService);
    return ParticlesService;
}());

var LandingParticleConfig = {
    particles: {
        number: {
            value: 170,
            density: {
                enable: true,
                value_area: 1400,
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
        console.log(window.pageYOffset);
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
        { type: Router },
        { type: ParticlesService }
    ]; };
    __decorate([
        ViewChild('home')
    ], LandingComponent.prototype, "homeElement", void 0);
    __decorate([
        ViewChild('about')
    ], LandingComponent.prototype, "aboutElement", void 0);
    __decorate([
        ViewChild('feature')
    ], LandingComponent.prototype, "featureElemet", void 0);
    __decorate([
        ViewChild('team')
    ], LandingComponent.prototype, "teamElement", void 0);
    __decorate([
        HostListener('window:scroll', ['$event'])
    ], LandingComponent.prototype, "scrollHandler", null);
    LandingComponent = __decorate([
        Component({
            selector: 'ak-landing',
            template: "<nav class=\"navbar navbar-expand-md navbar-dark header sticky\">\r\n  <a href=\"/\" class=\"navbar-brand logo-text\">\r\n    ACM Website\r\n  </a>\r\n  <button\r\n    class=\"navbar-toggler nav-icon\"\r\n    type=\"button\"\r\n    data-toggle=\"collapse\"\r\n    data-target=\"#collapsibleNavbar\"\r\n  >\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div\r\n    class=\"collapse navbar-collapse text-center header-text\"\r\n    id=\"collapsibleNavbar\"\r\n  >\r\n    <div class=\"mainmenu\">\r\n      <ul class=\"navbar-nav text-center\" id=\"primary-menu\">\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 0 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#home\"\r\n            >Home</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 1 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#about\"\r\n            >About Us</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 2 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#feature\"\r\n            >Features</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 3 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#team\"\r\n            >Team</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a class=\"nav-link text-light\" href=\"#contact\">Contact Us</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<!-- header section end -->\r\n<!-- hero area start -->\r\n<section class=\"hero-area\" id=\"home\" #home>\r\n  <div id=\"particles-js\"></div>\r\n  <div class=\"container hero-area-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-7\">\r\n        <div class=\"hero-area-content\">\r\n          <h1>Welcome to ACM!</h1>\r\n          <p>\r\n            Offical ACM website to help you keep up to date on the latest\r\n            events, meetings, and sessions throughout the year.\r\n          </p>\r\n          <div (click)=\"onSignIn()\" class=\"radius-btn\">Sign In</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- hero area end -->\r\n\r\n<!-- about section start -->\r\n<section class=\"about-area ptb-90\" id=\"about\" #about>\r\n  <div class=\"container about-area-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"sec-title\">\r\n          <h2 data-aos=\"fade-up\">\r\n            About ACM<span class=\"sec-title-border\"></span>\r\n          </h2>\r\n          <p data-aos=\"fade-up\">\r\n            A little information about what ACM is and what we do.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div data-aos=\"fade-up\" class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-ruler-pencil\"></i>\r\n          <h4>What is ACM?</h4>\r\n          <p>\r\n            The Association for Computing Machinery is a US-based international\r\n            learned society for computing. It was founded in 1947, and is the\r\n            world's largest scientific and educational computing society.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div data-aos=\"fade-up\" class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-computer\"></i>\r\n          <h4>What to expect to learn?</h4>\r\n          <p>\r\n            You will learn a variety of skills and techniques through ACM. You\r\n            can learn both software and hardware from our Chief Software and\r\n            Chief Hardware officers Sam Butler and Kiyle Winborne\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div data-aos=\"fade-up\" class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-headphone-alt\"></i>\r\n          <h4>When we meet?</h4>\r\n          <p>\r\n            We meet every other Friday for meetings and talks about information\r\n            that might be useful to tell people. We meet for coding sessions\r\n            every other Wednesday to learn about other languages and platforms.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"feature-area ptb-90\" id=\"feature\" #feature>\r\n  <div class=\"container feature-area-wrapper\">\r\n    <div class=\"row flexbox-center\">\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"single-feature-box text-lg-right text-center\">\r\n          <ul>\r\n            <li>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-info\">\r\n                <h4>Calendar</h4>\r\n                <p>Keep Up to date on what events are coming up.</p>\r\n              </div>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-icon\"></div>\r\n            </li>\r\n            <li>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-info\">\r\n                <h4>Meetings</h4>\r\n                <p>When we have meetings for topics and events.</p>\r\n              </div>\r\n              <div class=\"feature-box-icon\"></div>\r\n            </li>\r\n            <li>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-info\">\r\n                <h4>Code Documentation</h4>\r\n                <p>\r\n                  What is used to help manage source code and documentation.\r\n                </p>\r\n              </div>\r\n              <div class=\"feature-box-icon\"></div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"single-feature-box text-lg-left text-center\">\r\n          <ul>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div\r\n                data-aos=\"fade-left\"\r\n                data-aos-duration=\"500\"\r\n                class=\"feature-box-info\"\r\n              >\r\n                <h4>Projects</h4>\r\n                <p>What projects we are currently working on or updating.</p>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div\r\n                data-aos=\"fade-left\"\r\n                data-aos-duration=\"500\"\r\n                class=\"feature-box-info\"\r\n              >\r\n                <h4>Session Links</h4>\r\n                <p>Informative talks or information for learning purposes.</p>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div\r\n                data-aos=\"fade-left\"\r\n                data-aos-duration=\"500\"\r\n                class=\"feature-box-info\"\r\n              >\r\n                <h4>Ideas</h4>\r\n                <p>\r\n                  Section to keep track of project ideas and upcoming projects.\r\n                </p>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- feature section end -->\r\n\r\n<!-- team section start -->\r\n<section class=\"team-area ptb-90\" id=\"team\" #team>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"sec-title\">\r\n          <h2>Meet Our Team<span class=\"sec-title-border\"></span></h2>\r\n          <p>\r\n            These are the current board memebers of ACM. You can click on them\r\n            to learn more information and contact them if need be.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Josue Van Dyke</div></strong>\r\n            <p>Chair</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Sam Butler</div></strong>\r\n            <p>Chief Software Engineer</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Luke Lengel</div></strong>\r\n            <p>Treasurer/Secretary</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Kiyle Winborne</div></strong>\r\n            <p>Chief Hardware Engineer</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- footer section start -->\r\n<footer class=\"footer\" id=\"contact\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"copyright-area\">\r\n          <br />\r\n          <p>\r\n            Copyright &copy; 2020 All rights reserved\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"
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
        { type: HttpClient }
    ]; };
    AuthService.ɵprov = ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(ɵɵinject(HttpClient)); }, token: AuthService, providedIn: "root" });
    AuthService = __decorate([
        Injectable({
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
        Component({
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
        NgModule({
            imports: [BrowserModule, HttpClientModule],
            providers: [AuthService, ParticlesService],
        })
    ], ServicesModule);
    return ServicesModule;
}());

var AcmkitLibModule = /** @class */ (function () {
    function AcmkitLibModule() {
    }
    AcmkitLibModule = __decorate([
        NgModule({
            declarations: [
                AcmkitLibComponent,
                CardComponent,
                BasePageComponent,
                LoginCardComponent,
                LandingComponent,
            ],
            imports: [
                BrowserModule,
                RouterModule,
                BrowserAnimationsModule,
                HttpClientModule,
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
    AcmkitLibService.ɵprov = ɵɵdefineInjectable({ factory: function AcmkitLibService_Factory() { return new AcmkitLibService(); }, token: AcmkitLibService, providedIn: "root" });
    AcmkitLibService = __decorate([
        Injectable({
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
                TestBed.configureTestingModule(moduleMetaData);
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
            imports: [RouterTestingModule, CommonModule, HttpClientTestingModule],
            declarations: [],
        };
    };
    return AcmKitTestBed;
}(AbstractTestBed));

var setupTests = function (initTest) { return configureTestSuite(function () { return initTest(); }); };

/**
 * Public API Surface of acmkit-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AbstractTestBed, AcmKitTestBed, AcmkitLibComponent, AcmkitLibModule, AcmkitLibService, AuthService, BasePageComponent, CardComponent, LandingComponent, LoginCardComponent, ParticlesService, ServicesModule, setupTests };
//# sourceMappingURL=acmkit-lib.js.map
