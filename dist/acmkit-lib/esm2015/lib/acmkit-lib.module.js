import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AcmkitLibComponent } from './acmkit-lib.component';
import { BasePageComponent } from './components/base-page/base-page.component';
import { CardComponent } from './components/card/card.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
let AcmkitLibModule = class AcmkitLibModule {
};
AcmkitLibModule = __decorate([
    NgModule({
        declarations: [
            AcmkitLibComponent,
            CardComponent,
            BasePageComponent,
            LoginCardComponent,
            LandingComponent,
        ],
        imports: [BrowserModule, RouterModule, BrowserAnimationsModule],
        exports: [
            AcmkitLibComponent,
            CardComponent,
            BasePageComponent,
            LoginCardComponent,
            LandingComponent,
        ],
        providers: [],
    })
], AcmkitLibModule);
export { AcmkitLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNta2l0LWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2FjbWtpdC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBb0JsRixJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0NBQUcsQ0FBQTtBQUFsQixlQUFlO0lBbEIzQixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWixrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIsZ0JBQWdCO1NBQ2pCO1FBQ0QsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsQ0FBQztRQUMvRCxPQUFPLEVBQUU7WUFDUCxrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIsZ0JBQWdCO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFLEVBQUU7S0FDZCxDQUFDO0dBQ1csZUFBZSxDQUFHO1NBQWxCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQWNta2l0TGliQ29tcG9uZW50IH0gZnJvbSAnLi9hY21raXQtbGliLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJhc2VQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Jhc2UtcGFnZS9iYXNlLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGFuZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5DYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luLWNhcmQvbG9naW4tY2FyZC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFjbWtpdExpYkNvbXBvbmVudCxcclxuICAgIENhcmRDb21wb25lbnQsXHJcbiAgICBCYXNlUGFnZUNvbXBvbmVudCxcclxuICAgIExvZ2luQ2FyZENvbXBvbmVudCxcclxuICAgIExhbmRpbmdDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbQnJvd3Nlck1vZHVsZSwgUm91dGVyTW9kdWxlLCBCcm93c2VyQW5pbWF0aW9uc01vZHVsZV0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQWNta2l0TGliQ29tcG9uZW50LFxyXG4gICAgQ2FyZENvbXBvbmVudCxcclxuICAgIEJhc2VQYWdlQ29tcG9uZW50LFxyXG4gICAgTG9naW5DYXJkQ29tcG9uZW50LFxyXG4gICAgTGFuZGluZ0NvbXBvbmVudCxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY21raXRMaWJNb2R1bGUge31cclxuIl19