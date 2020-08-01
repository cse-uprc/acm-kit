import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
function CardComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 6);
} }
function CardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CardComponent_div_1_div_3_Template, 1, 0, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.editRoute);
} }
var _c0 = function (a0) { return { "card-padding": a0 }; };
var _c1 = ["*"];
var CardComponent = /** @class */ (function () {
    function CardComponent(router) {
        this.router = router;
        this.editRoute = '/';
    }
    CardComponent.prototype.ngOnInit = function () { };
    CardComponent.prototype.onEditClick = function () {
        this.router.navigate([this.editRoute]);
    };
    CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(i0.ɵɵdirectiveInject(i1.Router)); };
    CardComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CardComponent, selectors: [["ak-card"]], inputs: { title: "title", editRoute: "editRoute" }, ngContentSelectors: _c1, decls: 4, vars: 4, consts: [[1, "card", 3, "ngClass"], ["class", "header", 4, "ngIf"], [1, "content-padding"], [1, "header"], [1, "title"], ["class", "edit-icon", 4, "ngIf"], [1, "edit-icon"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, CardComponent_div_1_Template, 4, 2, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, !ctx.title));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.title);
        } }, directives: [i2.NgClass, i2.NgIf], encapsulation: 2 });
    return CardComponent;
}());
export { CardComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CardComponent, [{
        type: Component,
        args: [{
                selector: 'ak-card',
                templateUrl: './card.component.html',
            }]
    }], function () { return [{ type: i1.Router }]; }, { title: [{
            type: Input
        }], editRoute: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNHckQseUJBQStDOzs7SUFGakQsOEJBQ0U7SUFBQSw4QkFBbUI7SUFBQSxZQUFXO0lBQUEsaUJBQU07SUFDcEMsb0VBQXlDO0lBQzNDLGlCQUFNOzs7SUFGZSxlQUFXO0lBQVgsa0NBQVc7SUFDekIsZUFBaUI7SUFBakIsdUNBQWlCOzs7O0FEQTFCO0lBT0UsdUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRHpCLGNBQVMsR0FBRyxHQUFHLENBQUM7SUFDWSxDQUFDO0lBRXRDLGdDQUFRLEdBQVIsY0FBa0IsQ0FBQztJQUVuQixtQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDOzhFQVRVLGFBQWE7c0RBQWIsYUFBYTs7WUNQMUIsOEJBQ0U7WUFBQSw4REFDRTtZQUdGLDhCQUNFO1lBQUEsa0JBQVk7WUFDZCxpQkFBTTtZQUNSLGlCQUFNOztZQVJZLGdFQUFzQztZQUNqRCxlQUFhO1lBQWIsZ0NBQWE7O3dCRERwQjtDQWlCQyxBQWRELElBY0M7U0FWWSxhQUFhO2tEQUFiLGFBQWE7Y0FKekIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixXQUFXLEVBQUUsdUJBQXVCO2FBQ3JDOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FrLWNhcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZWRpdFJvdXRlID0gJy8nO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgb25FZGl0Q2xpY2soKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5lZGl0Um91dGVdKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImNhcmRcIiBbbmdDbGFzc109XCJ7ICdjYXJkLXBhZGRpbmcnOiAhdGl0bGUgfVwiPlxyXG4gIDxkaXYgKm5nSWY9XCJ0aXRsZVwiIGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj57eyB0aXRsZSB9fTwvZGl2PlxyXG4gICAgPGRpdiAqbmdJZj1cImVkaXRSb3V0ZVwiIGNsYXNzPVwiZWRpdC1pY29uXCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQtcGFkZGluZ1wiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19