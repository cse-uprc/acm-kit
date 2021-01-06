import { Router } from '@angular/router';
import { SidebarItem } from '../../models/sidebar-item.model';
export declare class SiderbarComponent {
    private router;
    items: SidebarItem[];
    constructor(router: Router);
    route(item: SidebarItem): void;
}
