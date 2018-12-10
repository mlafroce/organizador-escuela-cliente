import { Component, Input, OnInit, AfterViewInit, ElementRef, Renderer2} from '@angular/core';

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

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.buildTable();
    this.setHeights();
  }

  addRect(x: number, y: number, width: number, height: number) {
    const svg = this.el.nativeElement.querySelector('svg');
    const rect = this.renderer.createElement('rect', 'svg');
    this.renderer.setAttribute(rect, 'x', x.toString());
    this.renderer.setAttribute(rect, 'y', y.toString());
    this.renderer.setAttribute(rect, 'width', width.toString());
    this.renderer.setAttribute(rect, 'height', height.toString());
    this.renderer.setAttribute(rect, 'style', 'fill:blue;stroke:pink;stroke-width:2;fill-opacity:0.2;stroke-opacity:0.5');
    this.renderer.appendChild(svg, rect);
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
