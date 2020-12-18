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
        template: "<div class=\"card\" [ngClass]=\"{ 'card-padding': !title }\">\r\n  <div *ngIf=\"title\" class=\"header\">\r\n    <div class=\"title\">{{ title }}</div>\r\n    <div *ngIf=\"editRoute\" class=\"edit-icon\"></div>\r\n  </div>\r\n  <div class=\"content-padding\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
        styles: [".card{width:100%;display:inline-block;height:auto;border-radius:8px;text-align:left;background:linear-gradient(to bottom,#fff 12%,#fffff5 100%);margin-bottom:15px}.header{display:inline-block;height:auto;width:100%;border-radius:8px 8px 0 0;background:#eeeff0;border-bottom:1px solid #d2d4d6;padding:10px 15px}.header .title{font-size:20px;font-weight:600;font-family:ColinSerifWeb-Bold,Georgia,\"Times New Roman\",Times,serif;color:#363b42;display:inline-block}.card-padding{padding:20px}.content-padding{padding:10px}"]
    })
], CardComponent);
export { CardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBT3pDLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFHeEIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFEekIsY0FBUyxHQUFHLEdBQUcsQ0FBQztJQUNZLENBQUM7SUFFdEMsUUFBUSxLQUFVLENBQUM7SUFFbkIsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNGLENBQUE7O1lBUDZCLE1BQU07O0FBRnpCO0lBQVIsS0FBSyxFQUFFOzRDQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7Z0RBQWlCO0FBRmQsYUFBYTtJQUx6QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsU0FBUztRQUNuQiwwVUFBb0M7O0tBRXJDLENBQUM7R0FDVyxhQUFhLENBVXpCO1NBVlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhay1jYXJkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBlZGl0Um91dGUgPSAnLyc7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7fVxyXG5cclxuICBvbkVkaXRDbGljaygpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmVkaXRSb3V0ZV0pO1xyXG4gIH1cclxufVxyXG4iXX0=