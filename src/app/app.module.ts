import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WatchItemComponent } from './watch-item/watch-item.component';

//material  imports here
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list'

import { MediaItemListComponent } from './media-item-list/media-item-list.component';
@NgModule({
  declarations: [
    AppComponent,
    WatchItemComponent,
    MediaItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,MatIconModule,MatButtonModule,MatGridListModule
  ],
  exports:[
    MatCardModule,MatIconModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
