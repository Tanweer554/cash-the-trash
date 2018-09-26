import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {
let currentyear=new Date().getFullYear();
let dobyear=new Date(value).getFullYear();
let age=currentyear-dobyear;
    return age;
  }

}
