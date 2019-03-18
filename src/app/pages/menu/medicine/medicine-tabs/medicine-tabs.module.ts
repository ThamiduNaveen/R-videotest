import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MedicineTabsPage } from './medicine-tabs.page';

const routes: Routes = [
  {
    path: 'medicine',
    component: MedicineTabsPage,
    children: [
      { path: 'video', loadChildren: '../medicineTabsPages/medicine-video/medicine-video.module#MedicineVideoPageModule' },
      { path: 'contact', loadChildren: '../medicineTabsPages/medicine-contact/medicine-contact.module#MedicineContactPageModule' },
      { path: 'video/upload-video', loadChildren: '../../../upload-video/upload-video.module#UploadVideoPageModule' },
      { path: 'video/video-play/:id', loadChildren: '../../../video-play/video-play.module#VideoPlayPageModule' },
    ],
  },
  { path: '', redirectTo: 'medicine/video', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MedicineTabsPage]
})
export class MedicineTabsPageModule { }
