import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFoodProductComponent } from './edit-food-product.component';

describe('EditFoodProductComponent', () => {
  let component: EditFoodProductComponent;
  let fixture: ComponentFixture<EditFoodProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFoodProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFoodProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
