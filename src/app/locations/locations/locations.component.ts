import { Component, OnInit } from '@angular/core';
import { LocationStorageService } from 'src/app/core/location-storage.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  locations: Array<string> = [];

  constructor(
    private storage: LocationStorageService
  ) { }

  ngOnInit(): void {
  }

  addLocation(zipCode: string) {
    if (this.storage.add(zipCode)) {
      this.locations.push(zipCode);
    }
  }
}
