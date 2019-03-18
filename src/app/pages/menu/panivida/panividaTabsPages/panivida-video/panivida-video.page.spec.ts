import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanividaVideoPage } from './panivida-video.page';

describe('PanividaVideoPage', () => {
  let component: PanividaVideoPage;
  let fixture: ComponentFixture<PanividaVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanividaVideoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanividaVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
