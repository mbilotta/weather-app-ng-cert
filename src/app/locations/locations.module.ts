import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations/locations.component';
import { LocationFormComponent } from './location-form/location-form.component';
import { LocationWeatherComponent } from './location-weather/location-weather.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [LocationsComponent, LocationFormComponent, LocationWeatherComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule
  ]
})
export class LocationsModule { }
