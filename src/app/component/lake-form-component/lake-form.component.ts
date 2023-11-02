import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TemperatureDataService } from '../../service/temperature-data.service';
import { Observable } from 'rxjs';
import { LakeStatistics } from '../../models/lake-statistics';


@Component({
  selector: 'app-lake-form',
  templateUrl: './lake-form.component.html',
  styleUrls: ['./lake-form.component.scss']
})
export class LakeFormComponent implements OnInit {
  @Output() newLakeData = new EventEmitter<LakeStatistics>();
  lakeForm: FormGroup;
  lakeData$: Observable<LakeStatistics[]>;

  constructor(
    private fb: FormBuilder,
    private temperatureDataService: TemperatureDataService
  ) {
    this.lakeForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      celsius: [false],
      temperature: [null, Validators.pattern(/^[-+]?\d+(\.\d+)?$/)],
      weatherDate: [null],
      waves: [null]
    });

    // Directly subscribe to the service's observable for lake data
    this.lakeData$ = this.temperatureDataService.lakeData$;
  }

  ngOnInit() {
    // You could initialize the form data or perform other initializations here
  }

  onSubmit() {
    const formData: LakeStatistics = this.getFormData();
    this.newLakeData.emit(formData);
    this.submitForm();
  }

  private getFormData(): LakeStatistics {
    this.lakeForm.value

    return {
      id: this.lakeForm.value.id,
      name: this.lakeForm.value.name,
      celsius: this.lakeForm.value.celsius,
      temperature: this.lakeForm.value.temperature,
      weatherDate: this.lakeForm.value.weatherDate,
      waves: this.lakeForm.value.waves
    };

  }

  submitForm() {
    if (this.lakeForm.valid) {
      this.temperatureDataService.postLakeData(this.lakeForm.value).subscribe({
        next: (data) => {
          // The lake data observable is updated within the service after a successful post,
          // so no need to update it here again.
          console.log('Lake data posted successfully', data);
        },
        error: (error) => {
          console.error('Error posting lake data', error);
        }
      });
    } else {
      console.error('Form not valid', this.lakeForm.errors);
    }
  }
}
