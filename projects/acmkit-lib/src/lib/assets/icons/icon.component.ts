import { Component, Input } from '@angular/core';

@Component({
  selector: 'ak-icon',
  templateUrl: './icon.component.html',
})
export class IconComponent {
  @Input() icon = '';

  constructor() {}
}
