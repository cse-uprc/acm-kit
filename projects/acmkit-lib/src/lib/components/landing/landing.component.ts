import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

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
    if (window.pageYOffset / 4 < 40) {
      this.currentActive = 0;
    } else if (window.pageYOffset / 4 >= 40 && window.pageYOffset / 4 < 162) {
      this.currentActive = 1;
    } else if (window.pageYOffset / 4 >= 162 && window.pageYOffset / 4 < 284) {
      this.currentActive = 2;
    } else {
      this.currentActive = 3;
    }
  }

  onSignIn() {
    this.router.navigate(['/login']);
  }
}
