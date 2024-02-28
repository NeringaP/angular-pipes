import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting',
  pure: false
})
export class SortingPipe implements PipeTransform {

  transform(value: any, propertyName: string) {
    const sortedArray = value.sort((n1,n2) => {
      if (n1[propertyName] > n2[propertyName]) {
          return 1;
      }
      if (n1[propertyName] < n2[propertyName]) {
          return -1;
      }
      return 0;
    });
  return sortedArray;
  }

}
