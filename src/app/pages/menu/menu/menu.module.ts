import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children:[
      { path: 'medicine-tabs', loadChildren: '../medicine/medicine-tabs/medicine-tabs.module#MedicineTabsPageModule' },
      { path: 'panivida-tabs', loadChildren: '../panivida/panivida-tabs/panivida-tabs.module#PanividaTabsPageModule' },
    ]
  },
  { path: '', redirectTo: 'menu/medicine-tabs', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
