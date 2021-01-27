import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
export declare class CardComponent implements OnInit {
    private router;
    title: string;
    width: string;
    cardOpen: boolean;
    constructor(router: Router);
    ngOnInit(): void;
    toggleCollapse(): void;
    closeCard(): void;
    openCard(): void;
}
