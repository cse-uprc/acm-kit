import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'ak-landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent implements AfterViewInit {
  @ViewChild('home') homeElement: ElementRef;
  @ViewChild('about') aboutElement: ElementRef;
  @ViewChild('feature') featureElemet: ElementRef;
  @ViewChild('team') teamElement: ElementRef;

  public currentActive = 0;
  public homeOffset: number = null;
  public aboutOffset: number = null;
  public featureOffset: number = null;
  public teamOffset: number = null;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.homeOffset = this.homeElement.nativeElement.offsetTop;
    this.aboutOffset = this.aboutElement.nativeElement.offsetTop - 500;
    this.featureOffset = this.featureElemet.nativeElement.offsetTop - 500;
    this.teamOffset = this.teamElement.nativeElement.offsetTop - 500;
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler() {
    console.log(window.pageYOffset);
    if (window.pageYOffset < 625) {
      this.currentActive = 0;
    } else if (window.pageYOffset >= 625 && window.pageYOffset < 1200) {
      this.currentActive = 1;
    } else if (window.pageYOffset >= 1200 && window.pageYOffset < 1800) {
      this.currentActive = 2;
    } else {
      this.currentActive = 3;
    }
  }

  onSignIn() {
    this.router.navigate(['/login']);
  }
}
