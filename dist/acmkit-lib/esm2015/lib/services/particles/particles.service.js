import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
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
ParticlesService = __decorate([
    Injectable()
], ParticlesService);
export { ParticlesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGljbGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3BhcnRpY2xlcy9wYXJ0aWNsZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQzs7Ozs7R0FLRztBQUVILElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBQzNCLGdCQUFlLENBQUM7SUFFaEI7Ozs7T0FJRztJQUNILElBQUksQ0FBQyxVQUFlO1FBQ2xCLFdBQVcsQ0FBQyxjQUFjLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FDRixDQUFBO0FBWFksZ0JBQWdCO0lBRDVCLFVBQVUsRUFBRTtHQUNBLGdCQUFnQixDQVc1QjtTQVhZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuZGVjbGFyZSB2YXIgcGFydGljbGVzSlM6IGFueTtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0byBoZWxwIG1hbmFnZSBhIHBhcnRpY2xlIGNvbmZpZy5cclxuICpcclxuICogQGF1dGhvciBTYW0gQnV0bGVyXHJcbiAqIEBzaW5jZSBBdWd1c3QgMjQsIDIwMjBcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBhcnRpY2xlc1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHBhcnRpY2xlc0pTIGJhc2VkIG9uIHRoZSBwYXNzZWQgaW4gY29uZmlnIGZpbGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb25maWdGaWxlIC0gVGhlIHBhcnRpY2xlIGNvbmZpZyBmaWxlIHdlIHdhbnQgdG8gaW5pdGlhbGl6ZVxyXG4gICAqL1xyXG4gIGluaXQoY29uZmlnRmlsZTogYW55KSB7XHJcbiAgICBwYXJ0aWNsZXNKUygncGFydGljbGVzLWpzJywgY29uZmlnRmlsZSwgKCkgPT4ge30pO1xyXG4gIH1cclxufVxyXG4iXX0=