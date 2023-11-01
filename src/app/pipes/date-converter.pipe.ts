import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateConverter'
})
export class DateConverterPipe implements PipeTransform {

  transform(dateString: string): Date | null {
    if (!dateString) {
      return null;
    }
    return new Date(dateString);
  }

}
