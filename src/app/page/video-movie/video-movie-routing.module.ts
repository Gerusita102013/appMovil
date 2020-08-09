import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoMoviePage } from './video-movie.page';

const routes: Routes = [
  {
    path: '',
    component: VideoMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoMoviePageRoutingModule {}
