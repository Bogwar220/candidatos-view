import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpLabComponent } from './add-exp-lab.component';

describe('AddExpLabComponent', () => {
  let component: AddExpLabComponent;
  let fixture: ComponentFixture<AddExpLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExpLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
