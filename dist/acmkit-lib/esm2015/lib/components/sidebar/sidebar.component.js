import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
let SiderbarComponent = class SiderbarComponent {
    constructor(router) {
        this.router = router;
    }
    route(item) {
        this.router.navigate([item.link]);
    }
};
SiderbarComponent.ctorParameters = () => [
    { type: Router }
];
__decorate([
    Input()
], SiderbarComponent.prototype, "items", void 0);
SiderbarComponent = __decorate([
    Component({
        selector: 'ak-sidebar',
        template: "<ul class=\"menu-items scrollable\">\r\n  <li class=\"menu-item\" *ngFor=\"let item of items\" (click)=\"route(item)\">\r\n    <a>\r\n      <ak-icon [icon]=\"item.icon\" class=\"icon\"></ak-icon>\r\n      <span class=\"title\" for=\"id1\">{{ item.name }}</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"menu-item\">\r\n    <a>\r\n      <ak-icon></ak-icon>\r\n      <span class=\"title\"></span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n",
        styles: ["li{border-bottom:1px solid #edf1f7}.fixed{position:fixed}.scrollable::-webkit-scrollbar{display:none}.scrollable{-ms-overflow-style:none;scrollbar-width:none}.menu-items{overflow-y:scroll;color:#222b45;top:0;left:0;bottom:0;width:12%;height:100%;min-width:250px;z-index:0;font-weight:400;margin:4.75rem 0 0;padding:0;position:fixed;background:#fff;box-shadow:.5rem .5rem 1rem 0 rgba(44,51,73,.1);font-family:Arial,\"Helvetica Neue\",Helvetica,sans-serif}.menu-item{font-family:Open Sans,sans-serif;font-size:1rem;font-weight:600;line-height:1.5rem;list-style:none;padding:1.25rem 1rem;cursor:pointer;transition:.4s}.menu-item a .title{flex:1 0 auto;vertical-align:text-top}.menu-item a .icon{color:#8f9bb3;margin:0 .5rem 0 0}.menu-item:hover{color:#36f}"]
    })
], SiderbarComponent);
export { SiderbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUXpDLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBRTVCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUV0QyxLQUFLLENBQUMsSUFBaUI7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0YsQ0FBQTs7WUFMNkIsTUFBTTs7QUFEekI7SUFBUixLQUFLLEVBQUU7Z0RBQXNCO0FBRG5CLGlCQUFpQjtJQUw3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0Qix5YkFBdUM7O0tBRXhDLENBQUM7R0FDVyxpQkFBaUIsQ0FPN0I7U0FQWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFNpZGViYXJJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NpZGViYXItaXRlbS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FrLXNpZGViYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWRlYmFyLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlcmJhckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaXRlbXM6IFNpZGViYXJJdGVtW107XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cclxuXHJcbiAgcm91dGUoaXRlbTogU2lkZWJhckl0ZW0pIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtpdGVtLmxpbmtdKTtcclxuICB9XHJcbn1cclxuIl19