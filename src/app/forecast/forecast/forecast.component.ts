import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/core/weather.service';
import { ActivatedRoute } from '@angular/router';
import { WeatherForecastData } from 'src/app/core/model/weather-forecast-data';
import { tap, catchError, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  zipCode: string;
  forecastData: WeatherForecastData;
  loading: boolean;
  error: any;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.zipCode = params.get('zipcode');
      if (/^[0-9]{5}$/.test(this.zipCode)) {
        this.loading = true;
        this.weatherService.getDailyWeatherForecast(this.zipCode, 5).pipe(
          tap(forecastData => {
            this.forecastData = forecastData;
          }),
          catchError(error => {
            this.error = error;
            return throwError(error);
          }),
          finalize(() => {
            this.loading = false;
          })
        ).subscribe();  
      } else {
        this.error = {
          message: 'invalid zip code'
        };
      }
    });
  }

}
