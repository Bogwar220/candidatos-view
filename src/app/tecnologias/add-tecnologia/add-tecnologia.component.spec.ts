import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTecnologiaComponent } from './add-tecnologia.component';

describe('AddTecnologiaComponent', () => {
  let component: AddTecnologiaComponent;
  let fixture: ComponentFixture<AddTecnologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTecnologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
