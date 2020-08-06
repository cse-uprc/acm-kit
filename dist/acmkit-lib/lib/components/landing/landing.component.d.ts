import { AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
export declare class LandingComponent implements AfterViewInit {
    private router;
    homeElement: ElementRef;
    aboutElement: ElementRef;
    featureElemet: ElementRef;
    teamElement: ElementRef;
    currentActive: number;
    homeOffset: number;
    aboutOffset: number;
    featureOffset: number;
    teamOffset: number;
    constructor(router: Router);
    ngAfterViewInit(): void;
    scrollHandler(): void;
    onSignIn(): void;
}
