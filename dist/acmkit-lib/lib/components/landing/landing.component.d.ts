import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticlesService } from '../../services/particles/particles.service';
export declare class LandingComponent implements AfterViewInit, OnInit {
    private router;
    private particleService;
    homeElement: ElementRef;
    aboutElement: ElementRef;
    featureElemet: ElementRef;
    teamElement: ElementRef;
    currentActive: number;
    homeOffset: number;
    aboutOffset: number;
    featureOffset: number;
    teamOffset: number;
    constructor(router: Router, particleService: ParticlesService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    scrollHandler(): void;
    onSignIn(): void;
}
