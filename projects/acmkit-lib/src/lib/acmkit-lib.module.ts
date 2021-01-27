import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AcmkitLibComponent } from './acmkit-lib.component';
import { IconsModule } from './assets/icons/icons.module';
import { BasePageComponent } from './components/base-page/base-page.component';
import { CardComponent } from './components/card/card.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SiderbarComponent } from './components/sidebar/sidebar.component';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AcmkitLibComponent,
    BasePageComponent,
    LoginCardComponent,
    LandingComponent,
    NavbarComponent,
    SiderbarComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServicesModule,
    IconsModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    AcmkitLibComponent,
    BasePageComponent,
    LoginCardComponent,
    LandingComponent,
    NavbarComponent,
    SiderbarComponent,
    ServicesModule,
    IconsModule,
    CardComponent,
  ],
})
export class AcmkitLibModule {}
