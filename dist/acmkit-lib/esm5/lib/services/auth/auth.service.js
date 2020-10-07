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
    AuthService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.ɵɵinject(i1.HttpClient)); }, token: AuthService, providedIn: "root" });
    AuthService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFFbkQ7Ozs7O0dBS0c7QUFJSDtJQUNFLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQztJQUV4Qzs7Ozs7T0FLRztJQUNILGtDQUFZLEdBQVosVUFBYSxRQUFnQixFQUFFLFFBQWdCO1FBQzdDLElBQUksQ0FBQyxJQUFJO2FBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLFVBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDO2FBQzlDLFNBQVMsQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUUsUUFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBcEMsQ0FBb0MsQ0FBQyxDQUFDO0lBQ25FLENBQUM7O2dCQVp5QixVQUFVOzs7SUFEekIsV0FBVztRQUh2QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csV0FBVyxDQWN2QjtzQkEzQkQ7Q0EyQkMsQUFkRCxJQWNDO1NBZFksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9hc3NldHMvZ2xvYmFscyc7XHJcblxyXG4vKipcclxuICogQXV0aCBzZXJ2aWNlIGNsYXNzIHRoYXQgZGVhbHMgd2l0aCBhdXRob3JpemluZyBhIHVzZXJcclxuICpcclxuICogQGF1dGhvciBTYW0gQnV0bGVyXHJcbiAqIEBzaW5jZSBBdWd1c3QgMjQsIDIwMjBcclxuICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICAvKipcclxuICAgKiBMb2dzIGEgdXNlciBpbiBhbmQgZ2VuZXJhdGVzIGEgSldUIHRva2VuIGZvciB0aGF0IHVzZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB1c2VybmFtZSAtIHVzZXJuYW1lIG9mIHRoZSB1c2VyXHJcbiAgICogQHBhcmFtIHBhc3N3b3JkIC0gcGFzc3dvcmQgZm9yIHRoZSB1c2VyXHJcbiAgICovXHJcbiAgYXV0aGVudGljYXRlKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdChFbnZpcm9ubWVudC5BVVRILCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9KVxyXG4gICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4gY29uc29sZS5sb2coKHJlc3BvbnNlIGFzIGFueSkudG9rZW4pKTtcclxuICB9XHJcbn1cclxuIl19