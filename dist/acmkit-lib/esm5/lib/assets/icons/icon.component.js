import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var IconComponent = /** @class */ (function () {
    function IconComponent() {
        this.icon = '';
    }
    __decorate([
        Input()
    ], IconComponent.prototype, "icon", void 0);
    IconComponent = __decorate([
        Component({
            selector: 'ak-icon',
            template: "<ak-icon-house *ngIf=\"icon\"></ak-icon-house>\r\n<ak-icon-bell *ngIf=\"icon === 'bell'\"></ak-icon-bell>\r\n"
        })
    ], IconComponent);
    return IconComponent;
}());
export { IconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2Fzc2V0cy9pY29ucy9pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNakQ7SUFHRTtRQUZTLFNBQUksR0FBRyxFQUFFLENBQUM7SUFFSixDQUFDO0lBRlA7UUFBUixLQUFLLEVBQUU7K0NBQVc7SUFEUixhQUFhO1FBSnpCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLHlIQUFvQztTQUNyQyxDQUFDO09BQ1csYUFBYSxDQUl6QjtJQUFELG9CQUFDO0NBQUEsQUFKRCxJQUlDO1NBSlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWstaWNvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaWNvbiA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIl19