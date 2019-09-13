import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MusicLibComponent} from './music-lib/music-lib.component';
import {FavoritesComponent} from './favorites/favorites.component';

export const routes: Routes = [
  {
    path: '',
    component: MusicLibComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
