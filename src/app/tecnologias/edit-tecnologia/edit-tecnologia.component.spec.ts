import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTecnologiaComponent } from './edit-tecnologia.component';

describe('EditTecnologiaComponent', () => {
  let component: EditTecnologiaComponent;
  let fixture: ComponentFixture<EditTecnologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTecnologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
