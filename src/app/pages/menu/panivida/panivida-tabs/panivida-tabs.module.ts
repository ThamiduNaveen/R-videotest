import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PanividaTabsPage } from './panivida-tabs.page';

const routes: Routes = [
  {
    path: 'panivida',
    component: PanividaTabsPage,
    children: [
      { path: 'video', loadChildren: '../panividaTabsPages/panivida-video/panivida-video.module#PanividaVideoPageModule' },
      { path: 'images', loadChildren: '../panividaTabsPages/panivida-images/panivida-images.module#PanividaImagesPageModule' },
      { path: 'images/photo-upload', loadChildren: '../../../photo-upload/photo-upload.module#PhotoUploadPageModule' },
    ],
  },
  { path: '', redirectTo: 'panivida/video', pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PanividaTabsPage]
})
export class PanividaTabsPageModule { }
