import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProyectosFinalesComponent } from './admin-proyectos-finales.component';

describe('AdminProyectosFinalesComponent', () => {
  let component: AdminProyectosFinalesComponent;
  let fixture: ComponentFixture<AdminProyectosFinalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProyectosFinalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProyectosFinalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
