import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParticlesService } from '../../services/particles/particles.service';
import { AcmKitTestBed } from '../../testing/acm-kit-test-bed';
import { setupTests } from '../../testing/test-setup';
import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;
  let particleService: ParticlesService;

  setupTests(async () => AcmKitTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    particleService = TestBed.inject(ParticlesService);

    spyOn(particleService, 'init');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
