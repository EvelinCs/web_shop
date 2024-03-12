import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherProductDetailComponent } from './other-product-detail.component';

describe('OtherProductDetailComponent', () => {
  let component: OtherProductDetailComponent;
  let fixture: ComponentFixture<OtherProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherProductDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
