import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/core/weather.service';
import { ActivatedRoute } from '@angular/router';
import { WeatherForecastData } from 'src/app/core/model/weather-forecast-data';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  zipCode: string;
  forecastData: WeatherForecastData;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

    });
  }

}
