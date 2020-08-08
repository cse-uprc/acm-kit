import { __decorate } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../assets/globals';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFLbkQ7SUFDRSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7SUFFeEMsa0NBQVksR0FBWixVQUFhLFFBQWdCLEVBQUUsUUFBZ0I7UUFDN0MsSUFBSSxDQUFDLElBQUk7YUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsVUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUM7YUFDOUMsU0FBUyxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBRSxRQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFwQyxDQUFvQyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Z0JBTnlCLFVBQVU7OztJQUR6QixXQUFXO1FBSHZCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxXQUFXLENBUXZCO3NCQWZEO0NBZUMsQUFSRCxJQVFDO1NBUlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9hc3NldHMvZ2xvYmFscyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgYXV0aGVudGljYXRlKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdChFbnZpcm9ubWVudC5BVVRILCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9KVxyXG4gICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4gY29uc29sZS5sb2coKHJlc3BvbnNlIGFzIGFueSkudG9rZW4pKTtcclxuICB9XHJcbn1cclxuIl19