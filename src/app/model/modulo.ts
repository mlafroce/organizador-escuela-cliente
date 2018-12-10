export class Modulo {
  docente : string;
  name : string;
  espacio : string;
  day: string
  hourFrom : string;
  hourTo : string;

  constructor (json: any) {
    this.docente = json.docente;
    this.espacio = 'N/A';
    this.name = json.nombre;
    this.day = json.dia;
    this.hourFrom = json.horarioDesde;
    this.hourTo = json.horarioHasta;
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