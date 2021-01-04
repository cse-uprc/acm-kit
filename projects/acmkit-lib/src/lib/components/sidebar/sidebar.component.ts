import { Component, Input } from '@angular/core';

@Component({
  selector: 'ak-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SiderbarComponent {
  @Input() items;
  constructor() {}
}
