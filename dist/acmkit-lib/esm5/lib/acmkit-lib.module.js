import { __decorate } from "tslib";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AcmkitLibComponent } from './acmkit-lib.component';
import { IconsModule } from './assets/icons/icons.module';
import { BasePageComponent } from './components/base-page/base-page.component';
import { CardComponent } from './components/card/card.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SiderbarComponent } from './components/sidebar/sidebar.component';
import { ServicesModule } from './services/services.module';
var AcmkitLibModule = /** @class */ (function () {
    function AcmkitLibModule() {
    }
    AcmkitLibModule = __decorate([
        NgModule({
            declarations: [
                AcmkitLibComponent,
                BasePageComponent,
                LoginCardComponent,
                LandingComponent,
                NavbarComponent,
                SiderbarComponent,
                CardComponent,
            ],
            imports: [
                BrowserModule,
                RouterModule,
                BrowserAnimationsModule,
                HttpClientModule,
                ServicesModule,
                IconsModule,
                ToastrModule,
            ],
            exports: [
                AcmkitLibComponent,
                BasePageComponent,
                LoginCardComponent,
                LandingComponent,
                NavbarComponent,
                SiderbarComponent,
                ServicesModule,
                IconsModule,
                CardComponent,
            ],
        })
    ], AcmkitLibModule);
    return AcmkitLibModule;
}());
export { AcmkitLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNta2l0LWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2FjbWtpdC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMxQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFpQzVEO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixlQUFlO1FBL0IzQixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osa0JBQWtCO2dCQUNsQixpQkFBaUI7Z0JBQ2pCLGtCQUFrQjtnQkFDbEIsZ0JBQWdCO2dCQUNoQixlQUFlO2dCQUNmLGlCQUFpQjtnQkFDakIsYUFBYTthQUNkO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGFBQWE7Z0JBQ2IsWUFBWTtnQkFDWix1QkFBdUI7Z0JBQ3ZCLGdCQUFnQjtnQkFDaEIsY0FBYztnQkFDZCxXQUFXO2dCQUNYLFlBQVk7YUFDYjtZQUNELE9BQU8sRUFBRTtnQkFDUCxrQkFBa0I7Z0JBQ2xCLGlCQUFpQjtnQkFDakIsa0JBQWtCO2dCQUNsQixnQkFBZ0I7Z0JBQ2hCLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQixjQUFjO2dCQUNkLFdBQVc7Z0JBQ1gsYUFBYTthQUNkO1NBQ0YsQ0FBQztPQUNXLGVBQWUsQ0FBRztJQUFELHNCQUFDO0NBQUEsQUFBL0IsSUFBK0I7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUb2FzdHJNb2R1bGUgfSBmcm9tICduZ3gtdG9hc3RyJztcclxuaW1wb3J0IHsgQWNta2l0TGliQ29tcG9uZW50IH0gZnJvbSAnLi9hY21raXQtbGliLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEljb25zTW9kdWxlIH0gZnJvbSAnLi9hc3NldHMvaWNvbnMvaWNvbnMubW9kdWxlJztcclxuaW1wb3J0IHsgQmFzZVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYmFzZS1wYWdlL2Jhc2UtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYW5kaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dpbkNhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4tY2FyZC9sb2dpbi1jYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNpZGVyYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZXJ2aWNlc01vZHVsZSB9IGZyb20gJy4vc2VydmljZXMvc2VydmljZXMubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBY21raXRMaWJDb21wb25lbnQsXHJcbiAgICBCYXNlUGFnZUNvbXBvbmVudCxcclxuICAgIExvZ2luQ2FyZENvbXBvbmVudCxcclxuICAgIExhbmRpbmdDb21wb25lbnQsXHJcbiAgICBOYXZiYXJDb21wb25lbnQsXHJcbiAgICBTaWRlcmJhckNvbXBvbmVudCxcclxuICAgIENhcmRDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgU2VydmljZXNNb2R1bGUsXHJcbiAgICBJY29uc01vZHVsZSxcclxuICAgIFRvYXN0ck1vZHVsZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEFjbWtpdExpYkNvbXBvbmVudCxcclxuICAgIEJhc2VQYWdlQ29tcG9uZW50LFxyXG4gICAgTG9naW5DYXJkQ29tcG9uZW50LFxyXG4gICAgTGFuZGluZ0NvbXBvbmVudCxcclxuICAgIE5hdmJhckNvbXBvbmVudCxcclxuICAgIFNpZGVyYmFyQ29tcG9uZW50LFxyXG4gICAgU2VydmljZXNNb2R1bGUsXHJcbiAgICBJY29uc01vZHVsZSxcclxuICAgIENhcmRDb21wb25lbnQsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjbWtpdExpYk1vZHVsZSB7fVxyXG4iXX0=