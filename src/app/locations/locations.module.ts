import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations/locations.component';
import { LocationFormComponent } from './location-form/location-form.component';
import { LocationWeatherComponent } from './location-weather/location-weather.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LocationsComponent, LocationFormComponent, LocationWeatherComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LocationsModule { }
