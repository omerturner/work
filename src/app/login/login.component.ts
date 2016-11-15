import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;

  constructor(public af: AngularFire,
              private router:Router) {}

  ngOnInit() {}

 loginWithGoogle() {
    this.errorMessage = '';
    this.af.auth.login().catch((error) => {
      this.errorMessage = error.message;
    });
  }

}
