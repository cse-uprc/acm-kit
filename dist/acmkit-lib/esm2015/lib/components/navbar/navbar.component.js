import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
        styles: ["body{background-color:#edf1f7}.nav{display:flex;justify-content:space-between;width:100%}.acm-nav{background-color:#fff;box-shadow:0 .5rem 1rem 0 rgba(44,51,73,.1);overflow:hidden;padding:1.25rem;height:4.75rem;position:fixed;top:0;left:0;right:0;z-index:1040}.acm-nav a{color:#222b45;text-align:center;padding:0 20px;text-decoration:none;font-size:28px}.header-container,.logo-container{display:flex;align-items:center;width:auto}"]
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FjbWtpdC1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBT3pELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFFMUIsWUFBc0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQURwQyxVQUFLLEdBQUcsRUFBRSxDQUFDO0lBQzRCLENBQUM7Q0FDbEQsQ0FBQTs7WUFEa0MsWUFBWTs7QUFEcEM7SUFBUixLQUFLLEVBQUU7OENBQVk7QUFEVCxlQUFlO0lBTDNCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLHNWQUFzQzs7S0FFdkMsQ0FBQztHQUNXLGVBQWUsQ0FHM0I7U0FIWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWstbmF2YmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9uYXZiYXIuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgdGl0bGUgPSAnJztcclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XHJcbn1cclxuIl19