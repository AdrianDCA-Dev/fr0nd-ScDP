import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVisualizarCronogramaActividadesComponent } from './admin-visualizar-cronograma-actividades.component';

describe('AdminVisualizarCronogramaActividadesComponent', () => {
  let component: AdminVisualizarCronogramaActividadesComponent;
  let fixture: ComponentFixture<AdminVisualizarCronogramaActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVisualizarCronogramaActividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVisualizarCronogramaActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
