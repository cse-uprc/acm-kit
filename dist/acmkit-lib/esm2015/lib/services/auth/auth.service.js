import { __decorate } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
/**
 * Auth service class that deals with authorizing a user
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
let AuthService = class AuthService {
    constructor(http, urlService) {
        this.http = http;
        this.urlService = urlService;
    }
    /**
     * Logs a user in and generates a JWT token for that user
     *
     * @param username - username of the user
     * @param password - password for the user
     */
    authenticate(username, password) {
        return this.http.post(`${this.urlService.getAPIUrl()}/authenticate`, {
            username,
            password,
        });
    }
};
AuthService.ctorParameters = () => [
    { type: HttpClient },
    { type: UrlService }
];
AuthService = __decorate([
    Injectable()
], AuthService);
export { AuthService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhEOzs7OztHQUtHO0FBRUgsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQUN0QixZQUNtQixJQUFnQixFQUNoQixVQUFzQjtRQUR0QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFDdEMsQ0FBQztJQUVKOzs7OztPQUtHO0lBQ0gsWUFBWSxDQUFDLFFBQWdCLEVBQUUsUUFBZ0I7UUFDN0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRTtZQUNuRSxRQUFRO1lBQ1IsUUFBUTtTQUNULENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBOztZQWhCMEIsVUFBVTtZQUNKLFVBQVU7O0FBSDlCLFdBQVc7SUFEdkIsVUFBVSxFQUFFO0dBQ0EsV0FBVyxDQWtCdkI7U0FsQlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBVcmxTZXJ2aWNlIH0gZnJvbSAnLi4vdXJsL3VybC5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBBdXRoIHNlcnZpY2UgY2xhc3MgdGhhdCBkZWFscyB3aXRoIGF1dGhvcml6aW5nIGEgdXNlclxyXG4gKlxyXG4gKiBAYXV0aG9yIFNhbSBCdXRsZXJcclxuICogQHNpbmNlIEF1Z3VzdCAyNCwgMjAyMFxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSB1cmxTZXJ2aWNlOiBVcmxTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBMb2dzIGEgdXNlciBpbiBhbmQgZ2VuZXJhdGVzIGEgSldUIHRva2VuIGZvciB0aGF0IHVzZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB1c2VybmFtZSAtIHVzZXJuYW1lIG9mIHRoZSB1c2VyXHJcbiAgICogQHBhcmFtIHBhc3N3b3JkIC0gcGFzc3dvcmQgZm9yIHRoZSB1c2VyXHJcbiAgICovXHJcbiAgYXV0aGVudGljYXRlKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJsU2VydmljZS5nZXRBUElVcmwoKX0vYXV0aGVudGljYXRlYCwge1xyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19