import { Component, Input } from '@angular/core';

@Component({
  selector: 'ak-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SiderbarComponent {
  @Input() items = [
    { name: 'Dashboard', icon: 'house' },
    { name: 'Classroom', icon: 'house' },
    { name: 'Resources', icon: 'house' },
    { name: 'Teachers', icon: 'house' },
    { name: 'Student Advisors', icon: 'house' },
    { name: 'Video Lectures', icon: 'house' },
    { name: 'Calendar Events', icon: 'house' },
    { name: 'Event Sign Up', icon: 'house' },
    { name: 'ACM Information', icon: 'house' },
    { name: 'Bot Service Info', icon: 'house' },
    { name: 'About Us', icon: 'house' },
    { name: 'Contact Services', icon: 'house' },
  ];
  constructor() {}
}
