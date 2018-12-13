import { Component, AfterViewInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'modal-body',
  template: '<ng-content></ng-content>'
})
export class ModalBodyComponent {}

@Component({
  selector: 'modal-footer',
  template: '<ng-content></ng-content>'
})
export class ModalFooterComponent {}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements AfterViewInit {
  @ViewChild(ModalFooterComponent) footerComponent : ModalFooterComponent;
  @ViewChild(ModalBodyComponent) bodyComponent : ModalBodyComponent;
  @Input() modalId: string;
  @Input() modalTitle: string;

  constructor() {}

  ngAfterViewInit() {

  }

}
