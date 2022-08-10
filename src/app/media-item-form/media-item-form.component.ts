import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.scss']
})
export class MediaItemFormComponent implements OnInit {
  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: new FormControl(''),
      year: new FormControl('')
    });
  }

  yearValidator(control: FormControl) {
    if(control.value.trim().length === 0){
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const MaxYear = 2100;

    if(year >= minYear && year <= MaxYear){
      return null;
    }else{
      return { year: true };
    }
  }
  onSubmit(mediaItem: any){
    console.log(mediaItem);
  }

}
