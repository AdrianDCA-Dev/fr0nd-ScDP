import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolSexo'
})
export class BoolSexoPipe implements PipeTransform {

  transform(value: number): string {
    return value == 1 ? 'Masculino' : 'Femenino';
  }

}
