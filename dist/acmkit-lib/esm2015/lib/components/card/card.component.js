import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
let CardComponent = class CardComponent {
    constructor(router) {
        this.router = router;
        this.width = 'full';
        this.cardOpen = true;
    }
    ngOnInit() {
        document.getElementById('content').style.height =
            document.getElementById('content').scrollHeight + 'px';
    }
    toggleCollapse() {
        if (this.cardOpen) {
            this.closeCard();
        }
        else {
            this.openCard();
        }
    }
    closeCard() {
        this.cardOpen = false;
        document.getElementById('content').style.height = '0';
    }
    openCard() {
        this.cardOpen = true;
        document.getElementById('content').style.height =
            document.getElementById('content').scrollHeight + 'px';
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
], CardComponent.prototype, "width", void 0);
CardComponent = __decorate([
    Component({
        selector: 'ak-card',
        template: "<div\r\n  class=\"card\"\r\n  [ngClass]=\"{\r\n    'card-padding': !title,\r\n    'column-quarter': width === 'quarter',\r\n    'column-narrow': width === 'narrow',\r\n    'column-half': width === 'half',\r\n    'column-wide': width === 'wide',\r\n    'column-full': width === 'full'\r\n  }\"\r\n>\r\n  <div id=\"header\" *ngIf=\"title\" class=\"header\" (click)=\"toggleCollapse()\">\r\n    <div class=\"title\">{{ title }}</div>\r\n    <div id=\"collapse-icon\" class=\"collapse-icon\">\r\n      <div *ngIf=\"!cardOpen\">+</div>\r\n      <div *ngIf=\"cardOpen\">-</div>\r\n    </div>\r\n  </div>\r\n  <div id=\"content\" class=\"content-container\">\r\n    <div class=\"content-padding\"><ng-content></ng-content></div>\r\n  </div>\r\n</div>\r\n",
        styles: [".card{display:inline-block;border-radius:8px;text-align:left;background:linear-gradient(to bottom,#fff 12%,#fffff5 100%);margin-bottom:15px}.header{display:inline-block;height:auto;width:100%;border-radius:8px 8px 0 0;background:#eeeff0;border-bottom:1px solid #d2d4d6;padding:10px 15px;cursor:pointer}.header .title{font-size:20px;font-weight:600;font-family:ColinSerifWeb-Bold,Georgia,\"Times New Roman\",Times,serif;color:#363b42;display:inline-block}.card-padding{padding:20px}.content-container{overflow:hidden;transition:.6s}.content-padding{padding:10px}.collapse-icon{font-weight:800;font-size:22px;float:right}"]
    })
], CardComponent);
export { CardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBT3pDLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFNeEIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKekIsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUV4QixhQUFRLEdBQUcsSUFBSSxDQUFDO0lBRXFCLENBQUM7SUFFdEMsUUFBUTtRQUNOLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDN0MsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzNELENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ3hELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUM3QyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDM0QsQ0FBQztDQUNGLENBQUE7O1lBekI2QixNQUFNOztBQUx6QjtJQUFSLEtBQUssRUFBRTs0Q0FBZTtBQUNkO0lBQVIsS0FBSyxFQUFFOzRDQUFnQjtBQUZiLGFBQWE7SUFMekIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFNBQVM7UUFDbkIsdXZCQUFvQzs7S0FFckMsQ0FBQztHQUNXLGFBQWEsQ0ErQnpCO1NBL0JZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWstY2FyZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NhcmQuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgd2lkdGggPSAnZnVsbCc7XHJcblxyXG4gIGNhcmRPcGVuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLnN0eWxlLmhlaWdodCA9XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jykuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuICB9XHJcblxyXG4gIHRvZ2dsZUNvbGxhcHNlKCkge1xyXG4gICAgaWYgKHRoaXMuY2FyZE9wZW4pIHtcclxuICAgICAgdGhpcy5jbG9zZUNhcmQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3BlbkNhcmQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlQ2FyZCgpIHtcclxuICAgIHRoaXMuY2FyZE9wZW4gPSBmYWxzZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jykuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gIH1cclxuXHJcbiAgb3BlbkNhcmQoKSB7XHJcbiAgICB0aGlzLmNhcmRPcGVuID0gdHJ1ZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jykuc3R5bGUuaGVpZ2h0ID1cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG4gIH1cclxufVxyXG4iXX0=