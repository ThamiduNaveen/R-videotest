import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanividaImagesPage } from './panivida-images.page';

describe('PanividaImagesPage', () => {
  let component: PanividaImagesPage;
  let fixture: ComponentFixture<PanividaImagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanividaImagesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanividaImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
