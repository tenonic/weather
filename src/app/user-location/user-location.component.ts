import { cities } from './../../../data/cities';
import { Component, OnInit, Output, ElementRef, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.css']
})
export class UserLocationComponent implements OnInit {

  //form: FormGroup;
  private location: string;
  public query: string;
  private cities = cities;
  public filteredList = [];
  // public elementRef;
   @Output() selectCityCode = new EventEmitter();


  constructor(myElement: ElementRef) {
    // this.elementRef = myElement;
  }

  ngOnInit() {

  }

  filter() {
    if (this.query !== "") {
      this.filteredList = this.cities.filter(city => city.nameEn.toLowerCase().indexOf(this.query.toLowerCase()) > -1);
    } else {
      this.filteredList = [];
    }
  }

  select(item) {
    this.query = item.nameEn;
    this.filteredList = [];
    console.log(item['-code']);
    this.selectCityCode.emit(item['-code']);
  }

}
