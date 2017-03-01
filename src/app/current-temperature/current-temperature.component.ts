import { DataService } from './../services/data.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-current-temperature',
  templateUrl: './current-temperature.component.html',
  styleUrls: ['./current-temperature.component.css']
})
export class CurrentTemperatureComponent implements OnInit {

  @Input() weatherData: any;

  constructor(private data: DataService) { }

  ngOnInit() {

  }

}
