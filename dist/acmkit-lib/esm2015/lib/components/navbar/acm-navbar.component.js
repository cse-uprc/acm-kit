import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
let ACMNavbarComponent = class ACMNavbarComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.title = '';
    }
};
ACMNavbarComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
__decorate([
    Input()
], ACMNavbarComponent.prototype, "title", void 0);
ACMNavbarComponent = __decorate([
    Component({
        selector: 'ak-navbar',
        template: "<ng-container>\r\n  <div class=\"nav acm-nav\">\r\n    <div class=\"header-container\">\r\n      <div class=\"logo-container\">\r\n        <a href=\"#home\">{{ title }}</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"header-container\">\r\n      <ak-icon-bell></ak-icon-bell>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n"
    })
], ACMNavbarComponent);
export { ACMNavbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNtLW5hdmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbmF2YmFyL2FjbS1uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFNekQsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFFN0IsWUFBc0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQURwQyxVQUFLLEdBQUcsRUFBRSxDQUFDO0lBQzRCLENBQUM7Q0FDbEQsQ0FBQTs7WUFEa0MsWUFBWTs7QUFEcEM7SUFBUixLQUFLLEVBQUU7aURBQVk7QUFEVCxrQkFBa0I7SUFKOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsc1ZBQTBDO0tBQzNDLENBQUM7R0FDVyxrQkFBa0IsQ0FHOUI7U0FIWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhay1uYXZiYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hY20tbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFDTU5hdmJhckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgdGl0bGUgPSAnJztcclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XHJcbn1cclxuIl19