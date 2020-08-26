import { WeatherCondition } from './weather-condition';

/**
 * See https://openweathermap.org/forecast16#parameter
 */
export interface WeatherForecastData {
  city: {
    id: number;
    name: string;
  };
  cnt: number;
  list: Array<{
    dt: number;
    temp: {
      min: number;
      max: number;
    };
    weather: Array<WeatherCondition>;
  }>;
}
