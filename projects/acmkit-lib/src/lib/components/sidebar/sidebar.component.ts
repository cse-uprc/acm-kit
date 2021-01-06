import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarItem } from '../../models/sidebar-item.model';

@Component({
  selector: 'ak-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SiderbarComponent {
  @Input() items: SidebarItem[];
  constructor(private router: Router) {}

  route(item: SidebarItem) {
    this.router.navigate([item.link]);
  }
}
