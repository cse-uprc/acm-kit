import { JwtToken } from 'projects/acmkit-lib/src/lib/models/jwt.model';

export class JwtServiceTestData {
  public get token(): any {
    return {
      value:
        'eyJhbGciOiJIUzUxMiJ9.eyJmaXJzdE5hbWUiOiJTYW0iLCJsYXN0TmFtZSI6IkJ1dGxlciIsInN1YiI6InNhbWJ1dGxlcjEwMTciLCJwYXNzd29yZCI6ImJmNDAwYTJlMWIzYTE5Yjk3NDkxNTY0MGFhNmZlN2I3ZDU3NjEwNDY3M2NkOWIzNWYyOTc3Yzg3Y2Q1YTE5N2EiLCJleHAiOjE1OTgzMjkzNDUsInVzZXJJZCI6MiwiaWF0IjoxNTk4MzExMzQ1LCJ1c2VybmFtZSI6InNhbWJ1dGxlcjEwMTcifQ.qbJQnvKL5B4OaTJsGgAoRNMoBjg_dL9CCsLmJ1MyHEwWRoceFw-lG1DUgHQX9BI4LzTtexbdOKlW7Uz94IZ6lA',
      expiration: new Date('2020-08-25T00:22:25'),
      decoded: this.decodedToken,
    };
  }

  public get decodedToken(): JwtToken {
    return {
      userId: 2,
      firstName: 'Sam',
      lastName: 'Butler',
      username: 'sambutler1017',
      password:
        'bf400a2e1b3a19b974915640aa6fe7b7d576104673cd9b35f2977c87cd5a197a',
      exp: 1598329345,
      iat: 1598311345,
      sub: 'sambutler1017',
    };
  }
}

export const JwtTestData = new JwtServiceTestData();
