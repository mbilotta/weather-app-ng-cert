import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { LocationsModule } from './locations/locations.module';
import { ForecastModule } from './forecast/forecast.module';
import { LOCATION_STORAGE_KEY } from './core/location-storage.service';
import { environment } from 'src/environments/environment';
import { WEATHER_API_CONFIG, BACKUP_WEATHER_API_CONFIG } from './core/model/weather-api-config';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LocationsModule,
    ForecastModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: LOCATION_STORAGE_KEY,
      useValue: environment.locationStorageKey
    },
    {
      provide: WEATHER_API_CONFIG,
      useValue: environment.openWeatherMap
    },
    {
      provide: BACKUP_WEATHER_API_CONFIG,
      useValue: environment.backupWeatherApi
    }
  ]
})
export class AppModule { }
