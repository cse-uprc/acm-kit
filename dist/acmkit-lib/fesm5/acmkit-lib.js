import { __decorate, __assign, __extends, __awaiter, __generator } from 'tslib';
import { Component, NgModule, Input, Injectable, ViewChild, HostListener, ɵɵdefineInjectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { RxStompService, InjectableRxStompConfig } from '@stomp/ng2-stompjs';
import { map } from 'rxjs/operators';
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

var BellIconComponent = /** @class */ (function () {
    function BellIconComponent() {
    }
    BellIconComponent = __decorate([
        Component({
            selector: 'ak-icon-bell',
            template: "<svg\r\n  viewBox=\"0 0 24 24\"\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  width=\"32px\"\r\n  height=\"32px\"\r\n>\r\n  <path\r\n    d=\"M12,24c1.6,0,2.9-1.1,3.3-2.6H8.7C9.1,22.9,10.4,24,12,24z M18.9,14.6v-6c0-2.8-1.8-5.4-4.5-6.4L13.7,0h-3.5\r\n  \tL9.5,2.2c-2.7,1-4.5,3.6-4.5,6.4v6c0,1.4-1.2,2.6-2.6,2.6v2.6h19v-2.6C20.1,17.1,18.9,16,18.9,14.6z\"\r\n    fill=\"#A8A8A8\"\r\n  />\r\n</svg>"
        })
    ], BellIconComponent);
    return BellIconComponent;
}());

var IconsModule = /** @class */ (function () {
    function IconsModule() {
    }
    IconsModule = __decorate([
        NgModule({
            declarations: [BellIconComponent],
            exports: [BellIconComponent],
        })
    ], IconsModule);
    return IconsModule;
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
            template: "<div class=\"card\" [ngClass]=\"{ 'card-padding': !title }\">\r\n  <div *ngIf=\"title\" class=\"header\">\r\n    <div class=\"title\">{{ title }}</div>\r\n    <div *ngIf=\"editRoute\" class=\"edit-icon\"></div>\r\n  </div>\r\n  <div class=\"content-padding\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
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
        Injectable()
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
            template: "<nav class=\"navbar navbar-expand-md navbar-dark header sticky\">\r\n  <a href=\"/\" class=\"navbar-brand logo-text\">\r\n    ACM Website\r\n  </a>\r\n  <div\r\n    class=\"collapse navbar-collapse text-center header-text\"\r\n    id=\"collapsibleNavbar\"\r\n  >\r\n    <div class=\"mainmenu\">\r\n      <ul class=\"navbar-nav text-center\" id=\"primary-menu\">\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 0 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#home\"\r\n            >Home</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 1 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#about\"\r\n            >About Us</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 2 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#feature\"\r\n            >Features</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 3 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#team\"\r\n            >Team</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a class=\"nav-link text-light\" href=\"#contact\">Contact Us</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<!-- header section end -->\r\n<!-- hero area start -->\r\n<section class=\"hero-area\" id=\"home\" #home>\r\n  <div id=\"particles-js\"></div>\r\n  <div class=\"container hero-area-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-7\">\r\n        <div class=\"hero-area-content\">\r\n          <h1>Welcome to ACM!</h1>\r\n          <p>\r\n            Offical University of Toledo UPRC Campus ACM Chapter website to help\r\n            you keep up to date on the latest events, meetings, and sessions\r\n            throughout the year.\r\n          </p>\r\n          <div (click)=\"onSignIn()\" class=\"radius-btn\">Sign In</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- hero area end -->\r\n\r\n<!-- about section start -->\r\n<section class=\"about-area ptb-90\" id=\"about\" #about>\r\n  <div class=\"container about-area-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"sec-title\">\r\n          <h2 data-aos=\"fade-up\">\r\n            About ACM<span class=\"sec-title-border\"></span>\r\n          </h2>\r\n          <p data-aos=\"fade-up\">\r\n            A little information about what ACM is and what we do.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div data-aos=\"fade-up\" class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-ruler-pencil\"></i>\r\n          <h4>What is ACM?</h4>\r\n          <p>\r\n            The Association for Computing Machinery is a US-based international\r\n            learned society for computing. It was founded in 1947, and is the\r\n            world's largest scientific and educational computing society.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div data-aos=\"fade-up\" class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-computer\"></i>\r\n          <h4>What to expect to learn?</h4>\r\n          <p>\r\n            You will learn a variety of skills and techniques through ACM. You\r\n            can learn both software and hardware from our Chief Software and\r\n            Chief Hardware officers Sam Butler and Kiyle Winborne\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div data-aos=\"fade-up\" class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-headphone-alt\"></i>\r\n          <h4>When we meet?</h4>\r\n          <p>\r\n            We meet every other Friday for meetings and talks about information\r\n            that might be useful to tell people. We meet for coding sessions\r\n            every other Wednesday to learn about other languages and platforms.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"feature-area ptb-90\" id=\"feature\" #feature>\r\n  <div class=\"container feature-area-wrapper\">\r\n    <div class=\"row flexbox-center\">\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"single-feature-box text-lg-right text-center\">\r\n          <ul>\r\n            <li>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-info\">\r\n                <h4>Calendar</h4>\r\n                <p>Keep Up to date on what events are coming up.</p>\r\n              </div>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-icon\"></div>\r\n            </li>\r\n            <li>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-info\">\r\n                <h4>Meetings</h4>\r\n                <p>When we have meetings for topics and events.</p>\r\n              </div>\r\n              <div class=\"feature-box-icon\"></div>\r\n            </li>\r\n            <li>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-info\">\r\n                <h4>Code Documentation</h4>\r\n                <p>\r\n                  What is used to help manage source code and documentation.\r\n                </p>\r\n              </div>\r\n              <div class=\"feature-box-icon\"></div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"single-feature-box text-lg-left text-center\">\r\n          <ul>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div\r\n                data-aos=\"fade-left\"\r\n                data-aos-duration=\"500\"\r\n                class=\"feature-box-info\"\r\n              >\r\n                <h4>Projects</h4>\r\n                <p>What projects we are currently working on or updating.</p>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div\r\n                data-aos=\"fade-left\"\r\n                data-aos-duration=\"500\"\r\n                class=\"feature-box-info\"\r\n              >\r\n                <h4>Session Links</h4>\r\n                <p>Informative talks or information for learning purposes.</p>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div\r\n                data-aos=\"fade-left\"\r\n                data-aos-duration=\"500\"\r\n                class=\"feature-box-info\"\r\n              >\r\n                <h4>Ideas</h4>\r\n                <p>\r\n                  Section to keep track of project ideas and upcoming projects.\r\n                </p>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- feature section end -->\r\n\r\n<!-- team section start -->\r\n<section class=\"team-area ptb-90\" id=\"team\" #team>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"sec-title\">\r\n          <h2>Meet Our Team<span class=\"sec-title-border\"></span></h2>\r\n          <p>\r\n            These are the current board memebers of ACM. You can click on them\r\n            to learn more information and contact them if need be.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Josue Van Dyke</div></strong>\r\n            <p>Chair</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Sam Butler</div></strong>\r\n            <p>Chief Software Engineer</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Luke Lengel</div></strong>\r\n            <p>Treasurer/Secretary</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Kiyle Winborne</div></strong>\r\n            <p>Chief Hardware Engineer</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- footer section start -->\r\n<footer class=\"footer\" id=\"contact\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"copyright-area\">\r\n          <br />\r\n          <p>\r\n            Copyright &copy; 2020 All rights reserved\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"
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
        Injectable()
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
        { type: HttpClient },
        { type: UrlService }
    ]; };
    AuthService = __decorate([
        Injectable()
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
        { type: HttpClient },
        { type: UrlService }
    ]; };
    UserService = __decorate([
        Injectable()
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
        Component({
            selector: 'ak-login-card',
            template: "<div class=\"placeholder-padding login-container\">\r\n  <div class=\"login-wrap\">\r\n    <div class=\"login-html\">\r\n      <input id=\"tab-1\" type=\"radio\" name=\"tab\" class=\"sign-in\" checked />\r\n      <label for=\"tab-1\" class=\"tab\">Sign In</label>\r\n\r\n      <input id=\"tab-2\" type=\"radio\" name=\"tab\" class=\"sign-up\" />\r\n      <label for=\"tab-2\" class=\"tab\">Sign Up</label>\r\n      <div class=\"login-form\">\r\n        <div class=\"sign-in-htm\">\r\n          <div class=\"group\">\r\n            <label for=\"user\" class=\"label\">Username</label>\r\n            <input #username type=\"text\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label for=\"pass\" class=\"label\">Password</label>\r\n            <input #pass type=\"password\" class=\"input\" data-type=\"password\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label class=\"forgot\">Forgot Password?</label>\r\n          </div>\r\n          <div class=\"group\">\r\n            <input\r\n              (click)=\"onSignIn(username.value, pass.value)\"\r\n              type=\"submit\"\r\n              class=\"button\"\r\n              value=\"Sign In\"\r\n            />\r\n          </div>\r\n          <div class=\"hr\"></div>\r\n          <div class=\"social\">\r\n            <div class=\"inline-block\">\r\n              <a [href]=\"twitterLink\" class=\"target-pointer\" target=\"_blank\">\r\n                <img class=\"social-icon\" [src]=\"twitterIcon\" />\r\n              </a>\r\n              <div class=\"social-text\">Twitter</div>\r\n            </div>\r\n\r\n            <div class=\"inline-block\">\r\n              <a [href]=\"githubLink\" class=\"target-pointer\" target=\"_blank\">\r\n                <img class=\"social-icon\" [src]=\"githubIcon\" />\r\n              </a>\r\n              <div class=\"social-text\">Github</div>\r\n            </div>\r\n            <div class=\"inline-block\">\r\n              <a [href]=\"facebookLink\" class=\"target-pointer\" target=\"_blank\">\r\n                <img class=\"social-icon\" [src]=\"facebookIcon\" />\r\n              </a>\r\n              <div class=\"social-text\">Facebook</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"sign-up-htm\">\r\n          <div class=\"group\">\r\n            <label for=\"user\" class=\"label\">First Name</label>\r\n            <input #first type=\"text\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label for=\"pass\" class=\"label\">Last Name</label>\r\n            <input #last type=\"text\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label for=\"pass\" class=\"label\">Email Address</label>\r\n            <input #email type=\"email\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <input\r\n              type=\"submit\"\r\n              class=\"button\"\r\n              value=\"Sign Up\"\r\n              (click)=\"onSignUp(first.value, last.value, email.value)\"\r\n            />\r\n          </div>\r\n          <div class=\"hr\"></div>\r\n          <div class=\"foot-lnk\">\r\n            <label class=\"target-pointer\" for=\"tab-1\">Already Member?</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
            styles: [".login-container{margin:0;color:#6a6f8c;font:600 16px/18px \"Open Sans\",sans-serif}.clearfix:after,.clearfix:before{content:\"\";display:table}.clearfix:after{clear:both;display:block}.login-wrap{width:100%;margin:auto;max-width:525px;min-height:670px;position:relative;background:url(https://raw.githubusercontent.com/khadkamhn/day-01-login-form/master/img/bg.jpg) center no-repeat;box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)}.login-html{width:100%;height:100%;position:absolute;padding:90px 70px 50px;background:rgba(40,57,101,.9)}.login-html .sign-in-htm,.login-html .sign-up-htm{top:0;left:0;right:0;bottom:0;position:absolute;transform:rotateY(180deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:.4s linear}.login-form .group .check,.login-html .sign-in,.login-html .sign-up{display:none}.login-form .group .button,.login-form .group .label,.login-html .tab{text-transform:uppercase}.login-html .tab{cursor:pointer;font-size:22px;padding-bottom:5px;margin:0 15px 10px 0;display:inline-block;border-bottom:2px solid transparent}.login-html .sign-in:checked+.tab,.login-html .sign-up:checked+.tab{color:#fff;border-color:#1161ee}.login-form{margin-top:20px;min-height:345px;position:relative;perspective:1000px;transform-style:preserve-3d}.login-form .group{margin-bottom:15px}.login-form .group .button,.login-form .group .input,.login-form .group .label{width:100%;color:#fff;display:block}.login-form .group .button,.login-form .group .input{border:none;padding:15px 20px;border-radius:25px;background:rgba(255,255,255,.1)}.login-form .group input[data-type=password]{-webkit-text-security:circle}.login-form .group .label{color:#aaa;font-size:12px}.login-form .group .button{background:#1161ee}.login-form .group label .icon{width:15px;height:15px;border-radius:2px;position:relative;display:inline-block;background:rgba(255,255,255,.1)}.login-form .group label .icon:after,.login-form .group label .icon:before{content:\"\";width:10px;height:2px;background:#fff;position:absolute;transition:.2s ease-in-out}.login-form .group label .icon:before{left:3px;width:5px;bottom:6px;transform:scale(0) rotate(0)}.login-form .group label .icon:after{top:6px;right:0;transform:scale(0) rotate(0)}.login-form .group .check:checked+label{color:#fff}.login-form .group .check:checked+label .icon{background:#1161ee}.login-form .group .check:checked+label .icon:before{transform:scale(1) rotate(45deg)}.login-form .group .check:checked+label .icon:after{transform:scale(1) rotate(-45deg)}.login-html .sign-in:checked+.tab+.sign-up+.tab+.login-form .sign-in-htm,.login-html .sign-up:checked+.tab+.login-form .sign-up-htm{transform:rotate(0)}.hr{height:2px;margin:30px 0;background:rgba(255,255,255,.2)}.foot-lnk{text-align:center;cursor:pointer;color:#fff}.forgot{cursor:pointer;transition:.2s ease-in}.forgot:hover{color:#fff}.social{text-align:center}.social-icon{width:50px;margin:0 15px;transition:transform .1s}.social-icon:hover{transform:scale(1.5)}.social-text{margin:10px}.placeholder-padding{padding:100px 0}"]
        })
    ], LoginCardComponent);
    return LoginCardComponent;
}());

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.title = '';
    }
    NavbarComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    __decorate([
        Input()
    ], NavbarComponent.prototype, "title", void 0);
    NavbarComponent = __decorate([
        Component({
            selector: 'ak-navbar',
            template: "<ng-container>\r\n  <div class=\"nav acm-nav\">\r\n    <div class=\"header-container\">\r\n      <div class=\"logo-container\">\r\n        <a href=\"#home\">{{ title }}</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"header-container\">\r\n      <ak-icon-bell></ak-icon-bell>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n",
            styles: ["body{background-color:#edf1f7}.nav{display:flex;justify-content:space-between;width:100%}.acm-nav{background-color:#fff;box-shadow:0 .5rem 1rem 0 rgba(44,51,73,.1);overflow:hidden;padding:1.25rem;height:4.75rem;position:fixed;top:0;left:0;right:0;z-index:1040}.acm-nav a{color:#222b45;text-align:center;padding:0 20px;text-decoration:none;font-size:28px}.header-container,.logo-container{display:flex;align-items:center;width:auto}"]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());

var SiderbarComponent = /** @class */ (function () {
    function SiderbarComponent() {
    }
    SiderbarComponent = __decorate([
        Component({
            selector: 'ak-sidebar',
            template: "<ul>\r\n  <li>Menu Item</li>\r\n  <li>Menu Item</li>\r\n  <li>Menu Item</li>\r\n  <li>Menu Item</li>\r\n  <li>Menu Item</li>\r\n  <li>Menu Item</li>\r\n</ul>\r\n",
            styles: [":host{background:#fff;color:#222b45;position:fixed;top:0;left:0;bottom:0;width:12%;min-width:250px;z-index:0;font-weight:400;box-shadow:0 .5rem 1rem 0 rgba(44,51,73,.1);font-family:Arial,\"Helvetica Neue\",Helvetica,sans-serif;padding:1.25rem}ul{font-size:18px;line-height:3;font-weight:400;padding-top:50px;list-style:none}"]
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
        { type: Router }
    ]; };
    JwtService = __decorate([
        Injectable()
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
        Injectable()
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
        return _super.prototype.watch.call(this, destination).pipe(map(function (message) { return _this.parse(message); }));
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
        Injectable()
    ], StompWebsocketService);
    return StompWebsocketService;
}(RxStompService));
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
        NgModule({
            providers: [
                StompUrlService,
                {
                    provide: StompWebsocketService,
                    useFactory: ɵ0,
                    deps: [InjectableRxStompConfig],
                },
                {
                    provide: InjectableRxStompConfig,
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
        NgModule({
            imports: [BrowserModule, HttpClientModule],
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
        NgModule({
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
                BrowserModule,
                RouterModule,
                BrowserAnimationsModule,
                HttpClientModule,
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
            imports: [
                RouterTestingModule,
                CommonModule,
                HttpClientTestingModule,
                AcmkitLibModule,
            ],
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

export { AbstractTestBed, AcmKitTestBed, AcmkitLibComponent, AcmkitLibModule, AcmkitLibService, AuthService, BasePageComponent, BellIconComponent, CardComponent, IconsModule, JwtService, LandingComponent, LoginCardComponent, NavbarComponent, ParticlesService, ServicesModule, SiderbarComponent, StompUrlService, StompWebsocketModule, StompWebsocketService, TOKEN_NAME, defaultStompConfig, setupTests, stompConfigFactory, stompWebsocketServiceFactory, ɵ0, ɵ1, UrlService as ɵa, UserService as ɵb };
//# sourceMappingURL=acmkit-lib.js.map
