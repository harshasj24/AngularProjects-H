import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VscomputerComponent } from './vscomputer.component';

describe('VscomputerComponent', () => {
  let component: VscomputerComponent;
  let fixture: ComponentFixture<VscomputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VscomputerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VscomputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
