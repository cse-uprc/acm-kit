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
let AuthService = class AuthService {
    constructor(http, urlService, router) {
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
    authenticate(username, password) {
        console.log(`${this.urlService.getAPIUrl()}/authenticate`);
        this.http
            .post(`${this.urlService.getAPIUrl()}/authenticate`, {
            username,
            password,
        })
            .subscribe(() => this.router.navigate(['home']));
    }
};
AuthService.ctorParameters = () => [
    { type: HttpClient },
    { type: UrlService },
    { type: Router }
];
AuthService = __decorate([
    Injectable()
], AuthService);
export { AuthService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRDs7Ozs7R0FLRztBQUVILElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7SUFDdEIsWUFDVSxJQUFnQixFQUNoQixVQUFzQixFQUN0QixNQUFjO1FBRmQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDckIsQ0FBQztJQUVKOzs7OztPQUtHO0lBQ0gsWUFBWSxDQUFDLFFBQWdCLEVBQUUsUUFBZ0I7UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxJQUFJO2FBQ04sSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsZUFBZSxFQUFFO1lBQ25ELFFBQVE7WUFDUixRQUFRO1NBQ1QsQ0FBQzthQUNELFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBQ0YsQ0FBQTs7WUFwQmlCLFVBQVU7WUFDSixVQUFVO1lBQ2QsTUFBTTs7QUFKYixXQUFXO0lBRHZCLFVBQVUsRUFBRTtHQUNBLFdBQVcsQ0FzQnZCO1NBdEJZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vYXNzZXRzL2dsb2JhbHMnO1xyXG5pbXBvcnQgeyBVcmxTZXJ2aWNlIH0gZnJvbSAnLi4vdXJsL3VybC5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBBdXRoIHNlcnZpY2UgY2xhc3MgdGhhdCBkZWFscyB3aXRoIGF1dGhvcml6aW5nIGEgdXNlclxyXG4gKlxyXG4gKiBAYXV0aG9yIFNhbSBCdXRsZXJcclxuICogQHNpbmNlIEF1Z3VzdCAyNCwgMjAyMFxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSB1cmxTZXJ2aWNlOiBVcmxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxyXG4gICkge31cclxuXHJcbiAgLyoqXHJcbiAgICogTG9ncyBhIHVzZXIgaW4gYW5kIGdlbmVyYXRlcyBhIEpXVCB0b2tlbiBmb3IgdGhhdCB1c2VyXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdXNlcm5hbWUgLSB1c2VybmFtZSBvZiB0aGUgdXNlclxyXG4gICAqIEBwYXJhbSBwYXNzd29yZCAtIHBhc3N3b3JkIGZvciB0aGUgdXNlclxyXG4gICAqL1xyXG4gIGF1dGhlbnRpY2F0ZSh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLnVybFNlcnZpY2UuZ2V0QVBJVXJsKCl9L2F1dGhlbnRpY2F0ZWApO1xyXG4gICAgdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KGAke3RoaXMudXJsU2VydmljZS5nZXRBUElVcmwoKX0vYXV0aGVudGljYXRlYCwge1xyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFsnaG9tZSddKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==