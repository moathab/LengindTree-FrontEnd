import { Component, OnInit } from '@angular/core';
import {WeatherApi} from '../Service/WeatherApi';

@Component({
  selector: 'app-weather-api',
  templateUrl: './weather-api.component.html',
  styleUrls: ['./weather-api.component.scss']
})
export class WeatherApiComponent implements OnInit {

  wind
  temperature
  feelsLike
  weather
  constructor(private api: WeatherApi) { }

  ngOnInit(): void {
    this.getWeather()
  }

  getWeather(){
    this.api.getWeather().subscribe(
      res=> {
        this.temperature=Math.floor(res.main.temp -  273.15 );
          this.feelsLike=Math.floor(res.main.feels_like -273.15)
          this.weather=res.weather[0].main + ": " + res.weather[0].description;
          this.wind=res.wind.speed;
        console.log(res)
      }
    )

  }
}
