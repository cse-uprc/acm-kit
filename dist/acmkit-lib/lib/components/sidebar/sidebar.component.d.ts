import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarItem } from '../../models/sidebar-item.model';
import * as ɵngcc0 from '@angular/core';
export declare class SiderbarComponent implements OnInit {
    private router;
    items: SidebarItem[];
    sidebarOpen: boolean;
    path: string;
    constructor(router: Router);
    ngOnInit(): void;
    route(item: SidebarItem): void;
    open(): void;
    close(): void;
    toggle(): void;
    isOpen(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SiderbarComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SiderbarComponent, "ak-sidebar", never, { "items": "items"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic2lkZWJhci5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTaWRlYmFySXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9zaWRlYmFyLWl0ZW0ubW9kZWwnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTaWRlcmJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIHJvdXRlcjtcclxuICAgIGl0ZW1zOiBTaWRlYmFySXRlbVtdO1xyXG4gICAgc2lkZWJhck9wZW46IGJvb2xlYW47XHJcbiAgICBwYXRoOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlcik7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgcm91dGUoaXRlbTogU2lkZWJhckl0ZW0pOiB2b2lkO1xyXG4gICAgb3BlbigpOiB2b2lkO1xyXG4gICAgY2xvc2UoKTogdm9pZDtcclxuICAgIHRvZ2dsZSgpOiB2b2lkO1xyXG4gICAgaXNPcGVuKCk6IGJvb2xlYW47XHJcbn1cclxuIl19