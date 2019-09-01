import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoUnoNewModalComponent } from './TodoUno-new-modal.component';

describe('TodoUnoNewModalComponent', () => {
  let component: TodoUnoNewModalComponent;
  let fixture: ComponentFixture<TodoUnoNewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoUnoNewModalComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoUnoNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
