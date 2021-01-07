import { EventEmitter } from '@angular/core';
export declare class NavbarComponent {
    title: string;
    sidebarClicked: EventEmitter<boolean>;
    constructor();
    toggleSidebar(): void;
}
