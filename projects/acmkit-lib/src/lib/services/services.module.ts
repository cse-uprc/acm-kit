import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './auth/auth.service';
import { JwtService } from './jwt/jwt.service';
import { ParticlesService } from './particles/particles.service';
import { StompWebsocketService } from './stomp/stomp-websocket.service';
import { UrlService } from './url/url.service';
import { UserService } from './user/user.service';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  providers: [
    AuthService,
    ParticlesService,
    UserService,
    JwtService,
    UrlService,
    StompWebsocketService,
  ],
})
export class ServicesModule {}
