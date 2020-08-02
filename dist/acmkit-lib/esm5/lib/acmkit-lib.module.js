import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AcmkitLibComponent } from './acmkit-lib.component';
import { BasePageComponent } from './components/base-page/base-page.component';
import { CardComponent } from './components/card/card.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
var AcmkitLibModule = /** @class */ (function () {
    function AcmkitLibModule() {
    }
    AcmkitLibModule = __decorate([
        NgModule({
            declarations: [AcmkitLibComponent, CardComponent, BasePageComponent, LoginCardComponent],
            imports: [BrowserModule, RouterModule],
            exports: [AcmkitLibComponent, CardComponent, BasePageComponent, LoginCardComponent],
            providers: [],
        })
    ], AcmkitLibModule);
    return AcmkitLibModule;
}());
export { AcmkitLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNta2l0LWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2FjbWtpdC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBUWxGO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixlQUFlO1FBTjNCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQztZQUN4RixPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDO1lBQ3RDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQztZQUNuRixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7T0FDVyxlQUFlLENBQUc7SUFBRCxzQkFBQztDQUFBLEFBQS9CLElBQStCO1NBQWxCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFjbWtpdExpYkNvbXBvbmVudCB9IGZyb20gJy4vYWNta2l0LWxpYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCYXNlUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9iYXNlLXBhZ2UvYmFzZS1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi1jYXJkL2xvZ2luLWNhcmQuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQWNta2l0TGliQ29tcG9uZW50LCBDYXJkQ29tcG9uZW50LCBCYXNlUGFnZUNvbXBvbmVudCwgTG9naW5DYXJkQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQnJvd3Nlck1vZHVsZSwgUm91dGVyTW9kdWxlXSxcclxuICBleHBvcnRzOiBbQWNta2l0TGliQ29tcG9uZW50LCBDYXJkQ29tcG9uZW50LCBCYXNlUGFnZUNvbXBvbmVudCwgTG9naW5DYXJkQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNta2l0TGliTW9kdWxlIHt9XHJcbiJdfQ==