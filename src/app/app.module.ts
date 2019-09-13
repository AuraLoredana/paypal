import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';
import {MusicLibComponent} from './music-lib/music-lib.component';
import {HttpClientModule} from '@angular/common/http';
import { FavoritesComponent } from './favorites/favorites.component';
@NgModule({
  declarations: [
    AppComponent,
    MusicLibComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPayPalModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
