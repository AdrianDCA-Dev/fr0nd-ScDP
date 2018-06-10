import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInscripcionTemaTutorComponent } from './admin-inscripcion-tema-tutor.component';

describe('AdminInscripcionTemaTutorComponent', () => {
  let component: AdminInscripcionTemaTutorComponent;
  let fixture: ComponentFixture<AdminInscripcionTemaTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInscripcionTemaTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInscripcionTemaTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
