import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoUnoDetailsComponent } from './TodoUno-details.component';

describe('TodoUnoDetailsComponent', () => {
  let component: TodoUnoDetailsComponent;
  let fixture: ComponentFixture<TodoUnoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoUnoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoUnoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
