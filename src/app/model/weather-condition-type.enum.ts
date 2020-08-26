/**
 * See https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
 */
export enum WeatherConditionType {
  Thunderstorm = 200,
  Drizzle = 300,
  Rain = 500,
  Snow = 600,
  Atmosphere = 700,
  Clear = 800,
  Clouds = 801
}

export namespace WeatherConditionType {

  /**
   * See https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
   */
  export function from(id: number) {
    if (801 <= id && id <= 804) {
      return WeatherConditionType.Clouds;
    }

    let enumName = WeatherConditionType[id - (id % 100)];
    if (enumName) {
      return WeatherConditionType[enumName];
    }
  }
}