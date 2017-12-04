import { Component, OnInit } from '@angular/core';
import { ModuloService } from '../../service/modulo/modulo.service';
import { Modulo } from '../../model/modulo';
declare var $: any;

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent implements OnInit {

  title = "Profesores";
  moduloList : any = [];
  newModulo : Modulo = new Modulo();
  addProfModal = "#prof-add-modal";

  constructor(private moduloService: ModuloService) { }

  create() : void {
    if (!this.newModulo.valid()) { return; }
    this.moduloService.create(this.newModulo)
      .then(prof => {
      console.log(this.moduloList);
      console.log(prof);
        this.moduloList.push(prof);
        $(this.addProfModal).modal('toggle');
      });
  }

  ngOnInit() {
    this.moduloService.getAllModulos().subscribe(moduloList => {
      this.moduloList = moduloList;
    });
  }

}
