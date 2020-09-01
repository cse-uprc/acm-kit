import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';
export declare class LoginCardComponent {
    private readonly authService;
    private readonly userService;
    twitterLink: string;
    twitterIcon: string;
    githubLink: string;
    githubIcon: string;
    facebookLink: string;
    facebookIcon: string;
    constructor(authService: AuthService, userService: UserService);
    onSignIn(username: string, password: string): void;
    onSignUp(firstName: string, lastName: string, email: string): void;
}
