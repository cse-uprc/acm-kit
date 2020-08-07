import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcmKitTestBed } from '../../testing/acm-kit-test-bed';
import { setupTests } from '../../testing/test-setup';
import { BasePageComponent } from './base-page.component';

describe('BasePageComponent', () => {
  let component: BasePageComponent;
  let fixture: ComponentFixture<BasePageComponent>;

  setupTests(async () => AcmKitTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
