import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilpkartComponent } from './filpkart.component';

describe('FilpkartComponent', () => {
  let component: FilpkartComponent;
  let fixture: ComponentFixture<FilpkartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilpkartComponent]
    });
    fixture = TestBed.createComponent(FilpkartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
