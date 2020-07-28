import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcmkitLibComponent } from './acmkit-lib.component';

describe('AcmkitLibComponent', () => {
  let component: AcmkitLibComponent;
  let fixture: ComponentFixture<AcmkitLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcmkitLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcmkitLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
