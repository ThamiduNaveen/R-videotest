import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineContactPage } from './medicine-contact.page';

describe('MedicineContactPage', () => {
  let component: MedicineContactPage;
  let fixture: ComponentFixture<MedicineContactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineContactPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
