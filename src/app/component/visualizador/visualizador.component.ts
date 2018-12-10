import { Component, Input, OnInit, AfterViewInit, ElementRef, Renderer2} from '@angular/core';
import { ModuloService } from '../../service/modulo/modulo.service';
import { VisualizadorModulo } from './visualizadorModulo';

@Component({
  selector: 'app-visualizador',
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.scss']
})
export class VisualizadorComponent implements OnInit {
  @Input() visId: string = 'visId' ;
  @Input() rowHeight: number = 30 ;
  rowWidth: number = 400;
  dateTimeStart = 7;
  dateTimeEnd = 18;
  moduloList : any = [];
  
  constructor(
    private moduloService: ModuloService,
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.buildTable();
    this.setHeights();
    this.moduloService.getAllModulos().subscribe(moduloList => {
      this.moduloList = moduloList;
      this.drawModulos();
    });
  }

  drawModulos() {
    console.log("DRAW!");
    for (let modulo of this.moduloList) {
      let visModulo = new VisualizadorModulo(
        modulo,
        this.el,
        this.renderer,
        this.rowHeight,
        this.rowWidth
      )
      visModulo.draw();
    }
  }

  buildTable() {
    let dateTimes = [];
    const tbody = this.el.nativeElement.querySelector('tbody');
    for (let i = this.dateTimeStart; i < this.dateTimeEnd; ++i) {
      const row = this.renderer.createElement('tr');
      const first = this.renderer.createElement('td');
      const dateTime = this.renderer.createText(`${i}:00`);
      this.renderer.appendChild(first, dateTime);
      this.renderer.appendChild(row, first);
      for (let i = 0; i < 5; ++i) {
        this.renderer.appendChild(row, this.renderer.createElement('td'));
      }
      this.renderer.appendChild(tbody, row);
    }
  }

  setHeights() {
    const tbody = this.el.nativeElement.querySelector('tbody');
    const svg = this.el.nativeElement.querySelector('svg');
    const foreignObject = this.el.nativeElement.querySelector('foreignObject');
    const rows = this.el.nativeElement.querySelector('tr');
    const rowNum = this.dateTimeEnd - this.dateTimeStart;
    const totalHeight = (this.rowHeight * rowNum + 50).toString();
    this.renderer.setAttribute(tbody, 'height', (this.rowHeight * rowNum).toString());
    this.renderer.setAttribute(svg, 'height', totalHeight);
    this.renderer.setAttribute(foreignObject, 'height', totalHeight);
    this.renderer.setAttribute(svg, 'viewbox', `0 0 ${this.rowWidth} ${totalHeight}`);
    this.renderer.setAttribute(rows, 'height', this.rowHeight.toString());
  }
}
