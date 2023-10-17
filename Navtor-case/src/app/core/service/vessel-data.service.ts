import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Vessel } from '../models/vessel.model';

@Injectable({ providedIn: 'root' })
export class VesselDataService {
  private baseUrl =
    'https://frontendteamfiles.blob.core.windows.net/exercises/vessels.json';

  constructor(private http: HttpClient) {}

  get(): Observable<Vessel[]> {
    return this.http
      .get<Vessel[]>(`${this.baseUrl}`)
      .pipe(map((response) => response));
  }
}
