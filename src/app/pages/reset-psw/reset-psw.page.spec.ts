import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetPswPage } from './reset-psw.page';

describe('ResetPswPage', () => {
  let component: ResetPswPage;
  let fixture: ComponentFixture<ResetPswPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResetPswPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
