import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReporteAvanceAcademicoComponent } from './admin-reporte-avance-academico.component';

describe('AdminReporteAvanceAcademicoComponent', () => {
  let component: AdminReporteAvanceAcademicoComponent;
  let fixture: ComponentFixture<AdminReporteAvanceAcademicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReporteAvanceAcademicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReporteAvanceAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
