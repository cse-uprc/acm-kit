import { __decorate } from "tslib";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AcmkitLibComponent } from './acmkit-lib.component';
import { IconsModule } from './assets/icons/icons.module';
import { BasePageComponent } from './components/base-page/base-page.component';
import { CardComponent } from './components/card/card.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { ACMNavbarComponent } from './components/navbar/acm-navbar.component';
import { ServicesModule } from './services/services.module';
var AcmkitLibModule = /** @class */ (function () {
    function AcmkitLibModule() {
    }
    AcmkitLibModule = __decorate([
        NgModule({
            declarations: [
                AcmkitLibComponent,
                CardComponent,
                BasePageComponent,
                LoginCardComponent,
                LandingComponent,
                ACMNavbarComponent,
            ],
            imports: [
                BrowserModule,
                RouterModule,
                BrowserAnimationsModule,
                HttpClientModule,
                ServicesModule,
                IconsModule,
            ],
            exports: [
                AcmkitLibComponent,
                CardComponent,
                BasePageComponent,
                LoginCardComponent,
                LandingComponent,
                ACMNavbarComponent,
                ServicesModule,
                IconsModule,
            ],
        })
    ], AcmkitLibModule);
    return AcmkitLibModule;
}());
export { AcmkitLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNta2l0LWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2FjbWtpdC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUE4QjVEO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixlQUFlO1FBNUIzQixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osa0JBQWtCO2dCQUNsQixhQUFhO2dCQUNiLGlCQUFpQjtnQkFDakIsa0JBQWtCO2dCQUNsQixnQkFBZ0I7Z0JBQ2hCLGtCQUFrQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxhQUFhO2dCQUNiLFlBQVk7Z0JBQ1osdUJBQXVCO2dCQUN2QixnQkFBZ0I7Z0JBQ2hCLGNBQWM7Z0JBQ2QsV0FBVzthQUNaO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGtCQUFrQjtnQkFDbEIsYUFBYTtnQkFDYixpQkFBaUI7Z0JBQ2pCLGtCQUFrQjtnQkFDbEIsZ0JBQWdCO2dCQUNoQixrQkFBa0I7Z0JBQ2xCLGNBQWM7Z0JBQ2QsV0FBVzthQUNaO1NBQ0YsQ0FBQztPQUNXLGVBQWUsQ0FBRztJQUFELHNCQUFDO0NBQUEsQUFBL0IsSUFBK0I7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBY21raXRMaWJDb21wb25lbnQgfSBmcm9tICcuL2FjbWtpdC1saWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSWNvbnNNb2R1bGUgfSBmcm9tICcuL2Fzc2V0cy9pY29ucy9pY29ucy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBCYXNlUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9iYXNlLXBhZ2UvYmFzZS1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExhbmRpbmdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi1jYXJkL2xvZ2luLWNhcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQUNNTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdmJhci9hY20tbmF2YmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlcnZpY2VzTW9kdWxlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZXJ2aWNlcy5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFjbWtpdExpYkNvbXBvbmVudCxcclxuICAgIENhcmRDb21wb25lbnQsXHJcbiAgICBCYXNlUGFnZUNvbXBvbmVudCxcclxuICAgIExvZ2luQ2FyZENvbXBvbmVudCxcclxuICAgIExhbmRpbmdDb21wb25lbnQsXHJcbiAgICBBQ01OYXZiYXJDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgU2VydmljZXNNb2R1bGUsXHJcbiAgICBJY29uc01vZHVsZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEFjbWtpdExpYkNvbXBvbmVudCxcclxuICAgIENhcmRDb21wb25lbnQsXHJcbiAgICBCYXNlUGFnZUNvbXBvbmVudCxcclxuICAgIExvZ2luQ2FyZENvbXBvbmVudCxcclxuICAgIExhbmRpbmdDb21wb25lbnQsXHJcbiAgICBBQ01OYXZiYXJDb21wb25lbnQsXHJcbiAgICBTZXJ2aWNlc01vZHVsZSxcclxuICAgIEljb25zTW9kdWxlLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY21raXRMaWJNb2R1bGUge31cclxuIl19