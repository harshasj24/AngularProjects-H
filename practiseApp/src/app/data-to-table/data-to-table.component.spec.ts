import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataToTableComponent } from './data-to-table.component';

describe('DataToTableComponent', () => {
  let component: DataToTableComponent;
  let fixture: ComponentFixture<DataToTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataToTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataToTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
