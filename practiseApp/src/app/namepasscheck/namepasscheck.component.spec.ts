import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamepasscheckComponent } from './namepasscheck.component';

describe('NamepasscheckComponent', () => {
  let component: NamepasscheckComponent;
  let fixture: ComponentFixture<NamepasscheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamepasscheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamepasscheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
