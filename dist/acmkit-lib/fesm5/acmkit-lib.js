import { __decorate, __assign, __extends, __awaiter, __generator } from 'tslib';
import { Component, Input, ɵɵdefineInjectable, Injectable, ViewChild, HostListener, ɵɵinject, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
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
            template: "<nav class=\"navbar navbar-expand-md navbar-dark header sticky\">\r\n  <a href=\"/\" class=\"navbar-brand logo-text\">\r\n    ACM Website\r\n  </a>\r\n  <button\r\n    class=\"navbar-toggler nav-icon\"\r\n    type=\"button\"\r\n    data-toggle=\"collapse\"\r\n    data-target=\"#collapsibleNavbar\"\r\n  >\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div\r\n    class=\"collapse navbar-collapse text-center header-text\"\r\n    id=\"collapsibleNavbar\"\r\n  >\r\n    <div class=\"mainmenu\">\r\n      <ul class=\"navbar-nav text-center\" id=\"primary-menu\">\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 0 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#home\"\r\n            >Home</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 1 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#about\"\r\n            >About Us</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 2 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#feature\"\r\n            >Features</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 3 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#team\"\r\n            >Team</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a class=\"nav-link text-light\" href=\"#contact\">Contact Us</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<!-- header section end -->\r\n<!-- hero area start -->\r\n<section class=\"hero-area\" id=\"home\" #home>\r\n  <div id=\"particles-js\"></div>\r\n  <div class=\"container hero-area-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-7\">\r\n        <div class=\"hero-area-content\">\r\n          <h1>Welcome to ACM!</h1>\r\n          <p>\r\n            Offical University of Toledo UPRC Campus ACM Chapter website to help\r\n            you keep up to date on the latest events, meetings, and sessions\r\n            throughout the year.\r\n          </p>\r\n          <div (click)=\"onSignIn()\" class=\"radius-btn\">Sign In</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- hero area end -->\r\n\r\n<!-- about section start -->\r\n<section class=\"about-area ptb-90\" id=\"about\" #about>\r\n  <div class=\"container about-area-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"sec-title\">\r\n          <h2 data-aos=\"fade-up\">\r\n            About ACM<span class=\"sec-title-border\"></span>\r\n          </h2>\r\n          <p data-aos=\"fade-up\">\r\n            A little information about what ACM is and what we do.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div data-aos=\"fade-up\" class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-ruler-pencil\"></i>\r\n          <h4>What is ACM?</h4>\r\n          <p>\r\n            The Association for Computing Machinery is a US-based international\r\n            learned society for computing. It was founded in 1947, and is the\r\n            world's largest scientific and educational computing society.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div data-aos=\"fade-up\" class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-computer\"></i>\r\n          <h4>What to expect to learn?</h4>\r\n          <p>\r\n            You will learn a variety of skills and techniques through ACM. You\r\n            can learn both software and hardware from our Chief Software and\r\n            Chief Hardware officers Sam Butler and Kiyle Winborne\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div data-aos=\"fade-up\" class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-headphone-alt\"></i>\r\n          <h4>When we meet?</h4>\r\n          <p>\r\n            We meet every other Friday for meetings and talks about information\r\n            that might be useful to tell people. We meet for coding sessions\r\n            every other Wednesday to learn about other languages and platforms.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"feature-area ptb-90\" id=\"feature\" #feature>\r\n  <div class=\"container feature-area-wrapper\">\r\n    <div class=\"row flexbox-center\">\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"single-feature-box text-lg-right text-center\">\r\n          <ul>\r\n            <li>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-info\">\r\n                <h4>Calendar</h4>\r\n                <p>Keep Up to date on what events are coming up.</p>\r\n              </div>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-icon\"></div>\r\n            </li>\r\n            <li>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-info\">\r\n                <h4>Meetings</h4>\r\n                <p>When we have meetings for topics and events.</p>\r\n              </div>\r\n              <div class=\"feature-box-icon\"></div>\r\n            </li>\r\n            <li>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-info\">\r\n                <h4>Code Documentation</h4>\r\n                <p>\r\n                  What is used to help manage source code and documentation.\r\n                </p>\r\n              </div>\r\n              <div class=\"feature-box-icon\"></div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"single-feature-box text-lg-left text-center\">\r\n          <ul>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div\r\n                data-aos=\"fade-left\"\r\n                data-aos-duration=\"500\"\r\n                class=\"feature-box-info\"\r\n              >\r\n                <h4>Projects</h4>\r\n                <p>What projects we are currently working on or updating.</p>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div\r\n                data-aos=\"fade-left\"\r\n                data-aos-duration=\"500\"\r\n                class=\"feature-box-info\"\r\n              >\r\n                <h4>Session Links</h4>\r\n                <p>Informative talks or information for learning purposes.</p>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div\r\n                data-aos=\"fade-left\"\r\n                data-aos-duration=\"500\"\r\n                class=\"feature-box-info\"\r\n              >\r\n                <h4>Ideas</h4>\r\n                <p>\r\n                  Section to keep track of project ideas and upcoming projects.\r\n                </p>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- feature section end -->\r\n\r\n<!-- team section start -->\r\n<section class=\"team-area ptb-90\" id=\"team\" #team>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"sec-title\">\r\n          <h2>Meet Our Team<span class=\"sec-title-border\"></span></h2>\r\n          <p>\r\n            These are the current board memebers of ACM. You can click on them\r\n            to learn more information and contact them if need be.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Josue Van Dyke</div></strong>\r\n            <p>Chair</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Sam Butler</div></strong>\r\n            <p>Chief Software Engineer</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Luke Lengel</div></strong>\r\n            <p>Treasurer/Secretary</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Kiyle Winborne</div></strong>\r\n            <p>Chief Hardware Engineer</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- footer section start -->\r\n<footer class=\"footer\" id=\"contact\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"copyright-area\">\r\n          <br />\r\n          <p>\r\n            Copyright &copy; 2020 All rights reserved\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"
        })
    ], LandingComponent);
    return LandingComponent;
}());

