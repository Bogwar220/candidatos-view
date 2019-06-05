import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTituloComponent } from './add-titulo.component';

describe('AddTituloComponent', () => {
  let component: AddTituloComponent;
  let fixture: ComponentFixture<AddTituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
