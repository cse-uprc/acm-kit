import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarItem } from '../../models/sidebar-item.model';

@Component({
  selector: 'ak-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SiderbarComponent implements OnInit {
  @Input() items: SidebarItem[];
  sidebarOpen = true;
  path: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.path = window.location.pathname;
  }

  route(item: SidebarItem) {
    this.router.navigate([item.link]);
  }

  open() {
    document.getElementById('sidebar').style.width = '16rem';
    this.sidebarOpen = true;
  }

  close() {
    document.getElementById('sidebar').style.width = '3.5rem';
    this.sidebarOpen = false;
  }

  toggle() {
    if (this.sidebarOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  isOpen() {
    return this.sidebarOpen;
  }
}
