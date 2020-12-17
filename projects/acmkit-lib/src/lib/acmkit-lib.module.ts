import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AcmkitLibComponent } from './acmkit-lib.component';
import { IconsModule } from './assets/icons/icons.module';
import { BasePageComponent } from './components/base-page/base-page.component';
import { CardComponent } from './components/card/card.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { ACMNavbarComponent } from './components/navbar/acm-navbar.component';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AcmkitLibComponent,
    CardComponent,
    BasePageComponent,
    LoginCardComponent,
    LandingComponent,
    ACMNavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServicesModule,
    IconsModule,
  ],
  exports: [
    AcmkitLibComponent,
    CardComponent,
    BasePageComponent,
    LoginCardComponent,
    LandingComponent,
    ACMNavbarComponent,
    ServicesModule,
    IconsModule,
  ],
})
export class AcmkitLibModule {}
