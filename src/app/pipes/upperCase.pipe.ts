import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'toUpper'})
export class ToUpper implements PipeTransform {
    transform(value: any): any {
      return value.toUpperCase();
    }
}
