import { __decorate } from "tslib";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AcmkitLibComponent } from './acmkit-lib.component';
import { BasePageComponent } from './components/base-page/base-page.component';
import { CardComponent } from './components/card/card.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { ServicesModule } from './services/services.module';
import { StompWebsocketModule } from './services/stomp/stomp-websocket.module';
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
        imports: [
            BrowserModule,
            RouterModule,
            BrowserAnimationsModule,
            HttpClientModule,
            ServicesModule,
            StompWebsocketModule,
        ],
        exports: [
            AcmkitLibComponent,
            CardComponent,
            BasePageComponent,
            LoginCardComponent,
            LandingComponent,
            StompWebsocketModule,
        ],
    })
], AcmkitLibModule);
export { AcmkitLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNta2l0LWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2FjbWtpdC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQTJCL0UsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtDQUFHLENBQUE7QUFBbEIsZUFBZTtJQXpCM0IsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLGdCQUFnQjtTQUNqQjtRQUNELE9BQU8sRUFBRTtZQUNQLGFBQWE7WUFDYixZQUFZO1lBQ1osdUJBQXVCO1lBQ3ZCLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2Qsb0JBQW9CO1NBQ3JCO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLGdCQUFnQjtZQUNoQixvQkFBb0I7U0FDckI7S0FDRixDQUFDO0dBQ1csZUFBZSxDQUFHO1NBQWxCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQWNta2l0TGliQ29tcG9uZW50IH0gZnJvbSAnLi9hY21raXQtbGliLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJhc2VQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Jhc2UtcGFnZS9iYXNlLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGFuZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5DYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luLWNhcmQvbG9naW4tY2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZXJ2aWNlc01vZHVsZSB9IGZyb20gJy4vc2VydmljZXMvc2VydmljZXMubW9kdWxlJztcclxuaW1wb3J0IHsgU3RvbXBXZWJzb2NrZXRNb2R1bGUgfSBmcm9tICcuL3NlcnZpY2VzL3N0b21wL3N0b21wLXdlYnNvY2tldC5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFjbWtpdExpYkNvbXBvbmVudCxcclxuICAgIENhcmRDb21wb25lbnQsXHJcbiAgICBCYXNlUGFnZUNvbXBvbmVudCxcclxuICAgIExvZ2luQ2FyZENvbXBvbmVudCxcclxuICAgIExhbmRpbmdDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgU2VydmljZXNNb2R1bGUsXHJcbiAgICBTdG9tcFdlYnNvY2tldE1vZHVsZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEFjbWtpdExpYkNvbXBvbmVudCxcclxuICAgIENhcmRDb21wb25lbnQsXHJcbiAgICBCYXNlUGFnZUNvbXBvbmVudCxcclxuICAgIExvZ2luQ2FyZENvbXBvbmVudCxcclxuICAgIExhbmRpbmdDb21wb25lbnQsXHJcbiAgICBTdG9tcFdlYnNvY2tldE1vZHVsZSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNta2l0TGliTW9kdWxlIHt9XHJcbiJdfQ==