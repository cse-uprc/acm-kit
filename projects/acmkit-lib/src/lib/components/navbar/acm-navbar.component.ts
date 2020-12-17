import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ak-navbar',
  templateUrl: './acm-navbar.component.html',
})
export class ACMNavbarComponent {
  @Input() title = '';
  constructor(protected sanitizer: DomSanitizer) {}
}
