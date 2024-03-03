import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificsubcategoryComponent } from './specificsubcategory.component';

describe('SpecificsubcategoryComponent', () => {
  let component: SpecificsubcategoryComponent;
  let fixture: ComponentFixture<SpecificsubcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SpecificsubcategoryComponent]
    });
    fixture = TestBed.createComponent(SpecificsubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
