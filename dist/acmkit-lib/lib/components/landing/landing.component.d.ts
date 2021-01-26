import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticlesService } from '../../services/particles/particles.service';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LandingComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LandingComponent, "ak-landing", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZGluZy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibGFuZGluZy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUGFydGljbGVzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BhcnRpY2xlcy9wYXJ0aWNsZXMuc2VydmljZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExhbmRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSByb3V0ZXI7XHJcbiAgICBwcml2YXRlIHBhcnRpY2xlU2VydmljZTtcclxuICAgIGhvbWVFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gICAgYWJvdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gICAgZmVhdHVyZUVsZW1ldDogRWxlbWVudFJlZjtcclxuICAgIHRlYW1FbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gICAgY3VycmVudEFjdGl2ZTogbnVtYmVyO1xyXG4gICAgaG9tZU9mZnNldDogbnVtYmVyO1xyXG4gICAgYWJvdXRPZmZzZXQ6IG51bWJlcjtcclxuICAgIGZlYXR1cmVPZmZzZXQ6IG51bWJlcjtcclxuICAgIHRlYW1PZmZzZXQ6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyLCBwYXJ0aWNsZVNlcnZpY2U6IFBhcnRpY2xlc1NlcnZpY2UpO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xyXG4gICAgc2Nyb2xsSGFuZGxlcigpOiB2b2lkO1xyXG4gICAgb25TaWduSW4oKTogdm9pZDtcclxufVxyXG4iXX0=