import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './auth/auth.service';
import { ParticlesService } from './particles/particles.service';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  providers: [AuthService, ParticlesService],
})
export class ServicesModule {}
