import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticlesService } from '../../services/particles/particles.service';
import { StompWebsocketService } from '../../services/stomp/stomp-websocket.service';
export declare class LandingComponent implements AfterViewInit, OnInit {
    private router;
    private particleService;
    private stompService;
    homeElement: ElementRef;
    aboutElement: ElementRef;
    featureElemet: ElementRef;
    teamElement: ElementRef;
    currentActive: number;
    homeOffset: number;
    aboutOffset: number;
    featureOffset: number;
    teamOffset: number;
    constructor(router: Router, particleService: ParticlesService, stompService: StompWebsocketService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    scrollHandler(): void;
    onSignIn(): void;
}
