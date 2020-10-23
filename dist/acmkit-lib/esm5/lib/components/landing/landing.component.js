import { __decorate } from "tslib";
import { Component, HostListener, ViewChild, } from '@angular/core';
import { Router } from '@angular/router';
import { ParticlesService } from '../../services/particles/particles.service';
import { LandingParticleConfig } from '../../assets/particles/landing';
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
export { LandingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBQ1osU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQU12RTtJQVlFLDBCQUNVLE1BQWMsRUFDZCxlQUFpQztRQURqQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBUnBDLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLGVBQVUsR0FBVyxJQUFJLENBQUM7UUFDMUIsZ0JBQVcsR0FBVyxJQUFJLENBQUM7UUFDM0Isa0JBQWEsR0FBVyxJQUFJLENBQUM7UUFDN0IsZUFBVSxHQUFXLElBQUksQ0FBQztJQUs5QixDQUFDO0lBRUosbUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELDBDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUMzRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDbkUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUNuRSxDQUFDO0lBR0Qsd0NBQWEsR0FBYjtRQUNFLElBQUksTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7U0FDeEI7YUFBTSxJQUFJLE1BQU0sQ0FBQyxXQUFXLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFO1lBQ2pFLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxNQUFNLENBQUMsV0FBVyxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRTtZQUNsRSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDOztnQkE5QmlCLE1BQU07Z0JBQ0csZ0JBQWdCOztJQWJ4QjtRQUFsQixTQUFTLENBQUMsTUFBTSxDQUFDO3lEQUF5QjtJQUN2QjtRQUFuQixTQUFTLENBQUMsT0FBTyxDQUFDOzBEQUEwQjtJQUN2QjtRQUFyQixTQUFTLENBQUMsU0FBUyxDQUFDOzJEQUEyQjtJQUM3QjtRQUFsQixTQUFTLENBQUMsTUFBTSxDQUFDO3lEQUF5QjtJQXlCM0M7UUFEQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7eURBV3pDO0lBdkNVLGdCQUFnQjtRQUo1QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0Qiw0K1NBQXVDO1NBQ3hDLENBQUM7T0FDVyxnQkFBZ0IsQ0E0QzVCO0lBQUQsdUJBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQTVDWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIFZpZXdDaGlsZCxcclxuICBPbkluaXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBhcnRpY2xlc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wYXJ0aWNsZXMvcGFydGljbGVzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMYW5kaW5nUGFydGljbGVDb25maWcgfSBmcm9tICcuLi8uLi9hc3NldHMvcGFydGljbGVzL2xhbmRpbmcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhay1sYW5kaW5nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbGFuZGluZy5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYW5kaW5nQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKCdob21lJykgaG9tZUVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYWJvdXQnKSBhYm91dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmVhdHVyZScpIGZlYXR1cmVFbGVtZXQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgndGVhbScpIHRlYW1FbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBwdWJsaWMgY3VycmVudEFjdGl2ZSA9IDA7XHJcbiAgcHVibGljIGhvbWVPZmZzZXQ6IG51bWJlciA9IG51bGw7XHJcbiAgcHVibGljIGFib3V0T2Zmc2V0OiBudW1iZXIgPSBudWxsO1xyXG4gIHB1YmxpYyBmZWF0dXJlT2Zmc2V0OiBudW1iZXIgPSBudWxsO1xyXG4gIHB1YmxpYyB0ZWFtT2Zmc2V0OiBudW1iZXIgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHBhcnRpY2xlU2VydmljZTogUGFydGljbGVzU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnBhcnRpY2xlU2VydmljZS5pbml0KExhbmRpbmdQYXJ0aWNsZUNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmhvbWVPZmZzZXQgPSB0aGlzLmhvbWVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wO1xyXG4gICAgdGhpcy5hYm91dE9mZnNldCA9IHRoaXMuYWJvdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wIC0gNTAwO1xyXG4gICAgdGhpcy5mZWF0dXJlT2Zmc2V0ID0gdGhpcy5mZWF0dXJlRWxlbWV0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wIC0gNTAwO1xyXG4gICAgdGhpcy50ZWFtT2Zmc2V0ID0gdGhpcy50ZWFtRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCAtIDUwMDtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpzY3JvbGwnLCBbJyRldmVudCddKVxyXG4gIHNjcm9sbEhhbmRsZXIoKSB7XHJcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDwgNjI1KSB7XHJcbiAgICAgIHRoaXMuY3VycmVudEFjdGl2ZSA9IDA7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSA2MjUgJiYgd2luZG93LnBhZ2VZT2Zmc2V0IDwgMTIwMCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRBY3RpdmUgPSAxO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gMTIwMCAmJiB3aW5kb3cucGFnZVlPZmZzZXQgPCAxODAwKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudEFjdGl2ZSA9IDI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnRBY3RpdmUgPSAzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TaWduSW4oKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICB9XHJcbn1cclxuIl19