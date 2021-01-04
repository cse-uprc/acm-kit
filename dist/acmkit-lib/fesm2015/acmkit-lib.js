import { __decorate, __awaiter } from 'tslib';
import { Component, Input, NgModule, Injectable, ViewChild, HostListener, ɵɵdefineInjectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
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

let AcmkitLibComponent = class AcmkitLibComponent {
    constructor() { }
    ngOnInit() { }
};
AcmkitLibComponent = __decorate([
    Component({
        selector: 'ak-test-component',
        template: `
    <p>
      Library is Working! On Version 1.0.3 Finally
    </p>
  `
    })
], AcmkitLibComponent);

let BellIconComponent = class BellIconComponent {
    constructor() { }
};
BellIconComponent = __decorate([
    Component({
        selector: 'ak-icon-bell',
        template: "<svg\r\n  viewBox=\"0 0 24 24\"\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  width=\"32px\"\r\n  height=\"32px\"\r\n>\r\n  <path\r\n    d=\"M12,24c1.6,0,2.9-1.1,3.3-2.6H8.7C9.1,22.9,10.4,24,12,24z M18.9,14.6v-6c0-2.8-1.8-5.4-4.5-6.4L13.7,0h-3.5\r\n  \tL9.5,2.2c-2.7,1-4.5,3.6-4.5,6.4v6c0,1.4-1.2,2.6-2.6,2.6v2.6h19v-2.6C20.1,17.1,18.9,16,18.9,14.6z\"\r\n    fill=\"#A8A8A8\"\r\n  />\r\n</svg>"
    })
], BellIconComponent);

let HouseIconComponent = class HouseIconComponent {
    constructor() { }
};
HouseIconComponent = __decorate([
    Component({
        selector: 'ak-icon-house',
        template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  width=\"1.5rem\"\r\n  height=\"1.5rem\"\r\n  viewBox=\"0 0 24 24\"\r\n  class=\"eva eva-home-outline\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g data-name=\"Layer 2\">\r\n    <g data-name=\"home\">\r\n      <rect width=\"24\" height=\"24\" opacity=\"0\"></rect>\r\n      <path\r\n        d=\"M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z\"\r\n      ></path>\r\n    </g>\r\n  </g>\r\n</svg>\r\n"
    })
], HouseIconComponent);

let IconComponent = class IconComponent {
    constructor() {
        this.icon = '';
    }
};
__decorate([
    Input()
], IconComponent.prototype, "icon", void 0);
IconComponent = __decorate([
    Component({
        selector: 'ak-icon',
        template: "<ak-icon-house *ngIf=\"icon\"></ak-icon-house>\r\n<ak-icon-bell *ngIf=\"icon === 'bell'\"></ak-icon-bell>\r\n"
    })
], IconComponent);

let IconsModule = class IconsModule {
};
IconsModule = __decorate([
    NgModule({
        declarations: [BellIconComponent, HouseIconComponent, IconComponent],
        exports: [BellIconComponent, HouseIconComponent, IconComponent],
        imports: [BrowserModule],
    })
], IconsModule);

let BasePageComponent = class BasePageComponent {
    constructor() { }
    ngOnInit() { }
};
BasePageComponent = __decorate([
    Component({
        selector: 'ak-base-page',
        template: "<div class=\"global-app-background\">\r\n  <ng-content></ng-content>\r\n</div>\r\n"
    })
], BasePageComponent);

let CardComponent = class CardComponent {
    constructor(router) {
        this.router = router;
        this.editRoute = '/';
    }
    ngOnInit() { }
    onEditClick() {
        this.router.navigate([this.editRoute]);
    }
};
CardComponent.ctorParameters = () => [
    { type: Router }
];
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

/**
 * Class to help manage a particle config.
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
let ParticlesService = class ParticlesService {
    constructor() { }
    /**
     * Initializes the particlesJS based on the passed in config file
     *
     * @param configFile - The particle config file we want to initialize
     */
    init(configFile) {
        particlesJS('particles-js', configFile, () => { });
    }
};
ParticlesService = __decorate([
    Injectable()
], ParticlesService);

