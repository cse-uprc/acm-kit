import { __decorate } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../assets/globals';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/**
 * Auth service class that deals with authorizing a user
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Logs a user in and generates a JWT token for that user
     *
     * @param username - username of the user
     * @param password - password for the user
     */
    authenticate(username, password) {
        this.http
            .post(Environment.AUTH, { username, password })
            .subscribe((response) => console.log(response.token));
    }
};
AuthService.ctorParameters = () => [
    { type: HttpClient }
];
AuthService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.ɵɵinject(i1.HttpClient)); }, token: AuthService, providedIn: "root" });
AuthService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFFbkQ7Ozs7O0dBS0c7QUFJSCxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0lBQ3RCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDO0lBRXhDOzs7OztPQUtHO0lBQ0gsWUFBWSxDQUFDLFFBQWdCLEVBQUUsUUFBZ0I7UUFDN0MsSUFBSSxDQUFDLElBQUk7YUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQzthQUM5QyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUUsUUFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Q0FDRixDQUFBOztZQWIyQixVQUFVOzs7QUFEekIsV0FBVztJQUh2QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csV0FBVyxDQWN2QjtTQWRZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vYXNzZXRzL2dsb2JhbHMnO1xyXG5cclxuLyoqXHJcbiAqIEF1dGggc2VydmljZSBjbGFzcyB0aGF0IGRlYWxzIHdpdGggYXV0aG9yaXppbmcgYSB1c2VyXHJcbiAqXHJcbiAqIEBhdXRob3IgU2FtIEJ1dGxlclxyXG4gKiBAc2luY2UgQXVndXN0IDI0LCAyMDIwXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogTG9ncyBhIHVzZXIgaW4gYW5kIGdlbmVyYXRlcyBhIEpXVCB0b2tlbiBmb3IgdGhhdCB1c2VyXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdXNlcm5hbWUgLSB1c2VybmFtZSBvZiB0aGUgdXNlclxyXG4gICAqIEBwYXJhbSBwYXNzd29yZCAtIHBhc3N3b3JkIGZvciB0aGUgdXNlclxyXG4gICAqL1xyXG4gIGF1dGhlbnRpY2F0ZSh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QoRW52aXJvbm1lbnQuQVVUSCwgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSlcclxuICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKChyZXNwb25zZSBhcyBhbnkpLnRva2VuKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==