import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCandidatoComponent } from './edit-candidato.component';

describe('EditCandidatoComponent', () => {
  let component: EditCandidatoComponent;
  let fixture: ComponentFixture<EditCandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
