import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WatchItemComponent } from './watch-item/watch-item.component';
import { ReactiveFormsModule } from '@angular/forms';
//material  imports here
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
// custom component here
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavouriteDirective } from './favourite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
@NgModule({
  declarations: [
    AppComponent,
    WatchItemComponent,
    MediaItemListComponent,
    FavouriteDirective,
    CategoryListPipe,
    MediaItemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,MatIconModule,MatButtonModule,MatGridListModule,MatFormFieldModule,MatSelectModule
  ],
  exports:[
    MatCardModule,MatIconModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
