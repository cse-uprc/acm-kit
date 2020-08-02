import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
export declare class CardComponent implements OnInit {
    private router;
    title: string;
    editRoute: string;
    constructor(router: Router);
    ngOnInit(): void;
    onEditClick(): void;
}
