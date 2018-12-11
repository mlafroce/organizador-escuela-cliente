import { ElementRef, Renderer2} from '@angular/core';
import { Modulo } from '../../model/modulo';
import { ModuloService } from '../../service/modulo/modulo.service';

export class VisualizadorModulo {
  // x is %
  readonly xOffset = 400 * 0.15;
  readonly yOffset = 30;

  constructor(
    private modulo: Modulo,
    private parent: ElementRef,
    private renderer: Renderer2,
    private rowHeight: number,
    private rowWidth: number
  ){}

  draw() {
    let x = this.rowWidth * (Number(this.modulo.day) - 1) + this.xOffset;
    let rowPos = this.getRowPos(this.modulo);
    let y = rowPos + this.yOffset;
    this.drawRect(x, y, this.rowWidth, this.getHeight(this.modulo));
  }

  getRowPos(modulo: Modulo) {
    let hour = modulo.hourFrom;
    let hourNum = hour.split(":");
    let pos = (Number(hourNum[0]) - 7) * 60 + Number(hourNum[1])
    return pos * this.rowHeight / 60;
  }

  getHeight(modulo: Modulo) {
    let hourFromNum = modulo.hourFrom.split(":");
    let hourToNum = modulo.hourTo.split(":");
    let height = (Number(hourToNum[0]) - Number(hourFromNum[0])) * 60 + Number(hourToNum[1]) - Number(hourFromNum[1]);
    return height * this.rowHeight / 60; 
  }

  drawRect(x: number, y: number, width: number, height: number) {
    const svg = this.parent.nativeElement.querySelector('svg');
    const rect = this.renderer.createElement('rect', 'svg');
    this.renderer.setAttribute(rect, 'x', x.toString());
    this.renderer.setAttribute(rect, 'y', y.toString());
    this.renderer.setAttribute(rect, 'width', width.toString());
    this.renderer.setAttribute(rect, 'height', height.toString());
    this.renderer.setAttribute(rect, 'style', 'fill:blue;stroke:darkblue;stroke-width:1;fill-opacity:0.2;stroke-opacity:0.5');
    this.renderer.appendChild(svg, rect);
  }
}