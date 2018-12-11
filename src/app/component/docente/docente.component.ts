import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../../service/docente/docente.service';
import { Docente } from '../../model/docente';
declare var $: any;

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.scss']
})
export class DocenteComponent implements OnInit {
  readonly title = 'Docentes';
  readonly addDocenteModal = '#docente-add-modal';
  docenteList : any = [];
  currentDocente : Docente = new Docente();
  isEdit = false;

  constructor(private docenteService: DocenteService) { }

  ngOnInit() {
    this.docenteService.getAllDocentes().subscribe(docenteList => {
      this.docenteList = docenteList;
    });
  }

  create() : void {
    this.currentDocente = new Docente();
    this.isEdit = false;
  }

  save() : void {
    console.log('Guardando');
    if (this.isEdit) {
      this.docenteService.update(this.currentDocente).subscribe();
    } else {
      this.docenteService.insert(this.currentDocente).subscribe();
    }
  }

  edit(docente: Docente) : void {
    this.isEdit = true;
    this.currentDocente = docente;
  }
}
