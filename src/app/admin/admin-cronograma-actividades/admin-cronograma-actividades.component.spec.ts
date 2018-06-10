import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCronogramaActividadesComponent } from './admin-cronograma-actividades.component';

describe('AdminCronogramaActividadesComponent', () => {
  let component: AdminCronogramaActividadesComponent;
  let fixture: ComponentFixture<AdminCronogramaActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCronogramaActividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCronogramaActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
