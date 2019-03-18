import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VideoPlayPage } from './video-play.page';

import { YoutubePipe } from '../../pipes/youtube.pipe';

const routes: Routes = [
  {
    path: '',
    component: VideoPlayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VideoPlayPage,YoutubePipe]
})
export class VideoPlayPageModule {}
