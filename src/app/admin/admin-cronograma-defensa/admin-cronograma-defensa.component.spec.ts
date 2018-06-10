import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCronogramaDefensaComponent } from './admin-cronograma-defensa.component';

describe('AdminCronogramaDefensaComponent', () => {
  let component: AdminCronogramaDefensaComponent;
  let fixture: ComponentFixture<AdminCronogramaDefensaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCronogramaDefensaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCronogramaDefensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
