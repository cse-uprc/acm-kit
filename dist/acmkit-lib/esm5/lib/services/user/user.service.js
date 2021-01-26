import { __decorate } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
/**
 * User Service class that deal with the user microservice
 *
 * @author Sam Butler
 * @since August 31, 2020
 */
var UserService = /** @class */ (function () {
    function UserService(http, urlService) {
        this.http = http;
        this.urlService = urlService;
    }
    /**
     * Method to create a new user given a User object
     *
     * @param newUser - The new user to be created
     */
    UserService.prototype.createUser = function (newUser) {
        return this.http.post(this.urlService.getAPIUrl() + "/api/acm/users/dim-user", newUser);
    };
    UserService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: UrlService }
    ]; };
    UserService = __decorate([
        Injectable()
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhEOzs7OztHQUtHO0FBRUg7SUFDRSxxQkFBb0IsSUFBZ0IsRUFBVSxVQUFzQjtRQUFoRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFHLENBQUM7SUFFeEU7Ozs7T0FJRztJQUNILGdDQUFVLEdBQVYsVUFBVyxPQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLDRCQUF5QixFQUN2RCxPQUFPLENBQ1IsQ0FBQztJQUNKLENBQUM7O2dCQVp5QixVQUFVO2dCQUFzQixVQUFVOztJQUR6RCxXQUFXO1FBRHZCLFVBQVUsRUFBRTtPQUNBLFdBQVcsQ0FjdkI7SUFBRCxrQkFBQztDQUFBLEFBZEQsSUFjQztTQWRZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy91c2VyLm1vZGVsJztcclxuaW1wb3J0IHsgVXJsU2VydmljZSB9IGZyb20gJy4uL3VybC91cmwuc2VydmljZSc7XHJcblxyXG4vKipcclxuICogVXNlciBTZXJ2aWNlIGNsYXNzIHRoYXQgZGVhbCB3aXRoIHRoZSB1c2VyIG1pY3Jvc2VydmljZVxyXG4gKlxyXG4gKiBAYXV0aG9yIFNhbSBCdXRsZXJcclxuICogQHNpbmNlIEF1Z3VzdCAzMSwgMjAyMFxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSB1cmxTZXJ2aWNlOiBVcmxTZXJ2aWNlKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBNZXRob2QgdG8gY3JlYXRlIGEgbmV3IHVzZXIgZ2l2ZW4gYSBVc2VyIG9iamVjdFxyXG4gICAqXHJcbiAgICogQHBhcmFtIG5ld1VzZXIgLSBUaGUgbmV3IHVzZXIgdG8gYmUgY3JlYXRlZFxyXG4gICAqL1xyXG4gIGNyZWF0ZVVzZXIobmV3VXNlcjogVXNlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgIGAke3RoaXMudXJsU2VydmljZS5nZXRBUElVcmwoKX0vYXBpL2FjbS91c2Vycy9kaW0tdXNlcmAsXHJcbiAgICAgIG5ld1VzZXJcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==