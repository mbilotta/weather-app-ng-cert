import { Component, OnInit, Input } from '@angular/core';
import { WeatherData } from 'src/app/core/model/weather-data';
import { WeatherService } from 'src/app/core/weather.service';
import { tap, finalize, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-location-weather',
  templateUrl: './location-weather.component.html',
  styleUrls: ['./location-weather.component.scss']
})
export class LocationWeatherComponent implements OnInit {

  @Input() zipCode: string;

  location: WeatherData;
  loading: boolean;
  error: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.loading = true;
    this.weatherService.getCurrentWeather(this.zipCode).pipe(
      tap(location => {
        this.location = location;
      }),
      catchError(error => {
        this.error = error;
        return throwError(error);
      }),
      finalize(() => {
        this.loading = false;
      })
    ).subscribe();
  }

}
