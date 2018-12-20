import { OnInit, Component } from '@angular/core';
import { Router, Route } from "@angular/router";
import { UserService } from './service/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userProfile: any;
  title = 'Organizador';
  navLinks = [
    {"name": "Docentes", "routerLink": "docentes"},
    {"name": "Módulos", "routerLink": "modulos"},
    {"name": "Visualizador", "routerLink": "visualizador"}
  ]
  
  constructor(
    private router: Router,
    private userService: UserService) {}

  ngOnInit() {
    this.userService.getProfile().subscribe(userProfile => {
      this.userProfile = userProfile;
      console.log("Profile ->", userProfile);
    });
  }
}
