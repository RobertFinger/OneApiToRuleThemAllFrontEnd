import { Component, OnInit } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { LakeStatistics } from '../../models/lake-statistics';
import { AirStatistics } from '../../models/air-statistics';
import { TemperatureDataService } from '../../service/temperature-data.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  lakeData$: Observable<LakeStatistics[]> = EMPTY;
  airData$: Observable<AirStatistics[]> = EMPTY;
  errorLakeData: string | null = null; 
  errorAirData: string | null = null; 
  isLoadingLakeData = true; 
  isLoadingAirData = true; 

  constructor(private temperatureDataService: TemperatureDataService) {}

  ngOnInit(): void {
    this.fetchLakeData();
    this.fetchAirData();
  }

  private fetchLakeData(): void {
    this.lakeData$ = this.temperatureDataService.getLakeData().pipe(
      tap(data => console.log('Lake data received:', data)), // Debugging log
      catchError(error => {
        this.errorLakeData = `Error fetching lake data: ${error}`;
        return EMPTY; // Continue with an empty observable on error
      }),
      finalize(() => this.isLoadingLakeData = false)
    );
  }

  private fetchAirData(): void {
    this.airData$ = this.temperatureDataService.getAirData().pipe(
      tap(data => console.log('Air data received:', data)), // Debugging log
      catchError(error => {
        this.errorAirData = `Error fetching air data: ${error}`;
        return EMPTY; // Continue with an empty observable on error
      }),
      finalize(() => this.isLoadingAirData = false)
    );
  }

  public addNewLakeData(newLakeData: LakeStatistics): void {
    this.temperatureDataService.postLakeData(newLakeData)
      .pipe(
        catchError(error => {
          console.error('Error posting new lake data:', error);
          return EMPTY; // If an error occurs, we do not want to terminate the entire stream.
        })
      )
      .subscribe(success => {
        if (success) {
          console.log('New lake data added successfully');
          // Optionally trigger a refresh of lake data if required
          this.fetchLakeData();
        } else {
          console.error('Failed to add new lake data');
        }
      });
  }

  
}
