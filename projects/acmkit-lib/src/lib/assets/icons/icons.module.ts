import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BellIconComponent } from './bell/bell.component';
import { HouseIconComponent } from './house/house.component';
import { IconComponent } from './icon.component';

@NgModule({
  declarations: [BellIconComponent, HouseIconComponent, IconComponent],
  exports: [BellIconComponent, HouseIconComponent, IconComponent],
  imports: [BrowserModule],
})
export class IconsModule {}
