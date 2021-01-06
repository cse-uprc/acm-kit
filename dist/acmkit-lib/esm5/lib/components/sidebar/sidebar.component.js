import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
var SiderbarComponent = /** @class */ (function () {
    function SiderbarComponent(router) {
        this.router = router;
    }
    SiderbarComponent.prototype.route = function (item) {
        this.router.navigate([item.link]);
    };
    SiderbarComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
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
    return SiderbarComponent;
}());
export { SiderbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUXpDO0lBRUUsMkJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUV0QyxpQ0FBSyxHQUFMLFVBQU0sSUFBaUI7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDOztnQkFKMkIsTUFBTTs7SUFEekI7UUFBUixLQUFLLEVBQUU7b0RBQXNCO0lBRG5CLGlCQUFpQjtRQUw3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0Qix5YkFBdUM7O1NBRXhDLENBQUM7T0FDVyxpQkFBaUIsQ0FPN0I7SUFBRCx3QkFBQztDQUFBLEFBUEQsSUFPQztTQVBZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2lkZWJhckl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvc2lkZWJhci1pdGVtLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWstc2lkZWJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGViYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZGViYXIuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGVyYmFyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBpdGVtczogU2lkZWJhckl0ZW1bXTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG5cclxuICByb3V0ZShpdGVtOiBTaWRlYmFySXRlbSkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2l0ZW0ubGlua10pO1xyXG4gIH1cclxufVxyXG4iXX0=