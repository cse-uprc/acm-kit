import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
var CardComponent = /** @class */ (function () {
    function CardComponent(router) {
        this.router = router;
        this.width = 'full';
        this.cardOpen = true;
    }
    CardComponent.prototype.ngOnInit = function () {
        document.getElementById('content').style.height =
            document.getElementById('content').scrollHeight + 'px';
    };
    CardComponent.prototype.toggleCollapse = function () {
        if (this.cardOpen) {
            this.closeCard();
        }
        else {
            this.openCard();
        }
    };
    CardComponent.prototype.closeCard = function () {
        this.cardOpen = false;
        document.getElementById('content').style.height = '0';
    };
    CardComponent.prototype.openCard = function () {
        this.cardOpen = true;
        document.getElementById('content').style.height =
            document.getElementById('content').scrollHeight + 'px';
    };
    CardComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
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
    return CardComponent;
}());
export { CardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBT3pDO0lBTUUsdUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSnpCLFVBQUssR0FBRyxNQUFNLENBQUM7UUFFeEIsYUFBUSxHQUFHLElBQUksQ0FBQztJQUVxQixDQUFDO0lBRXRDLGdDQUFRLEdBQVI7UUFDRSxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQzdDLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMzRCxDQUFDO0lBRUQsc0NBQWMsR0FBZDtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjtJQUNILENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUN4RCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDN0MsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzNELENBQUM7O2dCQXhCMkIsTUFBTTs7SUFMekI7UUFBUixLQUFLLEVBQUU7Z0RBQWU7SUFDZDtRQUFSLEtBQUssRUFBRTtnREFBZ0I7SUFGYixhQUFhO1FBTHpCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLHV2QkFBb0M7O1NBRXJDLENBQUM7T0FDVyxhQUFhLENBK0J6QjtJQUFELG9CQUFDO0NBQUEsQUEvQkQsSUErQkM7U0EvQlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhay1jYXJkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSB3aWR0aCA9ICdmdWxsJztcclxuXHJcbiAgY2FyZE9wZW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jykuc3R5bGUuaGVpZ2h0ID1cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQ29sbGFwc2UoKSB7XHJcbiAgICBpZiAodGhpcy5jYXJkT3Blbikge1xyXG4gICAgICB0aGlzLmNsb3NlQ2FyZCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vcGVuQ2FyZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2VDYXJkKCkge1xyXG4gICAgdGhpcy5jYXJkT3BlbiA9IGZhbHNlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgfVxyXG5cclxuICBvcGVuQ2FyZCgpIHtcclxuICAgIHRoaXMuY2FyZE9wZW4gPSB0cnVlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5zdHlsZS5oZWlnaHQgPVxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLnNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgfVxyXG59XHJcbiJdfQ==