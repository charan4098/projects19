import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = "https://api.openweathermap.org/data/2.5/weather";
  private apikey = "2e9bc568dbbb1f0fe6b6987975a3487b"
  constructor(private client:HttpClient) { }

  getweather(city:string):Observable<any>
  {
    return this.client.get<any>(`${this.url}?q=${city}&appid=${this.apikey}`);
  }

}
