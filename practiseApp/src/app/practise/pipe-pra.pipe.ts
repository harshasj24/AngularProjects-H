import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePra',
})
export class PipePraPipe implements PipeTransform {
  transform(value: any, searchFiled: any): any {
    if (!searchFiled) {
      return value;
    } else {
      let fil = value.filter((val: any) => {
        return val.name.toLowerCase().includes(searchFiled.toLowerCase());
      });
      if (fil.length === 0) return ['No data found'];
      return fil;
    }
  }
}
