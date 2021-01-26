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
let AcmkitLibModule = class AcmkitLibModule {
};
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
        providers: [ToastrModule],
    })
], AcmkitLibModule);
export { AcmkitLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNta2l0LWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2FjbWtpdC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMxQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFpQzVELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7Q0FBRyxDQUFBO0FBQWxCLGVBQWU7SUEvQjNCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGFBQWE7U0FDZDtRQUNELE9BQU8sRUFBRTtZQUNQLGFBQWE7WUFDYixZQUFZO1lBQ1osdUJBQXVCO1lBQ3ZCLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2QsV0FBVztTQUNaO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asa0JBQWtCO1lBQ2xCLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIsZ0JBQWdCO1lBQ2hCLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsY0FBYztZQUNkLFdBQVc7WUFDWCxhQUFhO1NBQ2Q7UUFDRCxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7S0FDMUIsQ0FBQztHQUNXLGVBQWUsQ0FBRztTQUFsQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRvYXN0ck1vZHVsZSB9IGZyb20gJ25neC10b2FzdHInO1xyXG5pbXBvcnQgeyBBY21raXRMaWJDb21wb25lbnQgfSBmcm9tICcuL2FjbWtpdC1saWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSWNvbnNNb2R1bGUgfSBmcm9tICcuL2Fzc2V0cy9pY29ucy9pY29ucy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBCYXNlUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9iYXNlLXBhZ2UvYmFzZS1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExhbmRpbmdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi1jYXJkL2xvZ2luLWNhcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2lkZXJiYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlcnZpY2VzTW9kdWxlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZXJ2aWNlcy5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFjbWtpdExpYkNvbXBvbmVudCxcclxuICAgIEJhc2VQYWdlQ29tcG9uZW50LFxyXG4gICAgTG9naW5DYXJkQ29tcG9uZW50LFxyXG4gICAgTGFuZGluZ0NvbXBvbmVudCxcclxuICAgIE5hdmJhckNvbXBvbmVudCxcclxuICAgIFNpZGVyYmFyQ29tcG9uZW50LFxyXG4gICAgQ2FyZENvbXBvbmVudCxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBTZXJ2aWNlc01vZHVsZSxcclxuICAgIEljb25zTW9kdWxlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQWNta2l0TGliQ29tcG9uZW50LFxyXG4gICAgQmFzZVBhZ2VDb21wb25lbnQsXHJcbiAgICBMb2dpbkNhcmRDb21wb25lbnQsXHJcbiAgICBMYW5kaW5nQ29tcG9uZW50LFxyXG4gICAgTmF2YmFyQ29tcG9uZW50LFxyXG4gICAgU2lkZXJiYXJDb21wb25lbnQsXHJcbiAgICBTZXJ2aWNlc01vZHVsZSxcclxuICAgIEljb25zTW9kdWxlLFxyXG4gICAgQ2FyZENvbXBvbmVudCxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1RvYXN0ck1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY21raXRMaWJNb2R1bGUge31cclxuIl19