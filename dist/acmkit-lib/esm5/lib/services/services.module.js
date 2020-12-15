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
var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
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
    return ServicesModule;
}());
export { ServicesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zZXJ2aWNlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWFsRDtJQUFBO0lBQTZCLENBQUM7SUFBakIsY0FBYztRQVgxQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUM7WUFDMUMsU0FBUyxFQUFFO2dCQUNULFdBQVc7Z0JBQ1gsZ0JBQWdCO2dCQUNoQixXQUFXO2dCQUNYLFVBQVU7Z0JBQ1YsVUFBVTthQUNYO1lBQ0QsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDaEMsQ0FBQztPQUNXLGNBQWMsQ0FBRztJQUFELHFCQUFDO0NBQUEsQUFBOUIsSUFBOEI7U0FBakIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGgvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSnd0U2VydmljZSB9IGZyb20gJy4vand0L2p3dC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFydGljbGVzU2VydmljZSB9IGZyb20gJy4vcGFydGljbGVzL3BhcnRpY2xlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RvbXBXZWJzb2NrZXRNb2R1bGUgfSBmcm9tICcuL3N0b21wL3N0b21wLXdlYnNvY2tldC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBVcmxTZXJ2aWNlIH0gZnJvbSAnLi91cmwvdXJsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vdXNlci91c2VyLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQnJvd3Nlck1vZHVsZSwgSHR0cENsaWVudE1vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBBdXRoU2VydmljZSxcclxuICAgIFBhcnRpY2xlc1NlcnZpY2UsXHJcbiAgICBVc2VyU2VydmljZSxcclxuICAgIEp3dFNlcnZpY2UsXHJcbiAgICBVcmxTZXJ2aWNlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1N0b21wV2Vic29ja2V0TW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlcnZpY2VzTW9kdWxlIHt9XHJcbiJdfQ==