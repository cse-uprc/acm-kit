import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth/auth.service';
import { JwtService } from '../../services/jwt/jwt.service';
import { ToastService } from '../../services/toast/toast.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'ak-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
})
export class LoginCardComponent {
  twitterLink = '';
  twitterIcon =
    'https://cdn4.iconfinder.com/data/icons/miu-hexagon-flat-social/60/twitter-hexagon-social-media-32.png';

  githubLink = 'https://github.com/cse-uprc';
  githubIcon =
    'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_six_gray-256.png';

  facebookLink = '';
  facebookIcon =
    'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/Untitled-16-32.png';

  loading = false;

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly toastService: ToastService,
    private readonly jwtService: JwtService
  ) {}

  onSignIn(username: string, password: string) {
    this.loading = true;
    this.authService.authenticate(username, password).subscribe(
      (data: any) => {
        this.jwtService.setToken(data.token);
        this.router.navigate(['home']);
      },
      (error) => {
        this.toastService.createError('Invalid Username or Password!');
        this.loading = false;
      }
    );
  }

  onSignUp(firstName: string, lastName: string, email: string) {
    this.loading = true;
    const newUser: User = {
      firstName,
      lastName,
      email,
    };
    this.userService.createUser(newUser).subscribe(
      (data) => {
        this.router.navigate(['/landing']);
        this.toastService.createSuccess('User Request submitted!');
      },
      (error) => {
        this.router.navigate(['/landing']);
        this.toastService.createError('Error Processing Request!');
      }
    );
  }
}
