import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherConditionIconPipe } from './pipe/weather-condition-icon.pipe';



@NgModule({
  declarations: [WeatherConditionIconPipe],
  exports: [WeatherConditionIconPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
