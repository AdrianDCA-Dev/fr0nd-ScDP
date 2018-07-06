import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReporteDefensaModalidadComponent } from './admin-reporte-defensa-modalidad.component';

describe('AdminReporteDefensaModalidadComponent', () => {
  let component: AdminReporteDefensaModalidadComponent;
  let fixture: ComponentFixture<AdminReporteDefensaModalidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReporteDefensaModalidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReporteDefensaModalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
