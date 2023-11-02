import { Component, Input } from '@angular/core';
import { LakeStatistics } from '../../models/lake-statistics';

@Component({
  selector: 'app-lake-card',
  templateUrl: './lake-card.component.html',
  styleUrls: ['./lake-card.component.scss']
})
export class LakeCardComponent {
  @Input() lakeData: LakeStatistics[] | null = null;
}