import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../../assets/globals';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.BASE = Environment.API_URL;
        this.USER_MICROSERVICE = this.BASE + "/api/acm/users";
    }
    /**
     * Method to create a new user given a User object
     *
     * @param newUser - The new user to be created
     */
    UserService.prototype.createUser = function (newUser) {
        this.http
            .post(this.USER_MICROSERVICE, newUser)
            .subscribe(function (r) { return console.log(r); });
    };
    UserService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    UserService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserService_Factory() { return new UserService(i0.ɵɵinject(i1.HttpClient)); }, token: UserService, providedIn: "root" });
    UserService = __decorate([
        Injectable({
            providedIn: 'root',
        })
        /**
         * User Service class that deal with the user microservice
         *
         * @author Sam Butler
         * @since August 31, 2020
         */
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFXbkQ7SUFHRSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUY1QixTQUFJLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUMzQixzQkFBaUIsR0FBTSxJQUFJLENBQUMsSUFBSSxtQkFBZ0IsQ0FBQztJQUNsQixDQUFDO0lBRXhDOzs7O09BSUc7SUFDSCxnQ0FBVSxHQUFWLFVBQVcsT0FBYTtRQUN0QixJQUFJLENBQUMsSUFBSTthQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDO2FBQ3JDLFNBQVMsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Z0JBWHlCLFVBQVU7OztJQUh6QixXQUFXO1FBVHZCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7UUFDRjs7Ozs7V0FLRztPQUNVLFdBQVcsQ0FldkI7c0JBN0JEO0NBNkJDLEFBZkQsSUFlQztTQWZZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy91c2VyLm1vZGVsJztcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vYXNzZXRzL2dsb2JhbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG4vKipcbiAqIFVzZXIgU2VydmljZSBjbGFzcyB0aGF0IGRlYWwgd2l0aCB0aGUgdXNlciBtaWNyb3NlcnZpY2VcbiAqXG4gKiBAYXV0aG9yIFNhbSBCdXRsZXJcbiAqIEBzaW5jZSBBdWd1c3QgMzEsIDIwMjBcbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBCQVNFID0gRW52aXJvbm1lbnQuQVBJX1VSTDtcbiAgcHJpdmF0ZSBVU0VSX01JQ1JPU0VSVklDRSA9IGAke3RoaXMuQkFTRX0vYXBpL2FjbS91c2Vyc2A7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyB1c2VyIGdpdmVuIGEgVXNlciBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIG5ld1VzZXIgLSBUaGUgbmV3IHVzZXIgdG8gYmUgY3JlYXRlZFxuICAgKi9cbiAgY3JlYXRlVXNlcihuZXdVc2VyOiBVc2VyKSB7XG4gICAgdGhpcy5odHRwXG4gICAgICAucG9zdCh0aGlzLlVTRVJfTUlDUk9TRVJWSUNFLCBuZXdVc2VyKVxuICAgICAgLnN1YnNjcmliZSgocikgPT4gY29uc29sZS5sb2cocikpO1xuICB9XG59XG4iXX0=