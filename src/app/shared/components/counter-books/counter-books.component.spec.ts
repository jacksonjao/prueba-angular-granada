import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterBooksComponent } from './counter-books.component';

describe('CounterBooksComponent', () => {
  let component: CounterBooksComponent;
  let fixture: ComponentFixture<CounterBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
