import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoredomsComponent } from './boredoms.component';

describe('BoredomsComponent', () => {
  let component: BoredomsComponent;
  let fixture: ComponentFixture<BoredomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoredomsComponent]
    });
    fixture = TestBed.createComponent(BoredomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
