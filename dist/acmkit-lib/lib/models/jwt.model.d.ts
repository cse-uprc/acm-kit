export interface JwtToken {
    userId: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    exp: number;
    sub: string;
    iat: number;
}
