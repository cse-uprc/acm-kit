import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let IconComponent = class IconComponent {
    constructor() {
        this.icon = '';
    }
};
__decorate([
    Input()
], IconComponent.prototype, "icon", void 0);
IconComponent = __decorate([
    Component({
        selector: 'ak-icon',
        template: "<ak-icon-house *ngIf=\"icon\"></ak-icon-house>\r\n<ak-icon-bell *ngIf=\"icon === 'bell'\"></ak-icon-bell>\r\n"
    })
], IconComponent);
export { IconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2Fzc2V0cy9pY29ucy9pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNakQsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUd4QjtRQUZTLFNBQUksR0FBRyxFQUFFLENBQUM7SUFFSixDQUFDO0NBQ2pCLENBQUE7QUFIVTtJQUFSLEtBQUssRUFBRTsyQ0FBVztBQURSLGFBQWE7SUFKekIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFNBQVM7UUFDbkIseUhBQW9DO0tBQ3JDLENBQUM7R0FDVyxhQUFhLENBSXpCO1NBSlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWstaWNvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaWNvbiA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIl19