import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { WEATHER_API_CONFIG, WeatherApiConfig, BACKUP_WEATHER_API_CONFIG } from './model/weather-api-config';
import { catchError } from 'rxjs/operators';
import { WeatherData } from './model/weather-data';
import { throwError } from 'rxjs';

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
        catchError((err: HttpErrorResponse) => {
          if (err.status == 404) {
            return throwError({
              cod: err.status,
              message: `city not found (${zipCode})`
            });
          }
          return this.buildBackupCurrentWeatherCall(zipCode, this.backupConfig);
        })
      );
    }

    return apiCall;
  }

  private buildCurrentWeatherCall(zipCode: string, config: WeatherApiConfig) {
    return this.http.get<WeatherData>(`${config.url}/data/2.5/weather`, {
      params: {
        zip: zipCode,
        appid: config.appId
      }
    });
  }

  private buildBackupCurrentWeatherCall(zipCode: string, config: WeatherApiConfig) {
    return this.http.get<WeatherData>(`${config.url}/weather`, {
      params: {
        zipcode: zipCode
      }
    }).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError({
          cod: err.status,
          message: err.message
        });
      })
    );
  }
}
