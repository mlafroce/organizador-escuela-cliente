import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
  }

  loginWithFacebook() {
    this.document.location.href = environment.apiUrl + '/auth/facebook';
  }

  loginWithGoogle() {
    this.document.location.href = environment.apiUrl + '/auth/google';
  }
}
