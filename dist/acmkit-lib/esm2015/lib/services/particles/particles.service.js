import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Class to help manage a particle config.
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
let ParticlesService = class ParticlesService {
    constructor() { }
    /**
     * Initializes the particlesJS based on the passed in config file
     *
     * @param configFile - The particle config file we want to initialize
     */
    init(configFile) {
        particlesJS('particles-js', configFile, () => { });
    }
};
ParticlesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ParticlesService_Factory() { return new ParticlesService(); }, token: ParticlesService, providedIn: "root" });
ParticlesService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ParticlesService);
export { ParticlesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGljbGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3BhcnRpY2xlcy9wYXJ0aWNsZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0M7Ozs7O0dBS0c7QUFJSCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUMzQixnQkFBZSxDQUFDO0lBRWhCOzs7O09BSUc7SUFDSCxJQUFJLENBQUMsVUFBZTtRQUNsQixXQUFXLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQ0YsQ0FBQTs7QUFYWSxnQkFBZ0I7SUFINUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGdCQUFnQixDQVc1QjtTQVhZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuZGVjbGFyZSB2YXIgcGFydGljbGVzSlM6IGFueTtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0byBoZWxwIG1hbmFnZSBhIHBhcnRpY2xlIGNvbmZpZy5cclxuICpcclxuICogQGF1dGhvciBTYW0gQnV0bGVyXHJcbiAqIEBzaW5jZSBBdWd1c3QgMjQsIDIwMjBcclxuICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXJ0aWNsZXNTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemVzIHRoZSBwYXJ0aWNsZXNKUyBiYXNlZCBvbiB0aGUgcGFzc2VkIGluIGNvbmZpZyBmaWxlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY29uZmlnRmlsZSAtIFRoZSBwYXJ0aWNsZSBjb25maWcgZmlsZSB3ZSB3YW50IHRvIGluaXRpYWxpemVcclxuICAgKi9cclxuICBpbml0KGNvbmZpZ0ZpbGU6IGFueSkge1xyXG4gICAgcGFydGljbGVzSlMoJ3BhcnRpY2xlcy1qcycsIGNvbmZpZ0ZpbGUsICgpID0+IHt9KTtcclxuICB9XHJcbn1cclxuIl19