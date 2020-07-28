import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcmkitLibModule } from 'acmkit-lib';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AcmkitLibModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
