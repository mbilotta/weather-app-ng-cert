import { WeatherCondition } from './weather-condition';
import { WeatherTemperature } from './weather-temperature';

export interface WeatherData {
  weather: Array<WeatherCondition>;
  main: WeatherTemperature;
  name: string;
  cod: number;
}
