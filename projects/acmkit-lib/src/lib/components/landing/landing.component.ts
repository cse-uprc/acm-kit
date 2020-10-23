import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ParticlesService } from '../../services/particles/particles.service';
import { LandingParticleConfig } from '../../assets/particles/landing';

@Component({
  selector: 'ak-landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent implements AfterViewInit, OnInit {
  @ViewChild('home') homeElement: ElementRef;
  @ViewChild('about') aboutElement: ElementRef;
  @ViewChild('feature') featureElemet: ElementRef;
  @ViewChild('team') teamElement: ElementRef;

  public currentActive = 0;
  public homeOffset: number = null;
  public aboutOffset: number = null;
  public featureOffset: number = null;
  public teamOffset: number = null;

  constructor(
    private router: Router,
    private particleService: ParticlesService
  ) {}

  ngOnInit() {
    this.particleService.init(LandingParticleConfig);
  }

  ngAfterViewInit() {
    this.homeOffset = this.homeElement.nativeElement.offsetTop;
    this.aboutOffset = this.aboutElement.nativeElement.offsetTop - 500;
    this.featureOffset = this.featureElemet.nativeElement.offsetTop - 500;
    this.teamOffset = this.teamElement.nativeElement.offsetTop - 500;
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler() {
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
