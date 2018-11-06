import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], fn: Function): any {
    if (!list || !fn) {
      return list;
    }
    return list.filter((value, idx, list) => fn(value, idx, list));
  }

}
