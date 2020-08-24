import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationsComponent } from './locations/locations/locations.component';
import { ForecastComponent } from './forecast/forecast/forecast.component';


const routes: Routes = [
  {
    path: '',
    component: LocationsComponent
  },
  {
    path: 'forecast/:zipcode',
    component: ForecastComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
