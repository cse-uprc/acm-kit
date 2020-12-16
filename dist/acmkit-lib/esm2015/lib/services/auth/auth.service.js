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
        this.http
            .post(`${this.urlService.getAPIUrl}/authenticate`, { username, password })
            .subscribe((response) => console.log(response.token));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhEOzs7OztHQUtHO0FBRUgsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQUN0QixZQUFvQixJQUFnQixFQUFVLFVBQXNCO1FBQWhELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQztJQUV4RTs7Ozs7T0FLRztJQUNILFlBQVksQ0FBQyxRQUFnQixFQUFFLFFBQWdCO1FBQzdDLElBQUksQ0FBQyxJQUFJO2FBQ04sSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLGVBQWUsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQzthQUN6RSxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUUsUUFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Q0FDRixDQUFBOztZQWIyQixVQUFVO1lBQXNCLFVBQVU7O0FBRHpELFdBQVc7SUFEdkIsVUFBVSxFQUFFO0dBQ0EsV0FBVyxDQWN2QjtTQWRZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vYXNzZXRzL2dsb2JhbHMnO1xyXG5pbXBvcnQgeyBVcmxTZXJ2aWNlIH0gZnJvbSAnLi4vdXJsL3VybC5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBBdXRoIHNlcnZpY2UgY2xhc3MgdGhhdCBkZWFscyB3aXRoIGF1dGhvcml6aW5nIGEgdXNlclxyXG4gKlxyXG4gKiBAYXV0aG9yIFNhbSBCdXRsZXJcclxuICogQHNpbmNlIEF1Z3VzdCAyNCwgMjAyMFxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSB1cmxTZXJ2aWNlOiBVcmxTZXJ2aWNlKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBMb2dzIGEgdXNlciBpbiBhbmQgZ2VuZXJhdGVzIGEgSldUIHRva2VuIGZvciB0aGF0IHVzZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB1c2VybmFtZSAtIHVzZXJuYW1lIG9mIHRoZSB1c2VyXHJcbiAgICogQHBhcmFtIHBhc3N3b3JkIC0gcGFzc3dvcmQgZm9yIHRoZSB1c2VyXHJcbiAgICovXHJcbiAgYXV0aGVudGljYXRlKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdChgJHt0aGlzLnVybFNlcnZpY2UuZ2V0QVBJVXJsfS9hdXRoZW50aWNhdGVgLCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9KVxyXG4gICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4gY29uc29sZS5sb2coKHJlc3BvbnNlIGFzIGFueSkudG9rZW4pKTtcclxuICB9XHJcbn1cclxuIl19