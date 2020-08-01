import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class CardComponent implements OnInit {
    private router;
    title: string;
    editRoute: string;
    constructor(router: Router);
    ngOnInit(): void;
    onEditClick(): void;
    static ɵfac: i0.ɵɵFactoryDef<CardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CardComponent, "ak-card", never, { "title": "title"; "editRoute": "editRoute"; }, {}, never, ["*"]>;
}
