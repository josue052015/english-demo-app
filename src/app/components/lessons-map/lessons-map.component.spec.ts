import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsMapComponent } from './lessons-map.component';

describe('LessonsMapComponent', () => {
  let component: LessonsMapComponent;
  let fixture: ComponentFixture<LessonsMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
