import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ModuloService } from '../../service/modulo/modulo.service';
import { Modulo } from '../../model/modulo';
declare var $: any;

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent implements OnInit, OnChanges {

  title = "Modulos";
  criteria = new Modulo({});
  moduloList : any = [];
  criteriaTypeList : string[] = ["docenteId", "revista"]
  newModulo : Modulo = new Modulo({});
  addModuloModal = "#modulo-add-modal";

  @Input() currentCriteriaValue: string;
  @Input() currentCriteriaType: string;

  constructor(private moduloService: ModuloService) { }

  create() : void {
    console.log("Create called");
    if (!this.newModulo.valid()) { return; }
    this.moduloService.create(this.newModulo)
      .subscribe(modulo => {
      console.log(this.moduloList);
      console.log(modulo);
        this.moduloList.push(modulo);
        $(this.addModuloModal).modal('toggle');
      });
  }
    
  ngOnChanges(changes: SimpleChanges) {
    console.log("YAY");
    console.log('Filtrando por: ', this.currentCriteriaType, this.currentCriteriaValue);
  }

  ngOnInit() {
    this.moduloService.getAllModulos().subscribe(moduloList => {
      this.moduloList = moduloList;
    });
  }

  goBack() {}
}
