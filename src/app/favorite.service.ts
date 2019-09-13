import { Injectable } from '@angular/core';
import {TracksModel} from './models/tracks.model';
import {CapitolModel} from './models/capitol.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favouriteQuotes: Array<TracksModel> = new Array<TracksModel>();
  private favouriteQuotesCapitol: Array<CapitolModel> = new Array<CapitolModel>();

  addQuoteToFavourites(track: TracksModel) {
    this.favouriteQuotes.push(track);
  }

  removeQuoteFromFavourites(track: TracksModel) {
    const position = this.favouriteQuotes.findIndex((trackEl: TracksModel) => {
      return track.id === track.id;
    });
    this.favouriteQuotes.splice(position, 1);
  }

  getFavouritesQuotes() {
    return this.favouriteQuotes.slice();
  }

  isQuoteFavorite(track: TracksModel) {
    return this.favouriteQuotes.find((trackEl: TracksModel) => {
      return trackEl.id === track.id;
    } );
  }

  addQuoteToFavouritesCapitol(track: CapitolModel) {
    this.favouriteQuotesCapitol.push(track);
  }

  removeQuoteFromFavouritesCapitol(track: CapitolModel) {
    const position = this.favouriteQuotesCapitol.findIndex((trackEl: CapitolModel) => {
      return track.id === track.id;
    });
    this.favouriteQuotesCapitol.splice(position, 1);
  }

  getFavouritesQuotesCapitol() {
    return this.favouriteQuotesCapitol.slice();
  }

  isQuoteFavoriteCapitol(track: CapitolModel) {
    return this.favouriteQuotesCapitol.find((trackEl: CapitolModel) => {
      return trackEl.id === track.id;
    } );
  }

}