const LandingParticleConfig = {
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

let LandingComponent = class LandingComponent {
    constructor(router, particleService) {
        this.router = router;
        this.particleService = particleService;
        this.currentActive = 0;
        this.homeOffset = null;
        this.aboutOffset = null;
        this.featureOffset = null;
        this.teamOffset = null;
    }
    ngOnInit() {
        this.particleService.init(LandingParticleConfig);
    }
    ngAfterViewInit() {
        this.homeOffset = this.homeElement.nativeElement.offsetTop;
        this.aboutOffset = this.aboutElement.nativeElement.offsetTop - 500;
        this.featureOffset = this.featureElemet.nativeElement.offsetTop - 500;
        this.teamOffset = this.teamElement.nativeElement.offsetTop - 500;
    }
    scrollHandler() {
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
    }
    onSignIn() {
        this.router.navigate(['/login']);
    }
};
LandingComponent.ctorParameters = () => [
    { type: Router },
    { type: ParticlesService }
];
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
        template: "<nav class=\"navbar navbar-expand-md navbar-dark header sticky global-font\">\r\n  <a href=\"/\" class=\"navbar-brand logo-text\">\r\n    ACM Website\r\n  </a>\r\n  <div\r\n    class=\"collapse navbar-collapse text-center header-text\"\r\n    id=\"collapsibleNavbar\"\r\n  >\r\n    <div class=\"mainmenu\">\r\n      <ul class=\"navbar-nav text-center\" id=\"primary-menu\">\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 0 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#home\"\r\n            >Home</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 1 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#about\"\r\n            >About Us</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 2 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#feature\"\r\n            >Features</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 3 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#team\"\r\n            >Team</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a class=\"nav-link text-light\" href=\"#contact\">Contact Us</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<!-- header section end -->\r\n<!-- hero area start -->\r\n<section class=\"hero-area\" id=\"home\" #home>\r\n  <div id=\"particles-js\"></div>\r\n  <div class=\"container hero-area-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-7\">\r\n        <div class=\"hero-area-content\">\r\n          <h1>Welcome to ACM!</h1>\r\n          <p>\r\n            Offical University of Toledo UPRC Campus ACM Chapter website to help\r\n            you keep up to date on the latest events, meetings, and sessions\r\n            throughout the year.\r\n          </p>\r\n          <div (click)=\"onSignIn()\" class=\"radius-btn\">Sign In</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- hero area end -->\r\n\r\n<!-- about section start -->\r\n<section class=\"about-area ptb-90\" id=\"about\" #about>\r\n  <div class=\"container about-area-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"sec-title\">\r\n          <h2 data-aos=\"fade-up\">\r\n            About ACM<span class=\"sec-title-border\"></span>\r\n          </h2>\r\n          <p data-aos=\"fade-up\">\r\n            A little information about what ACM is and what we do.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div data-aos=\"fade-up\" class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-ruler-pencil\"></i>\r\n          <h4>What is ACM?</h4>\r\n          <p>\r\n            The Association for Computing Machinery is a US-based international\r\n            learned society for computing. It was founded in 1947, and is the\r\n            world's largest scientific and educational computing society.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div data-aos=\"fade-up\" class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-computer\"></i>\r\n          <h4>What to expect to learn?</h4>\r\n          <p>\r\n            You will learn a variety of skills and techniques through ACM. You\r\n            can learn both software and hardware from our Chief Software and\r\n            Chief Hardware officers Sam Butler and Kiyle Winborne\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div data-aos=\"fade-up\" class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-headphone-alt\"></i>\r\n          <h4>When we meet?</h4>\r\n          <p>\r\n            We meet every other Friday for meetings and talks about information\r\n            that might be useful to tell people. We meet for coding sessions\r\n            every other Wednesday to learn about other languages and platforms.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"feature-area ptb-90\" id=\"feature\" #feature>\r\n  <div class=\"container feature-area-wrapper\">\r\n    <div class=\"row flexbox-center\">\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"single-feature-box text-lg-right text-center\">\r\n          <ul>\r\n            <li>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-info\">\r\n                <h4>Calendar</h4>\r\n                <p>Keep Up to date on what events are coming up.</p>\r\n              </div>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-icon\"></div>\r\n            </li>\r\n            <li>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-info\">\r\n                <h4>Meetings</h4>\r\n                <p>When we have meetings for topics and events.</p>\r\n              </div>\r\n              <div class=\"feature-box-icon\"></div>\r\n            </li>\r\n            <li>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-info\">\r\n                <h4>Code Documentation</h4>\r\n                <p>\r\n                  What is used to help manage source code and documentation.\r\n                </p>\r\n              </div>\r\n              <div class=\"feature-box-icon\"></div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"single-feature-box text-lg-left text-center\">\r\n          <ul>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div\r\n                data-aos=\"fade-left\"\r\n                data-aos-duration=\"500\"\r\n                class=\"feature-box-info\"\r\n              >\r\n                <h4>Projects</h4>\r\n                <p>What projects we are currently working on or updating.</p>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div\r\n                data-aos=\"fade-left\"\r\n                data-aos-duration=\"500\"\r\n                class=\"feature-box-info\"\r\n              >\r\n                <h4>Session Links</h4>\r\n                <p>Informative talks or information for learning purposes.</p>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div\r\n                data-aos=\"fade-left\"\r\n                data-aos-duration=\"500\"\r\n                class=\"feature-box-info\"\r\n              >\r\n                <h4>Ideas</h4>\r\n                <p>\r\n                  Section to keep track of project ideas and upcoming projects.\r\n                </p>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- feature section end -->\r\n\r\n<!-- team section start -->\r\n<section class=\"team-area ptb-90\" id=\"team\" #team>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"sec-title\">\r\n          <h2>Meet Our Team<span class=\"sec-title-border\"></span></h2>\r\n          <p>\r\n            These are the current board memebers of ACM. You can click on them\r\n            to learn more information and contact them if need be.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Josue Van Dyke</div></strong>\r\n            <p>Chair</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Sam Butler</div></strong>\r\n            <p>Chief Software Engineer</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Luke Lengel</div></strong>\r\n            <p>Treasurer/Secretary</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Kiyle Winborne</div></strong>\r\n            <p>Chief Hardware Engineer</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- footer section start -->\r\n<footer class=\"footer\" id=\"contact\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"copyright-area\">\r\n          <br />\r\n          <p>\r\n            Copyright &copy; 2020 All rights reserved\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n",
        styles: ["h1,h2,h3,h4,h5,h6{font-weight:500}h1,h2,h3,h4,h5,h6,p{margin:0}h1{font-size:48px}h2{font-size:30px;color:#232323}h4{font-size:18px;color:#232323}h6{font-size:14px;color:#232323}h5{color:#232323}a{transition:.6s}a,a:hover{color:#666}a,a:active,a:focus,a:hover,button:focus{text-decoration:none;border:none;outline:0}ul{list-style:none;margin:0;padding:0}.sec-title{text-align:center;max-width:400px;margin:0 auto 40px}.sec-title h2{padding-bottom:20px;margin-bottom:20px;position:relative;top:-6px}.sec-title h2 .sec-title-border{width:100px;position:absolute;bottom:0;left:0;border-top:4px solid #222;right:0;height:0;margin:auto}.sec-title h2 .sec-title-border span{width:9px;height:9px;position:relative;display:inline-block;margin:0 1px;bottom:23.3px}.sec-title h2 .sec-title-border span::before{background:#222;content:\"\";position:absolute;top:0;left:0;height:100%;width:100%;transform:rotate(45deg)}.mt-100{margin-top:100px}.mt-30{margin-top:30px}.ptb-100{padding:100px 0}.ptb-90{padding:90px 0}.header{display:inline-block}.header.sticky .mainmenu li a.radius-btn,.mainmenu li a.radius-btn,.radius-btn{border:1px solid #fff;color:#fff;border-radius:15px;padding:6px 25px;display:inline-block;text-transform:uppercase;cursor:pointer;font-weight:500;transition:75ms linear}.header.sticky .mainmenu li a.radius-btn:hover,.mainmenu li a.radius-btn:hover,.radius-btn:hover{background:#fff;border:1px solid #fff;color:#666}.flexbox-center{display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;justify-content:center;align-items:center}input::-webkit-input-placeholder{color:#666}.header{position:fixed;top:0;left:0;transition:.4s;width:100%;z-index:99;padding:18px 15px}.mainmenu{text-align:left;display:block}.mainmenu li{display:inline-block;text-transform:uppercase}.mainmenu li a{display:inline-block;color:#fff;position:relative;padding:5px 16px;margin:0 3px;border:1px solid transparent}.slicknav_menu{padding:0;background:0 0;display:none}.mainmenu ul li a.active,.mainmenu ul li a:hover,.slicknav_menu a.active{border:1px solid #fff}.header.sticky{border-radius:0;border-bottom:transparent;background:linear-gradient(to left,rgba(0,32,85,.8),rgba(0,93,181,.8));background:-moz-linear-gradient(to left,rgba(0,32,85,.8),rgba(0,93,181,.8));padding:20px}.mainmenu li a.radius-btn{margin-left:55px}.hero-area{height:100vh;transform:scale(1.1);z-index:1;position:relative;background-image:url(https://3dprintingindustry.com/wp-content/uploads/2014/09/lccc-ridge-campus-3d-printing-industry.png);background-repeat:no-repeat;background-position:center;background-attachment:fixed;background-size:cover;overflow:hidden}.hero-area-wrapper{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.hero-area::before{content:\"\";top:0;left:0;opacity:.85;right:0;bottom:0;z-index:-1;position:absolute;background:#000529;background:linear-gradient(to right,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);background:-webkit-linear-gradient(left,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%)}.hero-area-content{color:#fff;padding:80px 0 170px}.hero-area-content h1{color:#fff}.hero-area-content p{margin:28px 0 25px}.hero-area-content .radius-btn{margin-top:15px;margin-right:15px}.about-area{text-align:center;height:100vh;transform:scale(1.2)}.about-area-wrapper{margin:0;padding:0;position:relative;top:50%;left:50%;transform:translate(-50%,-50%)}.single-about-box{padding:25px;transition:250ms}.single-about-box i::before{color:#0074da;font-size:40px;transition:250ms;display:block}.single-about-box.active,.single-about-box:hover{transform:scale(1.025);box-shadow:0 0 5px #ccc}.single-about-box.active i::before,.single-about-box:hover i::before{color:#000}.single-about-box h4{margin:25px 0 15px}.feature-area{z-index:1;height:100vh;position:relative;background-image:url(https://www.sasaki.com/wp-content/uploads/2019/10/IMG_0046_website-1800x1200.jpg);background-repeat:no-repeat;background-position:center;background-size:cover}.feature-area-wrapper{position:relative;margin:0;top:50%;left:50%;transform:translate(-50%,-50%) scale(1.1)}.feature-area::before{content:\"\";top:0;left:0;opacity:.85;right:0;bottom:0;background:#000529;background:linear-gradient(to right,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);background:-webkit-linear-gradient(left,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);z-index:-1;position:absolute}.single-feature-box h4{font-size:20px;margin-bottom:5px}.single-feature-box li{margin-bottom:45px;display:flex}.single-feature-box li:last-child{margin-bottom:0}.feature-box-info{flex:5}.feature-box-icon{flex:1;font-size:20px;transition:.4s}.single-feature-box li:hover .feature-box-icon i::before{border-radius:0}.single-feature-box,.single-feature-box h2,.single-feature-box h3,.single-feature-box h4{color:#fff}.feature-box-icon i::before{border:2px dashed #fff;width:40px;display:inline-block;height:40px;text-align:center;line-height:38px;border-radius:100%;transition:.4s}.single-team-member{text-align:center;box-shadow:0 2px 15px -5px #222;background:#fff;transition:.5s}.single-team-member:hover{color:#fff;background:linear-gradient(to right,#005db5 67%,#0074d9 100%)}.team-member-info h4{font-size:20px}.team-member-info{padding:20px 10px}.team-member-img{position:relative;z-index:1;overflow:hidden;background:#fff;transition:750ms}.team-member-icon{position:absolute;top:0;left:-100%;height:100%;width:100%}.team-member-img::before{content:\"\";background:#000529;background:linear-gradient(to right,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);background:-webkit-linear-gradient(left,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);top:0;right:0;width:0;height:100%;position:absolute;opacity:.85}.team-member-icon a{color:#fff;width:30px;height:30px;display:inline-block;line-height:30px;border:1px solid transparent}.team-member-icon a:hover{border:1px solid #fff}.single-team-member:hover .team-member-img::before{width:100%}.single-team-member:hover .team-member-icon{left:0}.footer{position:relative;z-index:1;padding-bottom:27.5px}.footer::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:#000529;background:linear-gradient(to right,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);background:-webkit-linear-gradient(left,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);opacity:.85;z-index:-1}.copyright-area{text-align:center;margin-top:10px}.copyright-area ul li{display:inline-block}.copyright-area ul li a{width:35px;height:35px;color:#0074da;background:#fff;display:inline-block;line-height:35px;font-size:16px;border-radius:100%;margin:0 5px}.copyright-area ul li a:hover{background:#0074da;color:#fff}.copyright-area ul{margin-bottom:30px}.copyright-area p{color:#fff}.copyright-area p a{color:#fff;border-bottom:1px solid #fff}.nav-icon{float:right}.header-text{float:right;margin-right:90px;font-weight:500;font-size:20px}.nav-link{padding:.5rem!important;transition:250ms}.nav-link:hover{transform:scale(1.05)}@media only screen and (max-width:767px){.header-text{float:none!important;margin-right:0}}.logo-text{font-size:25px;font-weight:400;padding-top:10px}"]
    })
], LandingComponent);

