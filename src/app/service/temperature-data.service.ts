import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LakeStatistics } from '../models/lake-statistics';
import { AirStatistics } from '../models/air-statistics';

@Injectable({
  providedIn: 'root'
})
export class TemperatureDataService {
  private lakeDataSubject = new BehaviorSubject<LakeStatistics[]>([]);
  lakeData$ = this.lakeDataSubject.asObservable();

  constructor(private http: HttpClient) { }

  getLakeData(): Observable<LakeStatistics[]> {
    return this.http.get<LakeStatistics[]>('https://localhost:7030/lake').pipe(
      tap(data => {
        console.log('Lake Data:', data);
        this.lakeDataSubject.next(data); // Update the BehaviorSubject with the fetched data
      }),
      catchError(this.handleError<LakeStatistics[]>('getLakeData'))
    );
  }

  updateLakeData(lakeData: LakeStatistics): void {
    const currentData = this.lakeDataSubject.getValue();
    this.lakeDataSubject.next([...currentData, lakeData]); // Correctly append the new data
  }

  postLakeData(data: LakeStatistics): Observable<boolean> {
    const body = {
      "id": data.id,
      "name": data.name,
      "celsius": data.celsius,
      "temperature": data.temperature,
      "weatherDate": data.weatherDate,
      "waves": 1
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Api-Key': 'D681B065C15846529449F3AFFE688175', // Only for demonstration purposes
    });

    console.log('Body:', body);

    return this.http.post<boolean>('https://localhost:7030/lake', body, { headers: headers }).pipe(
      tap(success => {
        if (success) {
          const currentData = this.lakeDataSubject.getValue();
          this.lakeDataSubject.next([...currentData, data]);
        }
      }),
      catchError((error: any) => {
        console.error('An error occurred:', error);
        return throwError(() => new Error('Error posting lake data'));
      })
    );
  }

  getAirData(): Observable<AirStatistics[]> {
    return this.http.get<AirStatistics[]>('https://localhost:7030/weather').pipe(
      tap(data => console.log('Air Data:', data)),
      catchError(this.handleError<AirStatistics[]>('getAirData'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return throwError(() => new Error(`${operation} failed: ${error.message}`));
    };
  }
}
