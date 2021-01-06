import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomTileComponent } from './classroom-tile.component';

describe('ClassroomTileComponent', () => {
  let component: ClassroomTileComponent;
  let fixture: ComponentFixture<ClassroomTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
