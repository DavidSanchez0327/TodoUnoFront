import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SofkianoDetailsComponent } from './TodoUno-details.component';

describe('SofkianoDetailsComponent', () => {
  let component: SofkianoDetailsComponent;
  let fixture: ComponentFixture<SofkianoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SofkianoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SofkianoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
