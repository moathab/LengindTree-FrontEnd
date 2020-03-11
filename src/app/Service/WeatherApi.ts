import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class WeatherApi{

  constructor(private httpClient: HttpClient) {
  }


  getWeather():Observable<any>{
     return this.httpClient.get("http://api.openweathermap.org/data/2.5/weather", {
      params: new HttpParams()
        .set('q', "Pittsburgh")
        .set('appid', "5385968e69449f1d557787e59387a9f2")
    })

  }

}
