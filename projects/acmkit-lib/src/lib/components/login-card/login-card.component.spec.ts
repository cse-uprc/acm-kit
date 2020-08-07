import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcmKitTestBed } from '../../testing/acm-kit-test-bed';
import { setupTests } from '../../testing/test-setup';
import { LoginCardComponent } from './login-card.component';

describe('LoginCardComponent', () => {
  let component: LoginCardComponent;
  let fixture: ComponentFixture<LoginCardComponent>;

  setupTests(async () => AcmKitTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
