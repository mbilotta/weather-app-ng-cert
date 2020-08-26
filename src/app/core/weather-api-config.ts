import { InjectionToken } from '@angular/core';

export interface WeatherApiConfig {
  url: string;
  appId?: string;
}

export const WEATHER_API_CONFIG = new InjectionToken<WeatherApiConfig>('weatherApiConfig');
export const BACKUP_WEATHER_API_CONFIG = new InjectionToken<WeatherApiConfig>('backupWeatherApiConfig');