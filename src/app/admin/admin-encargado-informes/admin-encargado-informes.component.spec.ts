import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEncargadoInformesComponent } from './admin-encargado-informes.component';

describe('AdminEncargadoInformesComponent', () => {
  let component: AdminEncargadoInformesComponent;
  let fixture: ComponentFixture<AdminEncargadoInformesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEncargadoInformesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEncargadoInformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
