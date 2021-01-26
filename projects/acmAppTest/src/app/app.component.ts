import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ToastService } from 'projects/acmkit-lib/src/lib/services/toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private toastService: ToastService) {}

  showToaster() {
    this.toastService.createError('User Request submitted!');
  }

  ngOnInit() {
    AOS.init();
  }
}
