import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTribunalComponent } from './admin-tribunal.component';

describe('AdminTribunalComponent', () => {
  let component: AdminTribunalComponent;
  let fixture: ComponentFixture<AdminTribunalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTribunalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTribunalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
