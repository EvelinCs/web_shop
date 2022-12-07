import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogFoodComponent } from './dog-food.component';

describe('DogFoodComponent', () => {
  let component: DogFoodComponent;
  let fixture: ComponentFixture<DogFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
