import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BellIconComponent } from './bell/bell.component';
import { BoardMemebersIconComponent } from './board-members/board-members.component';
import { CalendarIconComponent } from './calendar/calendar.component';
import { ClassroomIconComponent } from './classroom/classroom.component';
import { ContactIconComponent } from './contact/contact.component';
import { ContractIconComponent } from './contract/contract.component';
import { HamburgerIconComponent } from './hamburger/hamburger.component';
import { HouseIconComponent } from './house/house.component';
import { IconComponent } from './icon.component';
import { InfoIconComponent } from './info/info.component';
import { QuestionIconComponent } from './question/question.component';
import { ResourcesIconComponent } from './resources/resources.component';
import { RobotIconComponent } from './robot/robot.component';
import { TeachersIconComponent } from './teachers/teachers.component';
import { VideoIconComponent } from './video/video.component';

@NgModule({
  declarations: [
    BellIconComponent,
    HouseIconComponent,
    IconComponent,
    HamburgerIconComponent,
    VideoIconComponent,
    ClassroomIconComponent,
    ResourcesIconComponent,
    TeachersIconComponent,
    BoardMemebersIconComponent,
    ContractIconComponent,
    CalendarIconComponent,
    InfoIconComponent,
    RobotIconComponent,
    QuestionIconComponent,
    ContactIconComponent,
  ],
  exports: [
    BellIconComponent,
    HouseIconComponent,
    IconComponent,
    HamburgerIconComponent,
    VideoIconComponent,
    ClassroomIconComponent,
    ResourcesIconComponent,
    TeachersIconComponent,
    BoardMemebersIconComponent,
    ContractIconComponent,
    CalendarIconComponent,
    InfoIconComponent,
    RobotIconComponent,
    QuestionIconComponent,
    ContactIconComponent,
  ],
  imports: [BrowserModule],
})
export class IconsModule {}
