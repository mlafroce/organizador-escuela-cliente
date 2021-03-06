import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { BaseInterceptor } from './BaseInterceptor';

// Componentes
import { AppComponent } from './app.component';
import { AuthComponent } from './component/auth/auth.component';
import { CriteriaFormComponent } from './component/criteria-form/criteria-form.component'
import { DocenteComponent } from './component/docente/docente.component';
import { ModuloComponent } from './component/modulo/modulo.component';
import { ModalComponent } from './component/modal/modal.component';
import { ModalFooterComponent } from './component/modal/modal.component';
import { ModalBodyComponent } from './component/modal/modal.component';
import { VisualizadorComponent } from './component/visualizador/visualizador.component';

// Servicios
import { ModuloService } from './service/modulo/modulo.service';

// Modelo
import { ModuloFilterPipe } from './model/moduloPipe';


// Define the routes
const ROUTES = [
  {
    path: 'modulos',
    component: ModuloComponent
  },
  {
    path: 'docentes',
    component: DocenteComponent
  },
  {
    path: 'visualizador',
    component: VisualizadorComponent
  },
  {
    path: 'login',
    component: AuthComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CriteriaFormComponent,
    DocenteComponent,
    ModuloComponent,
    ModalComponent,
    ModalFooterComponent,
    ModalBodyComponent,
    VisualizadorComponent,
    ModuloFilterPipe,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, multi: true, useClass: BaseInterceptor }, ModuloService, HttpClientModule ],
  bootstrap: [AppComponent]
})

export class AppModule { }
