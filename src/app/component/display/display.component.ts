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
  errorLakeData: string | null = null; // Error message for lakeData
  errorAirData: string | null = null; // Error message for airData
  isLoadingLakeData = true; // Loading indicator for lakeData
  isLoadingAirData = true; // Loading indicator for airData

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
}
