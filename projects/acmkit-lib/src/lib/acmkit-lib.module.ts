import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AcmkitLibComponent } from './acmkit-lib.component';
import { BasePageComponent } from './components/base-page/base-page.component';
import { CardComponent } from './components/card/card.component';
import { LoginCardComponent } from './components/login-card/login-card.component';

@NgModule({
  declarations: [AcmkitLibComponent, CardComponent, BasePageComponent, LoginCardComponent],
  imports: [BrowserModule, RouterModule],
  exports: [AcmkitLibComponent, CardComponent, BasePageComponent, LoginCardComponent],
  providers: [],
})
export class AcmkitLibModule {}
