import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WEATHER_API_CONFIG, WeatherApiConfig, BACKUP_WEATHER_API_CONFIG } from './model/weather-api-config';
import { catchError } from 'rxjs/operators';
import { CurrentWeather } from './model/current-weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient,
    @Inject(WEATHER_API_CONFIG) private config: WeatherApiConfig,
    @Optional() @Inject(BACKUP_WEATHER_API_CONFIG) private backupConfig: WeatherApiConfig) { }

  getCurrentWeather(zipCode: string) {
    let apiCall = this.buildCurrentWeatherCall(zipCode, this.config);

    if (this.backupConfig) {
      apiCall = apiCall.pipe(
        catchError(err => {
          return this.buildBackupCurrentWeatherCall(zipCode, this.backupConfig);
        })
      );
    }

    return apiCall;
  }

  private buildCurrentWeatherCall(zipCode: string, config: WeatherApiConfig) {
    return this.http.get<CurrentWeather>(`${config.url}/data/2.5/weather`, {
      params: {
        zip: zipCode,
        appid: config.appId
      }
    });
  }

  private buildBackupCurrentWeatherCall(zipCode: string, config: WeatherApiConfig) {
    return this.http.get<CurrentWeather>(`${config.url}/weather`, {
      params: {
        zipcode: zipCode
      }
    });
  }
}
