import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'category-searh-form',
  templateUrl: './category-searh-form.component.html',
  styleUrls: ['./category-searh-form.component.css']
})
export class CategorySearhFormComponent implements OnInit {

  search = "";


  @Output()
  onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.onSearch.emit(this.search);
    return false;
  }

}
