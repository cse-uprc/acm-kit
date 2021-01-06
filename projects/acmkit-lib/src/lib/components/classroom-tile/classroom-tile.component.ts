import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ak-classroom-tile',
  templateUrl: './classroom-tile.component.html',
  styleUrls: ['./classroom-tile.component.scss'],
})
export class ClassroomTileComponent implements OnInit {
  @Input() name: string;

  constructor() {}

  ngOnInit(): void {}
}
