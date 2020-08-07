import { AuthService } from '../../services/auth/auth.service';
export declare class LoginCardComponent {
    private readonly authService;
    twitterLink: string;
    twitterIcon: string;
    githubLink: string;
    githubIcon: string;
    facebookLink: string;
    facebookIcon: string;
    constructor(authService: AuthService);
    onSignIn(username: string, password: string): void;
}
