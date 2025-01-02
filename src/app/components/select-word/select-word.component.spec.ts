import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWordComponent } from './select-word.component';

describe('SelectWordComponent', () => {
  let component: SelectWordComponent;
  let fixture: ComponentFixture<SelectWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
