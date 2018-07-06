import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListEstudianteTutorComponent } from './admin-list-estudiante-tutor.component';

describe('AdminListEstudianteTutorComponent', () => {
  let component: AdminListEstudianteTutorComponent;
  let fixture: ComponentFixture<AdminListEstudianteTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListEstudianteTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListEstudianteTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
