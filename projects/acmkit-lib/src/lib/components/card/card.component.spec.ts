import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcmKitTestBed } from '../../testing/acm-kit-test-bed';
import { setupTests } from '../../testing/test-setup';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  setupTests(async () =>
    AcmKitTestBed.setup((moduleMetaData) => {
      moduleMetaData.declarations.push(CardComponent);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
