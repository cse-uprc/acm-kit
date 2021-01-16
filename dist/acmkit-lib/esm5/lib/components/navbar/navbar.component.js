import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.title = '';
        this.sidebarClicked = new EventEmitter();
    }
    NavbarComponent.prototype.toggleSidebar = function () {
        this.sidebarClicked.emit(true);
    };
    __decorate([
        Input()
    ], NavbarComponent.prototype, "title", void 0);
    __decorate([
        Output()
    ], NavbarComponent.prototype, "sidebarClicked", void 0);
    NavbarComponent = __decorate([
        Component({
            selector: 'ak-navbar',
            template: "<ng-container>\r\n  <div class=\"nav acm-nav\">\r\n    <div class=\"header-container\">\r\n      <ak-icon-hamburger\r\n        class=\"nav-icon\"\r\n        (click)=\"toggleSidebar()\"\r\n      ></ak-icon-hamburger>\r\n      <div class=\"logo-container\">\r\n        <a href=\"#home\">{{ title }}</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"header-container\">\r\n      <ak-icon-bell></ak-icon-bell>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n",
            styles: ["body{background-color:#edf1f7}.nav{display:flex;justify-content:space-between;max-width:1920px;margin-left:auto;margin-right:auto;width:100%}.nav-icon{color:#8f9bb3;cursor:pointer}.acm-nav{background-color:#fff;box-shadow:0 .5rem 1rem 0 rgba(44,51,73,.1);overflow:hidden;padding:1.25rem;height:4.75rem;position:fixed;top:0;left:0;right:0;z-index:1040}.acm-nav a{color:#222b45;text-align:center;padding:0 20px;text-decoration:none;font-size:28px}.header-container,.logo-container{display:flex;align-items:center;width:auto}@media only screen and (max-width:380px){.acm-nav a{font-size:25px}}"]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FjbWtpdC1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RTtJQUdFO1FBRlMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNWLG1CQUFjLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7SUFDL0QsQ0FBQztJQUVoQix1Q0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQU5RO1FBQVIsS0FBSyxFQUFFO2tEQUFZO0lBQ1Y7UUFBVCxNQUFNLEVBQUU7MkRBQXFFO0lBRm5FLGVBQWU7UUFMM0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsc2RBQXNDOztTQUV2QyxDQUFDO09BQ1csZUFBZSxDQVEzQjtJQUFELHNCQUFDO0NBQUEsQUFSRCxJQVFDO1NBUlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FrLW5hdmJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25hdmJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmF2YmFyLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZiYXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHRpdGxlID0gJyc7XHJcbiAgQE91dHB1dCgpIHNpZGViYXJDbGlja2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICB0b2dnbGVTaWRlYmFyKCkge1xyXG4gICAgdGhpcy5zaWRlYmFyQ2xpY2tlZC5lbWl0KHRydWUpO1xyXG4gIH1cclxufVxyXG4iXX0=