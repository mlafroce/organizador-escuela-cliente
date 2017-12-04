import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend} from '@angular/http';
import { RouterModule } from '@angular/router';

import { ApiXHRBackend } from './ApiXHRBackend';

import { AppComponent } from './app.component';
import { ModuloComponent } from './component/modulo/modulo.component';
import { ModalComponent } from './component/modal/modal.component';
import { ModalFooterComponent } from './component/modal/modal.component';
import { ModalBodyComponent } from './component/modal/modal.component';
import { ModuloService } from './service/modulo/modulo.service';

import { ModuloFilterPipe } from './model/moduloPipe'


// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'modulos',
    pathMatch: 'full'
  },
  {
    path: 'modulos',
    component: ModuloComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ModuloComponent,
    ModalComponent,
    ModalFooterComponent,
    ModalBodyComponent,
    ModuloFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [{ provide: XHRBackend, useClass: ApiXHRBackend }, ModuloService],
  bootstrap: [AppComponent]
})

export class AppModule { }
