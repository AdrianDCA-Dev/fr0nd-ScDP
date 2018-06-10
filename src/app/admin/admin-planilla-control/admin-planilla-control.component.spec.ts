import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlanillaControlComponent } from './admin-planilla-control.component';

describe('AdminPlanillaControlComponent', () => {
  let component: AdminPlanillaControlComponent;
  let fixture: ComponentFixture<AdminPlanillaControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPlanillaControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPlanillaControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
