import { Pipe, PipeTransform } from '@angular/core';
import { Modulo } from './modulo'

@Pipe({name: 'moduloFilter'})
export class ModuloFilterPipe implements PipeTransform {
  transform(moduloList: Modulo[], criteria: Modulo) {
    return moduloList.filter(modulo => criteria.filter(modulo));
  }
}