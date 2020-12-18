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
import { NavbarComponent } from './components/navbar/navbar.component';
import { SiderbarComponent } from './components/sidebar/sidebar.component';
import { ServicesModule } from './services/services.module';
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
            NavbarComponent,
            SiderbarComponent,
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
            NavbarComponent,
            SiderbarComponent,
            ServicesModule,
            IconsModule,
        ],
    })
], AcmkitLibModule);
export { AcmkitLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNta2l0LWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2FjbWtpdC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBZ0M1RCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0NBQUcsQ0FBQTtBQUFsQixlQUFlO0lBOUIzQixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWixrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIsZ0JBQWdCO1lBQ2hCLGVBQWU7WUFDZixpQkFBaUI7U0FDbEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxhQUFhO1lBQ2IsWUFBWTtZQUNaLHVCQUF1QjtZQUN2QixnQkFBZ0I7WUFDaEIsY0FBYztZQUNkLFdBQVc7U0FDWjtRQUNELE9BQU8sRUFBRTtZQUNQLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLGtCQUFrQjtZQUNsQixnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2QsV0FBVztTQUNaO0tBQ0YsQ0FBQztHQUNXLGVBQWUsQ0FBRztTQUFsQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFjbWtpdExpYkNvbXBvbmVudCB9IGZyb20gJy4vYWNta2l0LWxpYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJY29uc01vZHVsZSB9IGZyb20gJy4vYXNzZXRzL2ljb25zL2ljb25zLm1vZHVsZSc7XHJcbmltcG9ydCB7IEJhc2VQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Jhc2UtcGFnZS9iYXNlLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGFuZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5DYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luLWNhcmQvbG9naW4tY2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaWRlcmJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VydmljZXNNb2R1bGUgfSBmcm9tICcuL3NlcnZpY2VzL3NlcnZpY2VzLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQWNta2l0TGliQ29tcG9uZW50LFxyXG4gICAgQ2FyZENvbXBvbmVudCxcclxuICAgIEJhc2VQYWdlQ29tcG9uZW50LFxyXG4gICAgTG9naW5DYXJkQ29tcG9uZW50LFxyXG4gICAgTGFuZGluZ0NvbXBvbmVudCxcclxuICAgIE5hdmJhckNvbXBvbmVudCxcclxuICAgIFNpZGVyYmFyQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQnJvd3Nlck1vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIFNlcnZpY2VzTW9kdWxlLFxyXG4gICAgSWNvbnNNb2R1bGUsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBBY21raXRMaWJDb21wb25lbnQsXHJcbiAgICBDYXJkQ29tcG9uZW50LFxyXG4gICAgQmFzZVBhZ2VDb21wb25lbnQsXHJcbiAgICBMb2dpbkNhcmRDb21wb25lbnQsXHJcbiAgICBMYW5kaW5nQ29tcG9uZW50LFxyXG4gICAgTmF2YmFyQ29tcG9uZW50LFxyXG4gICAgU2lkZXJiYXJDb21wb25lbnQsXHJcbiAgICBTZXJ2aWNlc01vZHVsZSxcclxuICAgIEljb25zTW9kdWxlLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY21raXRMaWJNb2R1bGUge31cclxuIl19