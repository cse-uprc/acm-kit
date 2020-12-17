import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var ACMNavbarComponent = /** @class */ (function () {
    function ACMNavbarComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.title = '';
    }
    ACMNavbarComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    __decorate([
        Input()
    ], ACMNavbarComponent.prototype, "title", void 0);
    ACMNavbarComponent = __decorate([
        Component({
            selector: 'ak-navbar',
            template: "<ng-container>\r\n  <div class=\"nav acm-nav\">\r\n    <div class=\"header-container\">\r\n      <div class=\"logo-container\">\r\n        <a href=\"#home\">{{ title }}</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"header-container\">\r\n      <ak-icon-bell></ak-icon-bell>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n"
        })
    ], ACMNavbarComponent);
    return ACMNavbarComponent;
}());
export { ACMNavbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNtLW5hdmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbmF2YmFyL2FjbS1uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFNekQ7SUFFRSw0QkFBc0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQURwQyxVQUFLLEdBQUcsRUFBRSxDQUFDO0lBQzRCLENBQUM7O2dCQUFoQixZQUFZOztJQURwQztRQUFSLEtBQUssRUFBRTtxREFBWTtJQURULGtCQUFrQjtRQUo5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixzVkFBMEM7U0FDM0MsQ0FBQztPQUNXLGtCQUFrQixDQUc5QjtJQUFELHlCQUFDO0NBQUEsQUFIRCxJQUdDO1NBSFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWstbmF2YmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWNtLW5hdmJhci5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBQ01OYXZiYXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHRpdGxlID0gJyc7XHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxyXG59XHJcbiJdfQ==