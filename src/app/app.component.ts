import { Component,OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'weatherapi';
  city:string = "";
  weatherdata:any;
  wheather:boolean = false;

  constructor(private service:WeatherService)
  {

  }
  getweather(city:string){
    this.service.getweather(this.city).subscribe((data)=>this.weatherdata = data);  
    this.wheather = true;  
  }

}
