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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFXbkQ7SUFHRSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUY1QixTQUFJLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUMzQixzQkFBaUIsR0FBTSxJQUFJLENBQUMsSUFBSSxtQkFBZ0IsQ0FBQztJQUNsQixDQUFDO0lBRXhDOzs7O09BSUc7SUFDSCxnQ0FBVSxHQUFWLFVBQVcsT0FBYTtRQUN0QixJQUFJLENBQUMsSUFBSTthQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDO2FBQ3JDLFNBQVMsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Z0JBWHlCLFVBQVU7OztJQUh6QixXQUFXO1FBVHZCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7UUFDRjs7Ozs7V0FLRztPQUNVLFdBQVcsQ0FldkI7c0JBN0JEO0NBNkJDLEFBZkQsSUFlQztTQWZZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvdXNlci5tb2RlbCc7XHJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vYXNzZXRzL2dsb2JhbHMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuLyoqXHJcbiAqIFVzZXIgU2VydmljZSBjbGFzcyB0aGF0IGRlYWwgd2l0aCB0aGUgdXNlciBtaWNyb3NlcnZpY2VcclxuICpcclxuICogQGF1dGhvciBTYW0gQnV0bGVyXHJcbiAqIEBzaW5jZSBBdWd1c3QgMzEsIDIwMjBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBCQVNFID0gRW52aXJvbm1lbnQuQVBJX1VSTDtcclxuICBwcml2YXRlIFVTRVJfTUlDUk9TRVJWSUNFID0gYCR7dGhpcy5CQVNFfS9hcGkvYWNtL3VzZXJzYDtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1ldGhvZCB0byBjcmVhdGUgYSBuZXcgdXNlciBnaXZlbiBhIFVzZXIgb2JqZWN0XHJcbiAgICpcclxuICAgKiBAcGFyYW0gbmV3VXNlciAtIFRoZSBuZXcgdXNlciB0byBiZSBjcmVhdGVkXHJcbiAgICovXHJcbiAgY3JlYXRlVXNlcihuZXdVc2VyOiBVc2VyKSB7XHJcbiAgICB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QodGhpcy5VU0VSX01JQ1JPU0VSVklDRSwgbmV3VXNlcilcclxuICAgICAgLnN1YnNjcmliZSgocikgPT4gY29uc29sZS5sb2cocikpO1xyXG4gIH1cclxufVxyXG4iXX0=