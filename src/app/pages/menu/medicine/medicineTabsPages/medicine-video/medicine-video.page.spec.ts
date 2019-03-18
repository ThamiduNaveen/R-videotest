import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineVideoPage } from './medicine-video.page';

describe('MedicineVideoPage', () => {
  let component: MedicineVideoPage;
  let fixture: ComponentFixture<MedicineVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineVideoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
