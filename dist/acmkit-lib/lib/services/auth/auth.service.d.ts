import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UrlService } from '../url/url.service';
/**
 * Auth service class that deals with authorizing a user
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
import * as ɵngcc0 from '@angular/core';
export declare class AuthService {
    private http;
    private urlService;
    private router;
    constructor(http: HttpClient, urlService: UrlService, router: Router);
    /**
     * Logs a user in and generates a JWT token for that user
     *
     * @param username - username of the user
     * @param password - password for the user
     */
    authenticate(username: string, password: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AuthService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<AuthService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImF1dGguc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVXJsU2VydmljZSB9IGZyb20gJy4uL3VybC91cmwuc2VydmljZSc7XHJcbi8qKlxyXG4gKiBBdXRoIHNlcnZpY2UgY2xhc3MgdGhhdCBkZWFscyB3aXRoIGF1dGhvcml6aW5nIGEgdXNlclxyXG4gKlxyXG4gKiBAYXV0aG9yIFNhbSBCdXRsZXJcclxuICogQHNpbmNlIEF1Z3VzdCAyNCwgMjAyMFxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBodHRwO1xyXG4gICAgcHJpdmF0ZSB1cmxTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSByb3V0ZXI7XHJcbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50LCB1cmxTZXJ2aWNlOiBVcmxTZXJ2aWNlLCByb3V0ZXI6IFJvdXRlcik7XHJcbiAgICAvKipcclxuICAgICAqIExvZ3MgYSB1c2VyIGluIGFuZCBnZW5lcmF0ZXMgYSBKV1QgdG9rZW4gZm9yIHRoYXQgdXNlclxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1c2VybmFtZSAtIHVzZXJuYW1lIG9mIHRoZSB1c2VyXHJcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmQgLSBwYXNzd29yZCBmb3IgdGhlIHVzZXJcclxuICAgICAqL1xyXG4gICAgYXV0aGVudGljYXRlKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiB2b2lkO1xyXG59XHJcbiJdfQ==