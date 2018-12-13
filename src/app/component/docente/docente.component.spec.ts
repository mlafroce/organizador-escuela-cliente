import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DocenteComponent } from './docente.component';
import { ModalComponent, ModalBodyComponent, ModalFooterComponent } from '../modal/modal.component';
import { HttpClientModule } from '@angular/common/http';

describe('DocenteComponent', () => {
  let component: DocenteComponent;
  let lala: ModalComponent;
  let fixture: ComponentFixture<DocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DocenteComponent,
        ModalComponent,
        ModalBodyComponent,
        ModalFooterComponent
      ],
      imports: [FormsModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
