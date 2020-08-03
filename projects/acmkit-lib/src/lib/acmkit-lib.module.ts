import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AcmkitLibComponent } from './acmkit-lib.component';
import { BasePageComponent } from './components/base-page/base-page.component';
import { CardComponent } from './components/card/card.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginCardComponent } from './components/login-card/login-card.component';

@NgModule({
  declarations: [
    AcmkitLibComponent,
    CardComponent,
    BasePageComponent,
    LoginCardComponent,
    LandingComponent,
  ],
  imports: [BrowserModule, RouterModule],
  exports: [
    AcmkitLibComponent,
    CardComponent,
    BasePageComponent,
    LoginCardComponent,
    LandingComponent,
  ],
  providers: [],
})
export class AcmkitLibModule {}
