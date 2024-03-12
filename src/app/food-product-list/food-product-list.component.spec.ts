import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodProductListComponent } from './food-product-list.component';

describe('FoodProductListComponent', () => {
  let component: FoodProductListComponent;
  let fixture: ComponentFixture<FoodProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
