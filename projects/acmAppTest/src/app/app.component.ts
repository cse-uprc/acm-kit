import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ParticlesConfig } from '../assets/particles';
declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'acmAppTest';

  ngOnInit() {
    AOS.init();
    particlesJS('particles-js', ParticlesConfig, function () {});
  }
}
