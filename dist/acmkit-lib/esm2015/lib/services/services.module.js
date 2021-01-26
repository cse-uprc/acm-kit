import { __decorate } from "tslib";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './auth/auth.service';
import { JwtService } from './jwt/jwt.service';
import { ParticlesService } from './particles/particles.service';
import { StompWebsocketModule } from './stomp/stomp-websocket.module';
import { ToastService } from './toast/toast.service';
import { UrlService } from './url/url.service';
import { UserService } from './user/user.service';
let ServicesModule = class ServicesModule {
};
ServicesModule = __decorate([
    NgModule({
        imports: [BrowserModule, HttpClientModule],
        providers: [
            AuthService,
            ParticlesService,
            UserService,
            JwtService,
            UrlService,
            ToastService,
        ],
        exports: [StompWebsocketModule],
    })
], ServicesModule);
export { ServicesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zZXJ2aWNlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFjbEQsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztDQUFHLENBQUE7QUFBakIsY0FBYztJQVoxQixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUM7UUFDMUMsU0FBUyxFQUFFO1lBQ1QsV0FBVztZQUNYLGdCQUFnQjtZQUNoQixXQUFXO1lBQ1gsVUFBVTtZQUNWLFVBQVU7WUFDVixZQUFZO1NBQ2I7UUFDRCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztLQUNoQyxDQUFDO0dBQ1csY0FBYyxDQUFHO1NBQWpCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEp3dFNlcnZpY2UgfSBmcm9tICcuL2p3dC9qd3Quc2VydmljZSc7XHJcbmltcG9ydCB7IFBhcnRpY2xlc1NlcnZpY2UgfSBmcm9tICcuL3BhcnRpY2xlcy9wYXJ0aWNsZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IFN0b21wV2Vic29ja2V0TW9kdWxlIH0gZnJvbSAnLi9zdG9tcC9zdG9tcC13ZWJzb2NrZXQubW9kdWxlJztcclxuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi90b2FzdC90b2FzdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXJsU2VydmljZSB9IGZyb20gJy4vdXJsL3VybC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXIvdXNlci5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0Jyb3dzZXJNb2R1bGUsIEh0dHBDbGllbnRNb2R1bGVdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQXV0aFNlcnZpY2UsXHJcbiAgICBQYXJ0aWNsZXNTZXJ2aWNlLFxyXG4gICAgVXNlclNlcnZpY2UsXHJcbiAgICBKd3RTZXJ2aWNlLFxyXG4gICAgVXJsU2VydmljZSxcclxuICAgIFRvYXN0U2VydmljZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtTdG9tcFdlYnNvY2tldE1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlc01vZHVsZSB7fVxyXG4iXX0=