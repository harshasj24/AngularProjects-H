import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictroypopupComponent } from './victroypopup.component';

describe('VictroypopupComponent', () => {
  let component: VictroypopupComponent;
  let fixture: ComponentFixture<VictroypopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VictroypopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VictroypopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
