import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-watch-item',
  templateUrl: './watch-item.component.html',
  styleUrls: ['./watch-item.component.scss']
})
export class WatchItemComponent{

  @Input() mediaItem:any;

  constructor() { }

  onDelete(){
    console.log("delete clicked");
  }


}
