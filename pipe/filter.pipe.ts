import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(apiData: any, searcField: string): any {
    return apiData.filter((val: any) => {
      if (!searcField) {
        return val;
      }
      if (val.name.toLowerCase().includes(searcField.toLowerCase())) {
        console.log(val.name);

        return val;
      }
    });
  }
}
