import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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
        template: "<div class=\"card\" [ngClass]=\"{ 'card-padding': !title }\">\r\n  <div *ngIf=\"title\" class=\"header\">\r\n    <div class=\"title\">{{ title }}</div>\r\n    <div *ngIf=\"editRoute\" class=\"edit-icon\"></div>\r\n  </div>\r\n  <div class=\"content-padding\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n"
    })
], CardComponent);
export { CardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTXpDLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFHeEIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFEekIsY0FBUyxHQUFHLEdBQUcsQ0FBQztJQUNZLENBQUM7SUFFdEMsUUFBUSxLQUFVLENBQUM7SUFFbkIsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNGLENBQUE7O1lBUDZCLE1BQU07O0FBRnpCO0lBQVIsS0FBSyxFQUFFOzRDQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7Z0RBQWlCO0FBRmQsYUFBYTtJQUp6QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsU0FBUztRQUNuQiwwVUFBb0M7S0FDckMsQ0FBQztHQUNXLGFBQWEsQ0FVekI7U0FWWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FrLWNhcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZWRpdFJvdXRlID0gJy8nO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgb25FZGl0Q2xpY2soKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5lZGl0Um91dGVdKTtcclxuICB9XHJcbn1cclxuIl19