class Environment {
}
Environment.PRODUCTION_HOST = 'acm-microservice-prod';
Environment.DEVELOPMENT_HOST = 'acm-microservice-dev';
Environment.LOCAL_HOST = 'localhost:8080';
Environment.HEROKU_URI = 'herokuapp.com';
Environment.PRODUCTION_PATH = 'acm-web';
Environment.DEVELOPMENT_PATH = 'acm-ui-dev';
Environment.LOCAL_PATH = 'localhost:4200';
Environment.SOCKET_ENDPOINT = '/api/web-notification-app/websocket';

/**
 * URL Service
 *
 * @author Sam Butler
 * @since Dec 15, 2020
 */
let UrlService = class UrlService {
    constructor() {
        this.urlPath = window.location.href;
    }
    /**
     * Get's the host environment
     *
     * @returns string of the host path
     */
    getHost() {
        if (this.urlPath.includes(Environment.PRODUCTION_PATH)) {
            return Environment.PRODUCTION_HOST;
        }
        else if (this.urlPath.includes(Environment.DEVELOPMENT_PATH)) {
            return Environment.DEVELOPMENT_HOST;
        }
        return Environment.LOCAL_HOST;
    }
    /**
     * Get's the web path of the url
     *
     * @returns string of the web path
     */
    getPath() {
        if (this.urlPath.includes(Environment.PRODUCTION_PATH)) {
            return Environment.PRODUCTION_PATH;
        }
        else if (this.urlPath.includes(Environment.DEVELOPMENT_PATH)) {
            return Environment.DEVELOPMENT_PATH;
        }
        return Environment.LOCAL_PATH;
    }
    /**
     * Get's the full web URL
     *
     * @returns string of the full web url
     */
    getWebUrl() {
        if (this.isHttps()) {
            return `https://${this.getPath()}.${Environment.HEROKU_URI}`;
        }
        else if (this.isLocal()) {
            return `http://${this.getPath()}`;
        }
        return `http://${this.getPath()}.${Environment.HEROKU_URI}`;
    }
    /**
     * Get's the full API URL
     *
     * @returns string of the full API url
     */
    getAPIUrl() {
        if (this.isHttps()) {
            return `https://${this.getHost()}.${Environment.HEROKU_URI}`;
        }
        else if (this.isLocal()) {
            return `http://${this.getHost()}`;
        }
        return `http://${this.getHost()}.${Environment.HEROKU_URI}`;
    }
    /**
     * Get's the socket environment
     *
     * @returns string of the socket path
     */
    getSocketPath() {
        const socketType = this.isHttps() ? 'wss://' : 'ws://';
        if (this.isLocal()) {
            return `${socketType}${this.getHost()}${Environment.SOCKET_ENDPOINT}`;
        }
        return `${socketType}${this.getHost()}.${Environment.HEROKU_URI}${Environment.SOCKET_ENDPOINT}`;
    }
    /**
     * Determines if the url is https or http
     *
     * @returns boolean of logical comparison
     */
    isHttps() {
        return this.urlPath.includes('https');
    }
    /**
     * Determines if the url is local
     *
     * @returns boolean of logical comparison
     */
    isLocal() {
        return this.urlPath.includes('localhost');
    }
};
UrlService = __decorate([
    Injectable()
], UrlService);

