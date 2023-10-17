import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Emission, EmmisionEntry } from '../models/emissions.model';

@Injectable({ providedIn: 'root' })
export class EmissionsService {
  private baseUrl =
    'https://frontendteamfiles.blob.core.windows.net/exercises/emissions.json';

  constructor(private http: HttpClient) {}

  get(index: number): Observable<Emission[]> {
    return this.http.get<EmmisionEntry[]>(`${this.baseUrl}`).pipe(
      map((response) => {
        const array = response.find((x) => x.id === index)?.timeSeries;
        return array || [];
      })
    );
  }
}
