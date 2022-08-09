import { Component } from '@angular/core';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.scss']
})
export class MediaItemListComponent {
  mediaItems = [
    {
      id: 1,
      name: 'FireBug',
      medium: 'Series',
      category: 'Science Fiction',
      year: 2020,
      watchedOn: 54151651,
      isFavorite: false
    },
    {
      id: 2,
      name: 'The Small Tall',
      medium: 'Movies',
      category: 'Science Fiction',
      year: 2019,
      watchedOn: 134545851,
      isFavorite: true
    },
    {
      id: 3,
      name: 'The Crazy Man',
      medium: 'Movies',
      category: 'Action',
      year: 1999,
      watchedOn: 134545851,
      isFavorite: true
    },
    {
      id: 4,
      name: 'The Hello',
      medium: 'Series',
      category: 'Sci Fi',
      year: 1998,
      watchedOn: 134545851,
      isFavorite: false
    },
    {
      id: 5,
      name: 'Hulk',
      medium: 'Movies',
      category: 'Fiction',
      year: 2021,
      watchedOn: 134545851,
      isFavorite: false
    }
  ];

  onMediaItemDelete(){}


}
