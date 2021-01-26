import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';
import * as ɵngcc0 from '@angular/core';
export declare class LoginCardComponent {
    private readonly authService;
    private readonly userService;
    twitterLink: string;
    twitterIcon: string;
    githubLink: string;
    githubIcon: string;
    facebookLink: string;
    facebookIcon: string;
    loading: boolean;
    constructor(authService: AuthService, userService: UserService);
    onSignIn(username: string, password: string): void;
    onSignUp(firstName: string, lastName: string, email: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LoginCardComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LoginCardComponent, "ak-login-card", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tY2FyZC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibG9naW4tY2FyZC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXIvdXNlci5zZXJ2aWNlJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTG9naW5DYXJkQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXV0aFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHVzZXJTZXJ2aWNlO1xyXG4gICAgdHdpdHRlckxpbms6IHN0cmluZztcclxuICAgIHR3aXR0ZXJJY29uOiBzdHJpbmc7XHJcbiAgICBnaXRodWJMaW5rOiBzdHJpbmc7XHJcbiAgICBnaXRodWJJY29uOiBzdHJpbmc7XHJcbiAgICBmYWNlYm9va0xpbms6IHN0cmluZztcclxuICAgIGZhY2Vib29rSWNvbjogc3RyaW5nO1xyXG4gICAgbG9hZGluZzogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKTtcclxuICAgIG9uU2lnbkluKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgb25TaWduVXAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcpOiB2b2lkO1xyXG59XHJcbiJdfQ==