import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { JwtService } from '../../services/jwt/jwt.service';
import { ToastService } from '../../services/toast/toast.service';
import { UserService } from '../../services/user/user.service';
export declare class LoginCardComponent {
    private readonly authService;
    private readonly userService;
    private readonly router;
    private readonly toastService;
    private readonly jwtService;
    twitterLink: string;
    twitterIcon: string;
    githubLink: string;
    githubIcon: string;
    facebookLink: string;
    facebookIcon: string;
    loading: boolean;
    constructor(authService: AuthService, userService: UserService, router: Router, toastService: ToastService, jwtService: JwtService);
    onSignIn(username: string, password: string): void;
    onSignUp(firstName: string, lastName: string, email: string): void;
}
