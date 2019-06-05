import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTituloComponent } from './edit-titulo.component';

describe('EditTituloComponent', () => {
  let component: EditTituloComponent;
  let fixture: ComponentFixture<EditTituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
