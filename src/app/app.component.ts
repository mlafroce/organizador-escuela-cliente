import { OnInit, Component } from '@angular/core';
import { Router, Route } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Organizador';
  navLinks = [
    {"name": "Docentes", "routerLink": "docentes"},
    {"name": "Módulos", "routerLink": "modulos"},
    {"name": "Visualizador", "routerLink": "visualizador"}
  ]
  
  constructor(private router: Router) {}

  ngOnInit() {
    this.printpath('', this.router.config);
  }
  printpath(parent: String, config: Route[]) {
    for (let i = 0; i < config.length; i++) {
      let r = config[i];
      console.log(parent + '/' + r.path);
      if (r.children && r.path) {
        this.printpath(parent + '/' + r.path, r.children);
      }
    }
  }
}
