import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let SiderbarComponent = class SiderbarComponent {
    constructor() { }
};
__decorate([
    Input()
], SiderbarComponent.prototype, "items", void 0);
SiderbarComponent = __decorate([
    Component({
        selector: 'ak-sidebar',
        template: "<ul class=\"menu-items scrollable\">\r\n  <li class=\"menu-item\" *ngFor=\"let item of items\">\r\n    <a>\r\n      <ak-icon [icon]=\"item.icon\" class=\"icon\"></ak-icon>\r\n      <span class=\"title\" for=\"id1\">{{ item.name }}</span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n",
        styles: ["li{border-bottom:1px solid #edf1f7}.fixed{position:fixed}.scrollable::-webkit-scrollbar{display:none}.scrollable{-ms-overflow-style:none;scrollbar-width:none}.menu-items{overflow-y:scroll;color:#222b45;top:0;left:0;bottom:0;width:12%;height:100%;min-width:250px;z-index:0;font-weight:400;margin:4.75rem 0 0;padding:0;position:fixed;background:#fff;box-shadow:.5rem .5rem 1rem 0 rgba(44,51,73,.1);font-family:Arial,\"Helvetica Neue\",Helvetica,sans-serif}.menu-item{font-family:Open Sans,sans-serif;font-size:1rem;font-weight:600;line-height:1.5rem;list-style:none;padding:1.25rem 1rem;cursor:pointer;transition:.4s}.menu-item a .title{flex:1 0 auto;vertical-align:text-top}.menu-item a .icon{color:#8f9bb3;margin:0 .5rem 0 0}.menu-item:hover{color:#36f}"]
    })
], SiderbarComponent);
export { SiderbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFFNUIsZ0JBQWUsQ0FBQztDQUNqQixDQUFBO0FBRlU7SUFBUixLQUFLLEVBQUU7Z0RBQU87QUFESixpQkFBaUI7SUFMN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsNlJBQXVDOztLQUV4QyxDQUFDO0dBQ1csaUJBQWlCLENBRzdCO1NBSFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhay1zaWRlYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZWJhci5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZXJiYXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGl0ZW1zO1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iXX0=