import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExpLabComponent } from './edit-exp-lab.component';

describe('EditExpLabComponent', () => {
  let component: EditExpLabComponent;
  let fixture: ComponentFixture<EditExpLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditExpLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExpLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
