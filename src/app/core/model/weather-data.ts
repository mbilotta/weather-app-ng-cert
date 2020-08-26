import { WeatherCondition } from './weather-condition';

/**
 * See https://openweathermap.org/current#parameter
 */
export interface WeatherData {
  cod: number;
  id: number;
  name: string;
  weather: Array<WeatherCondition>;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
}
