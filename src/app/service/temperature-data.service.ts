import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LakeStatistics } from '../models/lake-statistics';
import { Observable } from 'rxjs';
import { AirStatistics } from '../models/air-statistics';
import { map, tap } from 'rxjs/operators'; // Import tap from rxjs/operators

@Injectable({
  providedIn: 'root'
})
export class TemperatureDataService {

  constructor(private http: HttpClient) { }

  getLakeData(): Observable<LakeStatistics[]> {
    return this.http.get<LakeStatistics[]>('https://localhost:7030/lake').pipe(
      tap(data => console.log('Lake Data:', data)), // Log the data here
      map(data => data || []) // If null, fallback to an empty array
    );
  }

  getAirData(): Observable<AirStatistics[]> {
    return this.http.get<AirStatistics[]>('https://localhost:7030/weather').pipe(
      tap(data => console.log('Air Data:', data)), // Log the data here
      map(data => data || []) // If null, fallback to an empty array
    );
  }
}
