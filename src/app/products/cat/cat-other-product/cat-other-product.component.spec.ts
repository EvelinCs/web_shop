import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatOtherProductComponent } from './cat-other-product.component';

describe('CatOtherProductComponent', () => {
  let component: CatOtherProductComponent;
  let fixture: ComponentFixture<CatOtherProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatOtherProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatOtherProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
