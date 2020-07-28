import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTestTitleComponent } from './angular-test-title.component';

describe('AngularTestTitleComponent', () => {
  let component: AngularTestTitleComponent;
  let fixture: ComponentFixture<AngularTestTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTestTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTestTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
