import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AcmKitTestBed } from '../../testing/acm-kit-test-bed';
import { setupTests } from '../../testing/test-setup';
import { SiderbarComponent } from './sidebar.component';

describe('SiderbarComponent', () => {
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

  it('should open the sidebar', () => {
    component.close();
    expect(component.sidebarOpen).toBeFalsy();

    component.open();
    expect(component.sidebarOpen).toBeTruthy();
    expect(document.getElementById('sidebar').style.width).toEqual('16rem');
  });

  it('should close the sidebar', () => {
    expect(component.sidebarOpen).toBeTruthy();

    component.close();
    expect(component.sidebarOpen).toBeFalsy();
    expect(document.getElementById('sidebar').style.width).toEqual('3.5rem');
  });

  it('should toggle the sidebar', () => {
    expect(component.sidebarOpen).toBeTruthy();

    component.toggle();
    expect(component.sidebarOpen).toBeFalsy();
    expect(document.getElementById('sidebar').style.width).toEqual('3.5rem');

    component.toggle();
    expect(component.sidebarOpen).toBeTruthy();
    expect(document.getElementById('sidebar').style.width).toEqual('16rem');
  });
});
