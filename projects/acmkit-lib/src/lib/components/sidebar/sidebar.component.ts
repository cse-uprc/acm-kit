import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarItem } from '../../models/sidebar-item.model';

@Component({
  selector: 'ak-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SiderbarComponent implements OnInit {
  @Input() items: SidebarItem[] = [
    { name: 'Dashboard', icon: 'house', link: '/home/dashboard' },
    { name: 'Classroom', icon: 'classroom', link: '/home/classroom' },
    { name: 'Resources', icon: 'resources', link: '/home/resources' },
    { name: 'Teachers', icon: 'teachers', link: '/home/teachers' },
    {
      name: 'Student Advisors',
      icon: 'board-members',
      link: '/home/student-advisors',
    },
    { name: 'Video Lectures', icon: 'video', link: '/home/video-lectures' },
    { name: 'Calendar', icon: 'calendar', link: '/home/calendar' },
    { name: 'Event Sign Up', icon: 'contract', link: '/home/event-sign-up' },
    { name: 'ACM Information', icon: 'info', link: '/home/acm-information' },
    { name: 'Bot Service Info', icon: 'robot', link: '/home/bot-service-info' },
    { name: 'About Us', icon: 'question', link: '/home/about-us' },
    {
      name: 'Contact Services',
      icon: 'contact',
      link: '/home/contact-services',
    },
  ];
  sidebarOpen = true;
  path: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.path = window.location.pathname;
  }

  route(item: SidebarItem) {
    this.path = item.link;
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
