import { __decorate } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../assets/globals';
/**
 * Auth service class that deals with authorizing a user
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    /**
     * Logs a user in and generates a JWT token for that user
     *
     * @param username - username of the user
     * @param password - password for the user
     */
    AuthService.prototype.authenticate = function (username, password) {
        this.http
            .post(Environment.AUTH, { username: username, password: password })
            .subscribe(function (response) { return console.log(response.token); });
    };
    AuthService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    AuthService = __decorate([
        Injectable()
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRW5EOzs7OztHQUtHO0FBRUg7SUFDRSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7SUFFeEM7Ozs7O09BS0c7SUFDSCxrQ0FBWSxHQUFaLFVBQWEsUUFBZ0IsRUFBRSxRQUFnQjtRQUM3QyxJQUFJLENBQUMsSUFBSTthQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxVQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQzthQUM5QyxTQUFTLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFFLFFBQWdCLENBQUMsS0FBSyxDQUFDLEVBQXBDLENBQW9DLENBQUMsQ0FBQztJQUNuRSxDQUFDOztnQkFaeUIsVUFBVTs7SUFEekIsV0FBVztRQUR2QixVQUFVLEVBQUU7T0FDQSxXQUFXLENBY3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQWRELElBY0M7U0FkWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uL2Fzc2V0cy9nbG9iYWxzJztcclxuXHJcbi8qKlxyXG4gKiBBdXRoIHNlcnZpY2UgY2xhc3MgdGhhdCBkZWFscyB3aXRoIGF1dGhvcml6aW5nIGEgdXNlclxyXG4gKlxyXG4gKiBAYXV0aG9yIFNhbSBCdXRsZXJcclxuICogQHNpbmNlIEF1Z3VzdCAyNCwgMjAyMFxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogTG9ncyBhIHVzZXIgaW4gYW5kIGdlbmVyYXRlcyBhIEpXVCB0b2tlbiBmb3IgdGhhdCB1c2VyXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdXNlcm5hbWUgLSB1c2VybmFtZSBvZiB0aGUgdXNlclxyXG4gICAqIEBwYXJhbSBwYXNzd29yZCAtIHBhc3N3b3JkIGZvciB0aGUgdXNlclxyXG4gICAqL1xyXG4gIGF1dGhlbnRpY2F0ZSh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QoRW52aXJvbm1lbnQuQVVUSCwgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSlcclxuICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKChyZXNwb25zZSBhcyBhbnkpLnRva2VuKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==