import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReporteCronogramaComponent } from './admin-reporte-cronograma.component';

describe('AdminReporteCronogramaComponent', () => {
  let component: AdminReporteCronogramaComponent;
  let fixture: ComponentFixture<AdminReporteCronogramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReporteCronogramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReporteCronogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
