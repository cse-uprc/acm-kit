import { __decorate } from "tslib";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './auth/auth.service';
import { JwtService } from './jwt/jwt.service';
import { ParticlesService } from './particles/particles.service';
import { StompWebsocketService } from './stomp/stomp-websocket.service';
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
            StompWebsocketService,
        ],
    })
], ServicesModule);
export { ServicesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zZXJ2aWNlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWFsRCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0NBQUcsQ0FBQTtBQUFqQixjQUFjO0lBWDFCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQztRQUMxQyxTQUFTLEVBQUU7WUFDVCxXQUFXO1lBQ1gsZ0JBQWdCO1lBQ2hCLFdBQVc7WUFDWCxVQUFVO1lBQ1YsVUFBVTtZQUNWLHFCQUFxQjtTQUN0QjtLQUNGLENBQUM7R0FDVyxjQUFjLENBQUc7U0FBakIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGgvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSnd0U2VydmljZSB9IGZyb20gJy4vand0L2p3dC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFydGljbGVzU2VydmljZSB9IGZyb20gJy4vcGFydGljbGVzL3BhcnRpY2xlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RvbXBXZWJzb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi9zdG9tcC9zdG9tcC13ZWJzb2NrZXQuc2VydmljZSc7XHJcbmltcG9ydCB7IFVybFNlcnZpY2UgfSBmcm9tICcuL3VybC91cmwuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyL3VzZXIuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEF1dGhTZXJ2aWNlLFxyXG4gICAgUGFydGljbGVzU2VydmljZSxcclxuICAgIFVzZXJTZXJ2aWNlLFxyXG4gICAgSnd0U2VydmljZSxcclxuICAgIFVybFNlcnZpY2UsXHJcbiAgICBTdG9tcFdlYnNvY2tldFNlcnZpY2UsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlcnZpY2VzTW9kdWxlIHt9XHJcbiJdfQ==