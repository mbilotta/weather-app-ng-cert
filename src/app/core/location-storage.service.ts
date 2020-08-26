import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { StorageService } from './storage.service';

export const LOCATION_STORAGE_KEY = new InjectionToken<string>('locationStorageKey');

@Injectable({
  providedIn: 'root'
})
export class LocationStorageService extends StorageService {

  constructor(@Optional() @Inject(LOCATION_STORAGE_KEY) storageKey: string) {
    super(storageKey || 'locations');
  }
}
