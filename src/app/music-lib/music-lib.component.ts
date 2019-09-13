import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TracksModel} from '../tracks.model';
import {CapitolModel} from '../models/capitol.model';
import {FavoriteService} from '../favorite.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-music-lib',
  templateUrl: './music-lib.component.html',
  styleUrls: ['./music-lib.component.sass']
})
export class MusicLibComponent implements OnInit {
public tracks: Array<TracksModel> = new Array<TracksModel>();
public capitol: Array<CapitolModel> = new Array<CapitolModel>();
  constructor(private http: HttpClient, private dataService: FavoriteService, private router: Router) { }

  ngOnInit() {
    this.getMusicById();
  }
public getMusicById() {
    this.http.get('https://editurasolomon-8267f.firebaseio.com/musicLibrary/0/tracks.json').subscribe(
      (data: any) => this.tracks = data
    );
    console.log(this.tracks);
}
  onAddToFavourite(selectedTrack) {
    this.dataService.addQuoteToFavourites(selectedTrack);
    console.log(selectedTrack);
  }

  onRemoveFromFavourite(track) {
    this.dataService.removeQuoteFromFavourites(track);
    console.log(track);
  }

  isFavorite(track) {
    return this.dataService.isQuoteFavorite(track);
  }

  onAddToFavouriteCapitol(selectedTrack) {
    this.dataService.addQuoteToFavouritesCapitol(selectedTrack);
    console.log(selectedTrack);
  }

  onRemoveFromFavouriteCapitol(track) {
    this.dataService.removeQuoteFromFavouritesCapitol(track);
    console.log(track);
  }

  isFavoriteCapitol(track) {
    return this.dataService.isQuoteFavoriteCapitol(track);
  }

  goToFavPage() {
    this.router.navigate(['/favorites']);
  }
}