/**
 * Auth service class that deals with authorizing a user
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
let AuthService = class AuthService {
    constructor(http, urlService) {
        this.http = http;
        this.urlService = urlService;
    }
    /**
     * Logs a user in and generates a JWT token for that user
     *
     * @param username - username of the user
     * @param password - password for the user
     */
    authenticate(username, password) {
        this.http
            .post(`${this.urlService.getAPIUrl}/authenticate`, { username, password })
            .subscribe((response) => console.log(response.token));
    }
};
AuthService.ctorParameters = () => [
    { type: HttpClient },
    { type: UrlService }
];
AuthService = __decorate([
    Injectable()
], AuthService);

/**
 * User Service class that deal with the user microservice
 *
 * @author Sam Butler
 * @since August 31, 2020
 */
let UserService = class UserService {
    constructor(http, urlService) {
        this.http = http;
        this.urlService = urlService;
    }
    /**
     * Method to create a new user given a User object
     *
     * @param newUser - The new user to be created
     */
    createUser(newUser) {
        this.http
            .post(`${this.urlService.getAPIUrl()}/api/acm/users`, newUser)
            .subscribe((r) => console.log(r));
    }
};
UserService.ctorParameters = () => [
    { type: HttpClient },
    { type: UrlService }
];
UserService = __decorate([
    Injectable()
], UserService);

