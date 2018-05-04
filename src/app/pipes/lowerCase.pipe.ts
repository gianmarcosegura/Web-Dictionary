import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'toLower'})
export class ToLower implements PipeTransform {
    transform(value: any): any {
      return value.toLowerCase();
    }
}
