import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AcmKitTestBed } from '../../testing/acm-kit-test-bed';
import { setupTests } from '../../testing/test-setup';
import { SiderbarComponent } from './sidebar.component';

describe('LoginCardComponent', () => {
  let component: SiderbarComponent;
  let fixture: ComponentFixture<SiderbarComponent>;
  let router: Router;

  setupTests(async () => AcmKitTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderbarComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);

    spyOn(router, 'navigate');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should route to the desired page based on given SidebarItem', () => {
    component.route({ name: 'Test Item', link: 'test/route' });

    expect(router.navigate).toHaveBeenCalledWith(['test/route']);
  });
});
