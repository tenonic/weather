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
  private selectedProvinceCode: string;
  private weatherData: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    console.log(cities);
  }

  selectLocation(location) {
    this.selectedCityCode = location.cityCode;
    this.selectedProvinceCode = location.provinceCode;
    console.log(location);
    this.getWeather();
  }

  getWeather() {
    this.data.get('weathercast/' + this.selectedProvinceCode + '/' + this.selectedCityCode).subscribe(data => {
      console.log(data);
      this.weatherData = data;
    });
  }
}
