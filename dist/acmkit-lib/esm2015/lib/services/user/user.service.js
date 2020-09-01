import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../../assets/globals';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
let UserService = 
/**
 * User Service class that deal with the user microservice
 *
 * @author Sam Butler
 * @since August 31, 2020
 */
class UserService {
    constructor(http) {
        this.http = http;
        this.BASE = Environment.API_URL;
        this.USER_MICROSERVICE = `${this.BASE}/api/acm/users`;
    }
    /**
     * Method to create a new user given a User object
     *
     * @param newUser - The new user to be created
     */
    createUser(newUser) {
        this.http
            .post(this.USER_MICROSERVICE, newUser)
            .subscribe((r) => console.log(r));
    }
};
UserService.ctorParameters = () => [
    { type: HttpClient }
];
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
export { UserService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFXbkQsSUFBYSxXQUFXO0FBTnhCOzs7OztHQUtHO0FBQ0gsTUFBYSxXQUFXO0lBR3RCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGNUIsU0FBSSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUM7UUFDM0Isc0JBQWlCLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztJQUNsQixDQUFDO0lBRXhDOzs7O09BSUc7SUFDSCxVQUFVLENBQUMsT0FBYTtRQUN0QixJQUFJLENBQUMsSUFBSTthQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDO2FBQ3JDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FDRixDQUFBOztZQVoyQixVQUFVOzs7QUFIekIsV0FBVztJQVR2QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0lBQ0Y7Ozs7O09BS0c7R0FDVSxXQUFXLENBZXZCO1NBZlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9hc3NldHMvZ2xvYmFscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbi8qKlxuICogVXNlciBTZXJ2aWNlIGNsYXNzIHRoYXQgZGVhbCB3aXRoIHRoZSB1c2VyIG1pY3Jvc2VydmljZVxuICpcbiAqIEBhdXRob3IgU2FtIEJ1dGxlclxuICogQHNpbmNlIEF1Z3VzdCAzMSwgMjAyMFxuICovXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICBwcml2YXRlIEJBU0UgPSBFbnZpcm9ubWVudC5BUElfVVJMO1xuICBwcml2YXRlIFVTRVJfTUlDUk9TRVJWSUNFID0gYCR7dGhpcy5CQVNFfS9hcGkvYWNtL3VzZXJzYDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gY3JlYXRlIGEgbmV3IHVzZXIgZ2l2ZW4gYSBVc2VyIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0gbmV3VXNlciAtIFRoZSBuZXcgdXNlciB0byBiZSBjcmVhdGVkXG4gICAqL1xuICBjcmVhdGVVc2VyKG5ld1VzZXI6IFVzZXIpIHtcbiAgICB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KHRoaXMuVVNFUl9NSUNST1NFUlZJQ0UsIG5ld1VzZXIpXG4gICAgICAuc3Vic2NyaWJlKChyKSA9PiBjb25zb2xlLmxvZyhyKSk7XG4gIH1cbn1cbiJdfQ==