import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarea1 } from './tarea1';

describe('Tarea1', () => {
  let component: Tarea1;
  let fixture: ComponentFixture<Tarea1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarea1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarea1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
