import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertDataComponent } from './convert-data.component';

describe('ConvertDataComponent', () => {
  let component: ConvertDataComponent;
  let fixture: ComponentFixture<ConvertDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvertDataComponent]
    });
    fixture = TestBed.createComponent(ConvertDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