let LoginCardComponent = class LoginCardComponent {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
        this.twitterLink = '';
        this.twitterIcon = 'https://cdn4.iconfinder.com/data/icons/miu-hexagon-flat-social/60/twitter-hexagon-social-media-32.png';
        this.githubLink = 'https://github.com/cse-uprc';
        this.githubIcon = 'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_six_gray-256.png';
        this.facebookLink = '';
        this.facebookIcon = 'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/Untitled-16-32.png';
    }
    onSignIn(username, password) {
        this.authService.authenticate(username, password);
    }
    onSignUp(firstName, lastName, email) {
        const newUser = {
            firstName,
            lastName,
            email,
        };
        this.userService.createUser(newUser);
    }
};
LoginCardComponent.ctorParameters = () => [
    { type: AuthService },
    { type: UserService }
];
LoginCardComponent = __decorate([
    Component({
        selector: 'ak-login-card',
        template: "<div class=\"placeholder-padding login-container\">\r\n  <div class=\"login-wrap\">\r\n    <div class=\"login-html\">\r\n      <input id=\"tab-1\" type=\"radio\" name=\"tab\" class=\"sign-in\" checked />\r\n      <label for=\"tab-1\" class=\"tab\">Sign In</label>\r\n\r\n      <input id=\"tab-2\" type=\"radio\" name=\"tab\" class=\"sign-up\" />\r\n      <label for=\"tab-2\" class=\"tab\">Sign Up</label>\r\n      <div class=\"login-form\">\r\n        <div class=\"sign-in-htm\">\r\n          <div class=\"group\">\r\n            <label for=\"user\" class=\"label\">Username</label>\r\n            <input #username type=\"text\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label for=\"pass\" class=\"label\">Password</label>\r\n            <input #pass type=\"password\" class=\"input\" data-type=\"password\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label class=\"forgot\">Forgot Password?</label>\r\n          </div>\r\n          <div class=\"group\">\r\n            <input\r\n              (click)=\"onSignIn(username.value, pass.value)\"\r\n              type=\"submit\"\r\n              class=\"button\"\r\n              value=\"Sign In\"\r\n            />\r\n          </div>\r\n          <div class=\"hr\"></div>\r\n          <div class=\"social\">\r\n            <div class=\"inline-block\">\r\n              <a [href]=\"twitterLink\" class=\"target-pointer\" target=\"_blank\">\r\n                <img class=\"social-icon\" [src]=\"twitterIcon\" />\r\n              </a>\r\n              <div class=\"social-text\">Twitter</div>\r\n            </div>\r\n\r\n            <div class=\"inline-block\">\r\n              <a [href]=\"githubLink\" class=\"target-pointer\" target=\"_blank\">\r\n                <img class=\"social-icon\" [src]=\"githubIcon\" />\r\n              </a>\r\n              <div class=\"social-text\">Github</div>\r\n            </div>\r\n            <div class=\"inline-block\">\r\n              <a [href]=\"facebookLink\" class=\"target-pointer\" target=\"_blank\">\r\n                <img class=\"social-icon\" [src]=\"facebookIcon\" />\r\n              </a>\r\n              <div class=\"social-text\">Facebook</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"sign-up-htm\">\r\n          <div class=\"group\">\r\n            <label for=\"user\" class=\"label\">First Name</label>\r\n            <input #first type=\"text\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label for=\"pass\" class=\"label\">Last Name</label>\r\n            <input #last type=\"text\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label for=\"pass\" class=\"label\">Email Address</label>\r\n            <input #email type=\"email\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <input\r\n              type=\"submit\"\r\n              class=\"button\"\r\n              value=\"Sign Up\"\r\n              (click)=\"onSignUp(first.value, last.value, email.value)\"\r\n            />\r\n          </div>\r\n          <div class=\"hr\"></div>\r\n          <div class=\"foot-lnk\">\r\n            <label class=\"target-pointer\" for=\"tab-1\">Already Member?</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
        styles: [".login-container{margin:0;color:#6a6f8c;font:600 16px/18px \"Open Sans\",sans-serif}.clearfix:after,.clearfix:before{content:\"\";display:table}.clearfix:after{clear:both;display:block}.login-wrap{width:100%;margin:auto;max-width:525px;min-height:670px;position:relative;background:url(https://raw.githubusercontent.com/khadkamhn/day-01-login-form/master/img/bg.jpg) center no-repeat;box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)}.login-html{width:100%;height:100%;position:absolute;padding:90px 70px 50px;background:rgba(40,57,101,.9)}.login-html .sign-in-htm,.login-html .sign-up-htm{top:0;left:0;right:0;bottom:0;position:absolute;transform:rotateY(180deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:.4s linear}.login-form .group .check,.login-html .sign-in,.login-html .sign-up{display:none}.login-form .group .button,.login-form .group .label,.login-html .tab{text-transform:uppercase}.login-html .tab{cursor:pointer;font-size:22px;padding-bottom:5px;margin:0 15px 10px 0;display:inline-block;border-bottom:2px solid transparent}.login-html .sign-in:checked+.tab,.login-html .sign-up:checked+.tab{color:#fff;border-color:#1161ee}.login-form{margin-top:20px;min-height:345px;position:relative;perspective:1000px;transform-style:preserve-3d}.login-form .group{margin-bottom:15px}.login-form .group .button,.login-form .group .input,.login-form .group .label{width:100%;color:#fff;display:block}.login-form .group .button,.login-form .group .input{border:none;padding:15px 20px;border-radius:25px;background:rgba(255,255,255,.1)}.login-form .group input[data-type=password]{-webkit-text-security:circle}.login-form .group .label{color:#aaa;font-size:12px}.login-form .group .button{background:#1161ee}.login-form .group label .icon{width:15px;height:15px;border-radius:2px;position:relative;display:inline-block;background:rgba(255,255,255,.1)}.login-form .group label .icon:after,.login-form .group label .icon:before{content:\"\";width:10px;height:2px;background:#fff;position:absolute;transition:.2s ease-in-out}.login-form .group label .icon:before{left:3px;width:5px;bottom:6px;transform:scale(0) rotate(0)}.login-form .group label .icon:after{top:6px;right:0;transform:scale(0) rotate(0)}.login-form .group .check:checked+label{color:#fff}.login-form .group .check:checked+label .icon{background:#1161ee}.login-form .group .check:checked+label .icon:before{transform:scale(1) rotate(45deg)}.login-form .group .check:checked+label .icon:after{transform:scale(1) rotate(-45deg)}.login-html .sign-in:checked+.tab+.sign-up+.tab+.login-form .sign-in-htm,.login-html .sign-up:checked+.tab+.login-form .sign-up-htm{transform:rotate(0)}.hr{height:2px;margin:30px 0;background:rgba(255,255,255,.2)}.foot-lnk{text-align:center;cursor:pointer;color:#fff}.forgot{cursor:pointer;transition:.2s ease-in}.forgot:hover{color:#fff}.social{text-align:center}.social-icon{width:50px;margin:0 15px;transition:transform .1s}.social-icon:hover{transform:scale(1.5)}.social-text{margin:10px}.placeholder-padding{padding:100px 0}"]
    })
], LoginCardComponent);

