import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TemperatureDataService } from '../../service/temperature-data.service';
import { AirStatistics} from '../../models/air-statistics';

@Component({
  selector: 'app-air-card',
  templateUrl: './air-card.component.html',
  styleUrls: ['./air-card.component.scss']
})
export class AirCardComponent {
  @Input() airData: AirStatistics[] | null = null;
}
