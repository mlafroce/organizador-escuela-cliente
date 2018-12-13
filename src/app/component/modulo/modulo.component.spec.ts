/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ModalComponent, ModalBodyComponent, ModalFooterComponent } from '../modal/modal.component';
import { CriteriaFormComponent } from '../criteria-form/criteria-form.component';
import { ModuloFilterPipe } from '../../model/moduloPipe';

import { ModuloComponent } from './modulo.component';

describe('ModuloComponent', () => {
  let component: ModuloComponent;
  let fixture: ComponentFixture<ModuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModuloComponent,
        ModalComponent,
        ModalBodyComponent,
        ModalFooterComponent,
        CriteriaFormComponent,
        ModuloFilterPipe
      ],
      imports: [ FormsModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
