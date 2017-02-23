import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-current-temperature',
  templateUrl: './current-temperature.component.html',
  styleUrls: ['./current-temperature.component.css']
})
export class CurrentTemperatureComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
   this.data.get('test').subscribe(data => console.log(data));
  }

  //blah

}
