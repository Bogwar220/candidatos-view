import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandTecComponent } from './cand-tec.component';

describe('CandTecComponent', () => {
  let component: CandTecComponent;
  let fixture: ComponentFixture<CandTecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandTecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandTecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
