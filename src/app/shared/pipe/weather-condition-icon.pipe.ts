import { Pipe, PipeTransform } from '@angular/core';
import { WeatherConditionType } from 'src/app/model/weather-condition-type.enum';

/**
 * Transforms a weather condition code (see https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2)
 * into a weather condition icon.
 */
@Pipe({
  name: 'weatherConditionIcon'
})
export class WeatherConditionIconPipe implements PipeTransform {

  transform(value: number): string {
    if (value == null) {
      return value as any;
    }

    let type = WeatherConditionType.from(value);
    switch (type) {
      case WeatherConditionType.Thunderstorm:
      case WeatherConditionType.Clouds: return 'clouds';
      case WeatherConditionType.Clear: return 'sun';
      case WeatherConditionType.Snow: return 'snow';
      case WeatherConditionType.Drizzle:
      case WeatherConditionType.Rain: return 'rain';
      default: return null;
    }
  }

}
