import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTribunalNotasComponent } from './admin-tribunal-notas.component';

describe('AdminTribunalNotasComponent', () => {
  let component: AdminTribunalNotasComponent;
  let fixture: ComponentFixture<AdminTribunalNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTribunalNotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTribunalNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
