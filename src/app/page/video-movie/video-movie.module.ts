import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoMoviePageRoutingModule } from './video-movie-routing.module';

import { VideoMoviePage } from './video-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoMoviePageRoutingModule
  ],
  declarations: [VideoMoviePage]
})
export class VideoMoviePageModule {}
