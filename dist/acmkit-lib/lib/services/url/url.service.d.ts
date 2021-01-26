/**
 * URL Service
 *
 * @author Sam Butler
 * @since Dec 15, 2020
 */
import * as ɵngcc0 from '@angular/core';
export declare class UrlService {
    private urlPath;
    constructor();
    /**
     * Get's the host environment
     *
     * @returns string of the host path
     */
    getHost(): string;
    /**
     * Get's the web path of the url
     *
     * @returns string of the web path
     */
    getPath(): string;
    /**
     * Get's the full web URL
     *
     * @returns string of the full web url
     */
    getWebUrl(): string;
    /**
     * Get's the full API URL
     *
     * @returns string of the full API url
     */
    getAPIUrl(): string;
    /**
     * Get's the socket environment
     *
     * @returns string of the socket path
     */
    getSocketPath(): string;
    /**
     * Determines if the url is https or http
     *
     * @returns boolean of logical comparison
     */
    isHttps(): boolean;
    /**
     * Determines if the url is local
     *
     * @returns boolean of logical comparison
     */
    isLocal(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UrlService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UrlService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsidXJsLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBVUkwgU2VydmljZVxyXG4gKlxyXG4gKiBAYXV0aG9yIFNhbSBCdXRsZXJcclxuICogQHNpbmNlIERlYyAxNSwgMjAyMFxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXJsU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHVybFBhdGg7XHJcbiAgICBjb25zdHJ1Y3RvcigpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQncyB0aGUgaG9zdCBlbnZpcm9ubWVudFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgaG9zdCBwYXRoXHJcbiAgICAgKi9cclxuICAgIGdldEhvc3QoKTogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQncyB0aGUgd2ViIHBhdGggb2YgdGhlIHVybFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgd2ViIHBhdGhcclxuICAgICAqL1xyXG4gICAgZ2V0UGF0aCgpOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIEdldCdzIHRoZSBmdWxsIHdlYiBVUkxcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgb2YgdGhlIGZ1bGwgd2ViIHVybFxyXG4gICAgICovXHJcbiAgICBnZXRXZWJVcmwoKTogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQncyB0aGUgZnVsbCBBUEkgVVJMXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSBmdWxsIEFQSSB1cmxcclxuICAgICAqL1xyXG4gICAgZ2V0QVBJVXJsKCk6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogR2V0J3MgdGhlIHNvY2tldCBlbnZpcm9ubWVudFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgc29ja2V0IHBhdGhcclxuICAgICAqL1xyXG4gICAgZ2V0U29ja2V0UGF0aCgpOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZXMgaWYgdGhlIHVybCBpcyBodHRwcyBvciBodHRwXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgYm9vbGVhbiBvZiBsb2dpY2FsIGNvbXBhcmlzb25cclxuICAgICAqL1xyXG4gICAgaXNIdHRwcygpOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSB1cmwgaXMgbG9jYWxcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBib29sZWFuIG9mIGxvZ2ljYWwgY29tcGFyaXNvblxyXG4gICAgICovXHJcbiAgICBpc0xvY2FsKCk6IGJvb2xlYW47XHJcbn1cclxuIl19