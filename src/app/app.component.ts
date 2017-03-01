import { DataService } from './services/data.service';
import { cities } from './../../data/cities';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private userLocation: string;
  private cities = cities;
  private selectedCityCode: string;
  private weatherData: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    console.log(cities);
  }

  selectCityCode(cityCode) {
    this.selectedCityCode = cityCode;
    console.log(cityCode);
    this.getWeather();
  }

  getWeather() {
    this.data.get('weathercast/' + this.selectedCityCode).subscribe(data => {
      console.log(data);
      this.weatherData = data;
    });
  }
}