var Environment = /** @class */ (function () {
    function Environment() {
    }
    Environment.RAW_URL = window.location.href.includes('acm-web')
        ? 'acm-microservice-prod.herokuapp.com'
        : window.location.href.includes('localhost')
            ? 'localhost:8080'
            : 'acm-microservice-dev.herokuapp.com';
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
        { type: HttpClient }
    ]; };
    UserService.ɵprov = ɵɵdefineInjectable({ factory: function UserService_Factory() { return new UserService(ɵɵinject(HttpClient)); }, token: UserService, providedIn: "root" });
    UserService = __decorate([
        Injectable({
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
        Component({
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
        { type: Router }
    ]; };
    JwtService.ɵprov = ɵɵdefineInjectable({ factory: function JwtService_Factory() { return new JwtService(ɵɵinject(Router)); }, token: JwtService, providedIn: "root" });
    JwtService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], JwtService);
    return JwtService;
}());

var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        NgModule({
            imports: [BrowserModule, HttpClientModule],
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
        console.log('Socket URL:', "ws://" + Environment.RAW_URL + "/api/web-notification-app/websocket");
        return "ws://" + Environment.RAW_URL + "/api/web-notification-app/websocket";
    };
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
    StompWebsocketService.ɵprov = ɵɵdefineInjectable({ factory: function StompWebsocketService_Factory() { return new StompWebsocketService(); }, token: StompWebsocketService, providedIn: "root" });
    StompWebsocketService = __decorate([
        Injectable({
            providedIn: 'root',
        })
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

export { AbstractTestBed, AcmKitTestBed, AcmkitLibComponent, AcmkitLibModule, AcmkitLibService, AuthService, BasePageComponent, CardComponent, JwtService, LandingComponent, LoginCardComponent, ParticlesService, ServicesModule, StompUrlService, StompWebsocketModule, StompWebsocketService, TOKEN_NAME, defaultStompConfig, setupTests, stompConfigFactory, stompWebsocketServiceFactory, ɵ0, ɵ1, UserService as ɵa };
//# sourceMappingURL=acmkit-lib.js.map
