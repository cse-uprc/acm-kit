import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './auth/auth.service';
import { JwtService } from './jwt/jwt.service';
import { ParticlesService } from './particles/particles.service';
import { StompWebsocketModule } from './stomp/stomp-websocket.module';
import { ToastService } from './toast/toast.service';
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
    ToastService,
  ],
  exports: [StompWebsocketModule],
})
export class ServicesModule {}
