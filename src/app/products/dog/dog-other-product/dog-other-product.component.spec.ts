import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogOtherProductComponent } from './dog-other-product.component';

describe('DogOtherProductComponent', () => {
  let component: DogOtherProductComponent;
  let fixture: ComponentFixture<DogOtherProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogOtherProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogOtherProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
