import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditOrCreateBookComponent } from './form-edit-or-create-book.component';

describe('FormEditOrCreateBookComponent', () => {
  let component: FormEditOrCreateBookComponent;
  let fixture: ComponentFixture<FormEditOrCreateBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEditOrCreateBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditOrCreateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
