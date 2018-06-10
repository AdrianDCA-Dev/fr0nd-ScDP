import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlanillaControlTutorComponent } from './admin-planilla-control-tutor.component';

describe('AdminPlanillaControlTutorComponent', () => {
  let component: AdminPlanillaControlTutorComponent;
  let fixture: ComponentFixture<AdminPlanillaControlTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPlanillaControlTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPlanillaControlTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
