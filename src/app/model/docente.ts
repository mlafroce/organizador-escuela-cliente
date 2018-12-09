export class Docente {
  _id: string;
  nombre : string;
  apellido : string;

  constructor () {
  }

  valid() : boolean {
    this.nombre = this.nombre.trim();
    this.apellido = this.apellido.trim();
    return (this.nombre != '' && this.apellido != '');
  }
}