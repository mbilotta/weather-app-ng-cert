import { WeatherCondition } from './weather-condition';
import { WeatherTemperature } from './weather-temperature';

export interface CurrentWeather {
  weather: Array<WeatherCondition>;
  main: WeatherTemperature;
  name: string;
  zip: string;
}
