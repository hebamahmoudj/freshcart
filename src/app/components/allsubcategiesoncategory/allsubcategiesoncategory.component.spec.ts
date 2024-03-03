import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsubcategiesoncategoryComponent } from './allsubcategiesoncategory.component';

describe('AllsubcategiesoncategoryComponent', () => {
  let component: AllsubcategiesoncategoryComponent;
  let fixture: ComponentFixture<AllsubcategiesoncategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AllsubcategiesoncategoryComponent]
    });
    fixture = TestBed.createComponent(AllsubcategiesoncategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
