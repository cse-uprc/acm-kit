import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
export { NavbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FjbWtpdC1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBT3pEO0lBRUUseUJBQXNCLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFEcEMsVUFBSyxHQUFHLEVBQUUsQ0FBQztJQUM0QixDQUFDOztnQkFBaEIsWUFBWTs7SUFEcEM7UUFBUixLQUFLLEVBQUU7a0RBQVk7SUFEVCxlQUFlO1FBTDNCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLHNWQUFzQzs7U0FFdkMsQ0FBQztPQUNXLGVBQWUsQ0FHM0I7SUFBRCxzQkFBQztDQUFBLEFBSEQsSUFHQztTQUhZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhay1uYXZiYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25hdmJhci5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cclxufVxyXG4iXX0=