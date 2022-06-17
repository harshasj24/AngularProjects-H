import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbordComponent } from './chatbord.component';

describe('ChatbordComponent', () => {
  let component: ChatbordComponent;
  let fixture: ComponentFixture<ChatbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