let NavbarComponent = class NavbarComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.title = '';
    }
};
NavbarComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
__decorate([
    Input()
], NavbarComponent.prototype, "title", void 0);
NavbarComponent = __decorate([
    Component({
        selector: 'ak-navbar',
        template: "<ng-container>\r\n  <div class=\"nav acm-nav\">\r\n    <div class=\"header-container\">\r\n      <div class=\"logo-container\">\r\n        <a href=\"#home\">{{ title }}</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"header-container\">\r\n      <ak-icon-bell></ak-icon-bell>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n",
        styles: ["body{background-color:#edf1f7}.nav{display:flex;justify-content:space-between;max-width:1920px;margin-left:auto;margin-right:auto;width:100%}.acm-nav{background-color:#fff;box-shadow:0 .5rem 1rem 0 rgba(44,51,73,.1);overflow:hidden;padding:1.25rem;height:4.75rem;position:fixed;top:0;left:0;right:0;z-index:1040}.acm-nav a{color:#222b45;text-align:center;padding:0 20px;text-decoration:none;font-size:28px}.header-container,.logo-container{display:flex;align-items:center;width:auto}"]
    })
], NavbarComponent);

let SiderbarComponent = class SiderbarComponent {
    constructor() {
        this.items = [
            { name: 'Dashboard', icon: 'house' },
            { name: 'Classroom', icon: 'house' },
            { name: 'Resources', icon: 'house' },
            { name: 'Teachers', icon: 'house' },
            { name: 'Student Advisors', icon: 'house' },
            { name: 'Video Lectures', icon: 'house' },
            { name: 'Calendar Events', icon: 'house' },
            { name: 'Event Sign Up', icon: 'house' },
            { name: 'ACM Information', icon: 'house' },
            { name: 'Bot Service Info', icon: 'house' },
            { name: 'About Us', icon: 'house' },
            { name: 'Contact Services', icon: 'house' },
        ];
    }
};
__decorate([
    Input()
], SiderbarComponent.prototype, "items", void 0);
SiderbarComponent = __decorate([
    Component({
        selector: 'ak-sidebar',
        template: "<ul class=\"menu-items\">\r\n  <li class=\"menu-item\" *ngFor=\"let item of items\">\r\n    <a>\r\n      <ak-icon [icon]=\"item.icon\" class=\"icon\"></ak-icon>\r\n      <span class=\"title\" for=\"id1\">{{ item.name }}</span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n",
        styles: ["li{border-bottom:1px solid #edf1f7}.menu-items{color:#222b45;top:0;left:0;bottom:0;width:12%;height:100%;min-width:250px;z-index:0;font-weight:400;margin:0;padding:0;position:relative;background:#fff;box-shadow:.5rem .5rem 1rem 0 rgba(44,51,73,.1);font-family:Arial,\"Helvetica Neue\",Helvetica,sans-serif}.menu-item{font-family:Open Sans,sans-serif;font-size:1rem;font-weight:600;line-height:1.5rem;list-style:none;padding:1.25rem 1rem;cursor:pointer;transition:.4s}.menu-item a .title{flex:1 0 auto;vertical-align:text-top}.menu-item a .icon{color:#8f9bb3;margin:0 .5rem 0 0}.menu-item:hover{color:#36f}"]
    })
], SiderbarComponent);

