import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ak-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() title = '';
  @Output() sidebarClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  toggleSidebar() {
    this.sidebarClicked.emit(true);
  }
}
