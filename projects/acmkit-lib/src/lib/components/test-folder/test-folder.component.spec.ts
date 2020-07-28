import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFolderComponent } from './test-folder.component';

describe('TestFolderComponent', () => {
  let component: TestFolderComponent;
  let fixture: ComponentFixture<TestFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