const TOKEN_NAME = 'token';
/**
 * JWT class to handle all the modifications of a users jwt token
 * and handling the storing and retrieval of the token.
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
let JwtService = class JwtService {
    constructor(router) {
        this.router = router;
    }
    /**
     * Get the current cached token
     *
     * @return String value of the token
     */
    getToken() {
        return localStorage.getItem(TOKEN_NAME);
    }
    /**
     * Sets the jwt token for the current active user
     *
     * @param token - the token to store in the local cache
     */
    setToken(token) {
        localStorage.setItem(TOKEN_NAME, token);
    }
    /**
     * Get the expiration date of the currently stored token
     *
     * @return Tokens expiration date
     */
    getTokenExpirationDate() {
        const exp = this.getDecodedToken().exp;
        if (exp === undefined) {
            return null;
        }
        const date = new Date(0);
        date.setUTCSeconds(exp);
        return date;
    }
    /**
     * Checks to see if the users token is expired
     *
     * @return Boolean indicating if the token is expired
     */
    isTokenExpired() {
        const date = this.getTokenExpirationDate();
        if (date === undefined) {
            return false;
        }
        return !(date.valueOf() > new Date().valueOf());
    }
    /**
     * Confirms that the users token is valid
     *
     * @return Boolean saying if the token is valid or not
     */
    isValidToken() {
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
    }
    /**
     * Gets the decoded token object
     *
     * @return Object of the decoded token
     */
    getDecodedToken() {
        return jwt_decode(this.getToken());
    }
    /**
     * Get method to get a certain field from the users token
     *
     * @param field - The field we want to get from the token
     * @return the object the field contains
     */
    get(field) {
        const decoded = jwt_decode(this.getToken());
        return decoded[field];
    }
    /**
     * Checks to see if the user is logged in
     *
     * @return A boolean value indicating that status of the user
     */
    isUserLoggedIn() {
        return localStorage.getItem(TOKEN_NAME) !== null;
    }
    /**
     * Logs the user out and deletes their token from the local cache
     */
    logout() {
        localStorage.removeItem(TOKEN_NAME);
        this.router.navigate(['login']);
    }
};
JwtService.ctorParameters = () => [
    { type: Router }
];
JwtService = __decorate([
    Injectable()
], JwtService);

