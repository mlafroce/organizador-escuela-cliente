import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend} from '@angular/http';
import { RouterModule } from '@angular/router';

import { ApiXHRBackend } from './ApiXHRBackend';

import { AppComponent } from './app.component';
import { ProfessorComponent } from './professor/professor.component';
import { ProfessorsService } from './professors.service';
import { ModalComponent } from './modal/modal.component';
import { ModalFooterComponent } from './modal/modal.component';
import { ModalBodyComponent } from './modal/modal.component';


// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'professors',
    pathMatch: 'full'
  },
  {
    path: 'professors',
    component: ProfessorComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfessorComponent,
    ModalComponent,
    ModalFooterComponent,
    ModalBodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [{ provide: XHRBackend, useClass: ApiXHRBackend },ProfessorsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
