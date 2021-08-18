import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class SearchFilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(items: any[], searchText: string, columns: any): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      let flag:boolean = false;
      for (let i=0; i < columns.length; i++){
        if (it[columns[i]].toLocaleLowerCase().indexOf(searchText) != -1){
          flag = true;
          break;
        }
      }
      return flag;
      // return it[columns[i]].toLocaleLowerCase().includes(searchText);
    });
  }


}
