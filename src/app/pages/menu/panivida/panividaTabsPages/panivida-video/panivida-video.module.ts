import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PanividaVideoPage } from './panivida-video.page';

const routes: Routes = [
  {
    path: '',
    component: PanividaVideoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PanividaVideoPage]
})
export class PanividaVideoPageModule {}
