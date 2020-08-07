import { HttpClient } from '@angular/common/http';
export declare class AuthService {
    private http;
    constructor(http: HttpClient);
    authenticate(username: string, password: string): void;
}
