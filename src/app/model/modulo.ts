export class Modulo {
  docente : string;
  suplente : string;
  revista : string;
  espacio : string;
  tipo : string;
  modulos : string;
  cargo : string;
  anio : string;
  division : string;
  especialidad : string;
  turno : string;
  lunes : string;
  martes : string;
  miercoles : string;
  jueves : string;
  viernes : string;
  extra1 : string;
  extra2 : string;

  constructor () {
  }

  valid() : boolean {
    this.docente = this.docente.trim();
    this.espacio = this.espacio.trim();
    return (this.docente != '' && this.espacio != '');
  }
}