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
    return AcmkitLibModule;
}());
export { AcmkitLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNta2l0LWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2FjbWtpdC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQTJCL0U7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGVBQWU7UUF6QjNCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWixrQkFBa0I7Z0JBQ2xCLGFBQWE7Z0JBQ2IsaUJBQWlCO2dCQUNqQixrQkFBa0I7Z0JBQ2xCLGdCQUFnQjthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxhQUFhO2dCQUNiLFlBQVk7Z0JBQ1osdUJBQXVCO2dCQUN2QixnQkFBZ0I7Z0JBQ2hCLGNBQWM7Z0JBQ2Qsb0JBQW9CO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGtCQUFrQjtnQkFDbEIsYUFBYTtnQkFDYixpQkFBaUI7Z0JBQ2pCLGtCQUFrQjtnQkFDbEIsZ0JBQWdCO2dCQUNoQixvQkFBb0I7YUFDckI7U0FDRixDQUFDO09BQ1csZUFBZSxDQUFHO0lBQUQsc0JBQUM7Q0FBQSxBQUEvQixJQUErQjtTQUFsQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFjbWtpdExpYkNvbXBvbmVudCB9IGZyb20gJy4vYWNta2l0LWxpYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCYXNlUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9iYXNlLXBhZ2UvYmFzZS1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExhbmRpbmdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi1jYXJkL2xvZ2luLWNhcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VydmljZXNNb2R1bGUgfSBmcm9tICcuL3NlcnZpY2VzL3NlcnZpY2VzLm1vZHVsZSc7XHJcbmltcG9ydCB7IFN0b21wV2Vic29ja2V0TW9kdWxlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zdG9tcC9zdG9tcC13ZWJzb2NrZXQubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBY21raXRMaWJDb21wb25lbnQsXHJcbiAgICBDYXJkQ29tcG9uZW50LFxyXG4gICAgQmFzZVBhZ2VDb21wb25lbnQsXHJcbiAgICBMb2dpbkNhcmRDb21wb25lbnQsXHJcbiAgICBMYW5kaW5nQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQnJvd3Nlck1vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIFNlcnZpY2VzTW9kdWxlLFxyXG4gICAgU3RvbXBXZWJzb2NrZXRNb2R1bGUsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBBY21raXRMaWJDb21wb25lbnQsXHJcbiAgICBDYXJkQ29tcG9uZW50LFxyXG4gICAgQmFzZVBhZ2VDb21wb25lbnQsXHJcbiAgICBMb2dpbkNhcmRDb21wb25lbnQsXHJcbiAgICBMYW5kaW5nQ29tcG9uZW50LFxyXG4gICAgU3RvbXBXZWJzb2NrZXRNb2R1bGUsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjbWtpdExpYk1vZHVsZSB7fVxyXG4iXX0=