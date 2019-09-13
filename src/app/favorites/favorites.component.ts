import { Component, OnInit } from '@angular/core';
import {TracksModel} from '../models/tracks.model';
import {Data} from '@angular/router';
import {DataService} from '../data.service';
import {FavoriteService} from '../favorite.service';
import {CapitolModel} from '../models/capitol.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.sass']
})
export class FavoritesComponent {

  tracks: TracksModel[];
  tracksCapitol: CapitolModel[];

  constructor(private dataService: FavoriteService) {
    this.tracks = this.dataService.getFavouritesQuotes();
    this.tracksCapitol = this.dataService.getFavouritesQuotesCapitol();
  }

  onRemoveFromFavourites(quote: TracksModel) {
    this.dataService.removeQuoteFromFavourites(quote);
    this.tracks = this.dataService.getFavouritesQuotes();
  }
  onRemoveFromFavouritesCapitol(quote: CapitolModel) {
    this.dataService.removeQuoteFromFavouritesCapitol(quote);
    this.tracksCapitol = this.dataService.getFavouritesQuotesCapitol();
  }
}
