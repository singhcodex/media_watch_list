import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-watch-item',
  templateUrl: './watch-item.component.html',
  styleUrls: ['./watch-item.component.scss']
})
export class WatchItemComponent{

  @Input() mediaItem:any;
  @Output() delete = new EventEmitter();
  constructor() { }

  onDelete(){
    console.log("delete clicked");
    this.delete.emit(this.mediaItem);
  }


}
