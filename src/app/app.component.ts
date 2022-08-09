import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'watch-list-app';
  firstMediaItem = {
    id: 1,
    name: 'FireBug',
    medium: 'Series',
    category: 'Science Fiction',
    year: 2020,
    watchedOn: null,
    isFavorite: false
  };

  onMediaItemDelete(mediaItem: any){

  }
}
