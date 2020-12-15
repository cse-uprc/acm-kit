import { __decorate } from "tslib";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './auth/auth.service';
import { JwtService } from './jwt/jwt.service';
import { ParticlesService } from './particles/particles.service';
import { StompWebsocketModule } from './stomp/stomp-websocket.module';
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
        ],
        exports: [StompWebsocketModule],
    })
], ServicesModule);
export { ServicesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zZXJ2aWNlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWFsRCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0NBQUcsQ0FBQTtBQUFqQixjQUFjO0lBWDFCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQztRQUMxQyxTQUFTLEVBQUU7WUFDVCxXQUFXO1lBQ1gsZ0JBQWdCO1lBQ2hCLFdBQVc7WUFDWCxVQUFVO1lBQ1YsVUFBVTtTQUNYO1FBQ0QsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7S0FDaEMsQ0FBQztHQUNXLGNBQWMsQ0FBRztTQUFqQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKd3RTZXJ2aWNlIH0gZnJvbSAnLi9qd3Qvand0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZXNTZXJ2aWNlIH0gZnJvbSAnLi9wYXJ0aWNsZXMvcGFydGljbGVzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdG9tcFdlYnNvY2tldE1vZHVsZSB9IGZyb20gJy4vc3RvbXAvc3RvbXAtd2Vic29ja2V0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IFVybFNlcnZpY2UgfSBmcm9tICcuL3VybC91cmwuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyL3VzZXIuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEF1dGhTZXJ2aWNlLFxyXG4gICAgUGFydGljbGVzU2VydmljZSxcclxuICAgIFVzZXJTZXJ2aWNlLFxyXG4gICAgSnd0U2VydmljZSxcclxuICAgIFVybFNlcnZpY2UsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbU3RvbXBXZWJzb2NrZXRNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VydmljZXNNb2R1bGUge31cclxuIl19