const defaultStompConfig = {
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
let StompUrlService = class StompUrlService {
    constructor(urlService) {
        this.urlService = urlService;
    }
    /**
     * Builds the broker URL.
     * @param subdomain The subdomain.
     */
    buildBrokerUrl() {
        return this.urlService.getSocketPath();
    }
};
StompUrlService.ctorParameters = () => [
    { type: UrlService }
];
StompUrlService = __decorate([
    Injectable()
], StompUrlService);
/**
 * A factory for creating an InjectableRxStompConfig for use with Insite notifications.
 * @param stompUrlService The STOMP URL service
 */
const stompConfigFactory = (stompUrlService) => {
    return Object.assign(Object.assign({}, defaultStompConfig), { brokerURL: stompUrlService.buildBrokerUrl() });
};

/**
 * Stomp Service
 *
 * @author Sam Butler
 * @since August 31, 2020
 */
let StompWebsocketService = class StompWebsocketService extends RxStompService {
    constructor() {
        super();
        this.isActivated = false;
    }
    /**
     * Initiate the connection with the broker.
     * If the connection breaks, as per reconnectDelay,it will keep trying to reconnect.
     */
    activate() {
        if (!this.isActivated) {
            this.isActivated = true;
            super.activate();
        }
    }
    /**
     * Disconnect if connected and stop auto reconnect loop.
     * Appropriate callbacks will be invoked if underlying STOMP connection was connected.
     *
     * To reactivate you can call activate.
     */
    deactivate() {
        this.isActivated = false;
        super.deactivate();
    }
    watch(destination) {
        return super.watch(destination).pipe(map((message) => this.parse(message)));
    }
    /**
     * Parses an IMessage into an StompMessage.
     * @param message The message to parse
     */
    parse(message) {
        const instance = message.body ? JSON.parse(message.body) : null;
        return Object.assign(Object.assign({}, message), { data: instance });
    }
};
StompWebsocketService = __decorate([
    Injectable()
], StompWebsocketService);
/**
 * Factory to create an setup the StompWebsocketService.
 * @param authService The AuthService
 */
const stompWebsocketServiceFactory = (stompConfig) => {
    const service = new StompWebsocketService();
    service.configure(stompConfig);
    return service;
};

const ɵ0 = stompWebsocketServiceFactory, ɵ1 = stompConfigFactory;
let StompWebsocketModule = class StompWebsocketModule {
};
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

let ServicesModule = class ServicesModule {
};
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

let AcmkitLibModule = class AcmkitLibModule {
};
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

let AcmkitLibService = class AcmkitLibService {
    constructor() { }
};
AcmkitLibService.ɵprov = ɵɵdefineInjectable({ factory: function AcmkitLibService_Factory() { return new AcmkitLibService(); }, token: AcmkitLibService, providedIn: "root" });
AcmkitLibService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AcmkitLibService);

class AbstractTestBed {
    static useProvider(moduleMetaData, provider) {
        const index = moduleMetaData.providers.findIndex((p) => p.provide === provider || p.provide === provider.provide);
        if (index >= 0) {
            moduleMetaData.providers.splice(index, 1);
        }
        moduleMetaData.providers.push(provider);
    }
    static setup(updateModuleMetaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const moduleMetaData = this.getModuleMetaData();
            if (updateModuleMetaData) {
                updateModuleMetaData(moduleMetaData);
            }
            TestBed.configureTestingModule(moduleMetaData);
        });
    }
    static getModuleMetaData() {
        return null;
    }
}

class AcmKitTestBed extends AbstractTestBed {
    static getModuleMetaData() {
        return {
            imports: [
                RouterTestingModule,
                CommonModule,
                HttpClientTestingModule,
                AcmkitLibModule,
            ],
            declarations: [],
        };
    }
}

const setupTests = (initTest) => configureTestSuite(() => initTest());

/**
 * Public API Surface of acmkit-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AbstractTestBed, AcmKitTestBed, AcmkitLibComponent, AcmkitLibModule, AcmkitLibService, AuthService, BasePageComponent, BellIconComponent, CardComponent, IconsModule, JwtService, LandingComponent, LoginCardComponent, NavbarComponent, ParticlesService, ServicesModule, SiderbarComponent, StompUrlService, StompWebsocketModule, StompWebsocketService, TOKEN_NAME, defaultStompConfig, setupTests, stompConfigFactory, stompWebsocketServiceFactory, ɵ0, ɵ1, UrlService as ɵa, UserService as ɵb, HouseIconComponent as ɵc, IconComponent as ɵd };
//# sourceMappingURL=acmkit-lib.js.map
