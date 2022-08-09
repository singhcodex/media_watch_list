import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFavourite]'
})
export class FavouriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
  @HostBinding('class.isfavorite-hovering') hovering = false;
  @HostListener('mouseenter') onMouseEnter(){
    this.hovering = true;
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.hovering = false;
  }
  @Input() set appFavourite(value: any){
    this.isFavorite =value;
  }
  constructor() { }

}
