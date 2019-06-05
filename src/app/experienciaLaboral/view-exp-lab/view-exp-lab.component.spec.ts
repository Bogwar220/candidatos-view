import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExpLabComponent } from './view-exp-lab.component';

describe('ViewExpLabComponent', () => {
  let component: ViewExpLabComponent;
  let fixture: ComponentFixture<ViewExpLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExpLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExpLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
