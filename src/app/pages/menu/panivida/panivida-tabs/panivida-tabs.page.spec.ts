import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanividaTabsPage } from './panivida-tabs.page';

describe('PanividaTabsPage', () => {
  let component: PanividaTabsPage;
  let fixture: ComponentFixture<PanividaTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanividaTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanividaTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
