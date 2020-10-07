import { __decorate } from "tslib";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './auth/auth.service';
import { JwtService } from './jwt/jwt.service';
import { ParticlesService } from './particles/particles.service';
import { UserService } from './user/user.service';
var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        NgModule({
            imports: [BrowserModule, HttpClientModule],
            providers: [AuthService, ParticlesService, UserService, JwtService],
        })
    ], ServicesModule);
    return ServicesModule;
}());
export { ServicesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zZXJ2aWNlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBTWxEO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixjQUFjO1FBSjFCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQztZQUMxQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQztTQUNwRSxDQUFDO09BQ1csY0FBYyxDQUFHO0lBQUQscUJBQUM7Q0FBQSxBQUE5QixJQUE4QjtTQUFqQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKd3RTZXJ2aWNlIH0gZnJvbSAnLi9qd3Qvand0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZXNTZXJ2aWNlIH0gZnJvbSAnLi9wYXJ0aWNsZXMvcGFydGljbGVzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vdXNlci91c2VyLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQnJvd3Nlck1vZHVsZSwgSHR0cENsaWVudE1vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2UsIFBhcnRpY2xlc1NlcnZpY2UsIFVzZXJTZXJ2aWNlLCBKd3RTZXJ2aWNlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlcnZpY2VzTW9kdWxlIHt9XHJcbiJdfQ==