import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AcmkitLibModule } from 'acmkit-lib';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot([]), AcmkitLibModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
