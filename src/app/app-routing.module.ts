import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { LogoutGuard } from './guards/logout.guard';

const routes: Routes = [
  {
    path: 'home/:nick',
    canActivate:[LoginGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    //canActivate:[LoginGuard],
    pathMatch: 'full'
  },
  {
    path: 'buscarmovies/:nick',
    canActivate:[LoginGuard],
    loadChildren: () => import('./page/buscarmovies/buscarmovies.module').then( m => m.BuscarmoviesPageModule)
  },
  {
    path: 'detail/:id/:nick',
    canActivate:[LoginGuard],
    loadChildren: () => import('./page/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'video-movie/:id/:nick',
    canActivate:[LoginGuard],
    loadChildren: () => import('./page/video-movie/video-movie.module').then( m => m.VideoMoviePageModule)
  },
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    
  },
  {
    path: 'user', 
    loadChildren: () => import('./page/user/user.module').then( m => m.UserPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
