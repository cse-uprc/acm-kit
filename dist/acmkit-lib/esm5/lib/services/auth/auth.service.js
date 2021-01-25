import { __decorate } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UrlService } from '../url/url.service';
/**
 * Auth service class that deals with authorizing a user
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
var AuthService = /** @class */ (function () {
    function AuthService(http, urlService, router) {
        this.http = http;
        this.urlService = urlService;
        this.router = router;
    }
    /**
     * Logs a user in and generates a JWT token for that user
     *
     * @param username - username of the user
     * @param password - password for the user
     */
    AuthService.prototype.authenticate = function (username, password) {
        var _this = this;
        console.log(this.urlService.getAPIUrl() + "/authenticate");
        this.http
            .post(this.urlService.getAPIUrl() + "/authenticate", {
            username: username,
            password: password,
        })
            .subscribe(function () { return _this.router.navigate(['home']); });
    };
    AuthService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: UrlService },
        { type: Router }
    ]; };
    AuthService = __decorate([
        Injectable()
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRDs7Ozs7R0FLRztBQUVIO0lBQ0UscUJBQ1UsSUFBZ0IsRUFDaEIsVUFBc0IsRUFDdEIsTUFBYztRQUZkLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3JCLENBQUM7SUFFSjs7Ozs7T0FLRztJQUNILGtDQUFZLEdBQVosVUFBYSxRQUFnQixFQUFFLFFBQWdCO1FBQS9DLGlCQVFDO1FBUEMsT0FBTyxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxrQkFBZSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLElBQUk7YUFDTixJQUFJLENBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsa0JBQWUsRUFBRTtZQUNuRCxRQUFRLFVBQUE7WUFDUixRQUFRLFVBQUE7U0FDVCxDQUFDO2FBQ0QsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUNyRCxDQUFDOztnQkFuQmUsVUFBVTtnQkFDSixVQUFVO2dCQUNkLE1BQU07O0lBSmIsV0FBVztRQUR2QixVQUFVLEVBQUU7T0FDQSxXQUFXLENBc0J2QjtJQUFELGtCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0F0QlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9hc3NldHMvZ2xvYmFscyc7XHJcbmltcG9ydCB7IFVybFNlcnZpY2UgfSBmcm9tICcuLi91cmwvdXJsLnNlcnZpY2UnO1xyXG5cclxuLyoqXHJcbiAqIEF1dGggc2VydmljZSBjbGFzcyB0aGF0IGRlYWxzIHdpdGggYXV0aG9yaXppbmcgYSB1c2VyXHJcbiAqXHJcbiAqIEBhdXRob3IgU2FtIEJ1dGxlclxyXG4gKiBAc2luY2UgQXVndXN0IDI0LCAyMDIwXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIHVybFNlcnZpY2U6IFVybFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXHJcbiAgKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBMb2dzIGEgdXNlciBpbiBhbmQgZ2VuZXJhdGVzIGEgSldUIHRva2VuIGZvciB0aGF0IHVzZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB1c2VybmFtZSAtIHVzZXJuYW1lIG9mIHRoZSB1c2VyXHJcbiAgICogQHBhcmFtIHBhc3N3b3JkIC0gcGFzc3dvcmQgZm9yIHRoZSB1c2VyXHJcbiAgICovXHJcbiAgYXV0aGVudGljYXRlKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICAgIGNvbnNvbGUubG9nKGAke3RoaXMudXJsU2VydmljZS5nZXRBUElVcmwoKX0vYXV0aGVudGljYXRlYCk7XHJcbiAgICB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QoYCR7dGhpcy51cmxTZXJ2aWNlLmdldEFQSVVybCgpfS9hdXRoZW50aWNhdGVgLCB7XHJcbiAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydob21lJ10pKTtcclxuICB9XHJcbn1cclxuIl19