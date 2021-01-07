import { Component, OnInit, ViewChild } from '@angular/core';
import { SiderbarComponent } from 'acmkit-lib';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'acmAppTest';
  @ViewChild(SiderbarComponent, { static: false }) sidebar: SiderbarComponent;

  ngOnInit() {
    AOS.init();
  }

  toggleSidebar(event) {
    this.sidebar.toggle();
  }
}
