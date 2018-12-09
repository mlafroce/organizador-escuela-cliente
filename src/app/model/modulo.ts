export class Modulo {
  docente : string;
  espacio : string;
  constructor () {
  }

  valid() : boolean {
    this.docente = this.docente.trim();
    this.espacio = this.espacio.trim();
    return (this.docente != '' && this.espacio != '');
  }

  filter(other) : boolean {
    let filterKeys = Object.keys(this);
    for (var key in filterKeys) {
      let currentKey = filterKeys[key];
      if (this[currentKey] !== other[currentKey]) {
        return false
      }
    }
    return true;
  }
}