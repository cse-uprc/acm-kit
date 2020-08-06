import { Component } from '@angular/core';

@Component({
  selector: 'ak-login-card',
  templateUrl: './login-card.component.html',
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

  constructor() {}
}
