import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCandTecComponent } from './add-cand-tec.component';

describe('AddCandTecComponent', () => {
  let component: AddCandTecComponent;
  let fixture: ComponentFixture<AddCandTecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCandTecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCandTecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
