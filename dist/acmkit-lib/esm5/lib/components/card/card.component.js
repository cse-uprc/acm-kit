import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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
            template: "<div class=\"card column-half\" [ngClass]=\"{ 'card-padding': !title }\">\r\n  <div *ngIf=\"title\" class=\"header\">\r\n    <div class=\"title\">{{ title }}</div>\r\n    <div *ngIf=\"editRoute\" class=\"edit-icon\"></div>\r\n  </div>\r\n  <div class=\"content-padding\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
            styles: [".card{width:100%;display:inline-block;height:auto;border-radius:8px;text-align:left;background:linear-gradient(to bottom,#fff 12%,#fffff5 100%);margin-bottom:15px}.header{display:inline-block;height:auto;width:100%;border-radius:8px 8px 0 0;background:#eeeff0;border-bottom:1px solid #d2d4d6;padding:10px 15px}.header .title{font-size:20px;font-weight:600;font-family:ColinSerifWeb-Bold,Georgia,\"Times New Roman\",Times,serif;color:#363b42;display:inline-block}.card-padding{padding:20px}.content-padding{padding:10px}"]
        })
    ], CardComponent);
    return CardComponent;
}());
export { CardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBT3pDO0lBR0UsdUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRHpCLGNBQVMsR0FBRyxHQUFHLENBQUM7SUFDWSxDQUFDO0lBRXRDLGdDQUFRLEdBQVIsY0FBa0IsQ0FBQztJQUVuQixtQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDOztnQkFOMkIsTUFBTTs7SUFGekI7UUFBUixLQUFLLEVBQUU7Z0RBQWU7SUFDZDtRQUFSLEtBQUssRUFBRTtvREFBaUI7SUFGZCxhQUFhO1FBTHpCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLHNWQUFvQzs7U0FFckMsQ0FBQztPQUNXLGFBQWEsQ0FVekI7SUFBRCxvQkFBQztDQUFBLEFBVkQsSUFVQztTQVZZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWstY2FyZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NhcmQuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZWRpdFJvdXRlID0gJy8nO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgb25FZGl0Q2xpY2soKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5lZGl0Um91dGVdKTtcclxuICB9XHJcbn1cclxuIl19