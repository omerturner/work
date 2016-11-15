import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuth, AngularFire } from 'angularfire2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedIn: boolean = false;

  constructor(public auth: FirebaseAuth, public af: AngularFire, private router: Router) {}

  ngOnInit() {
    this.auth.subscribe(user => {
      if (user) {
        this.loggedIn = true;
        this.router.navigate(['/main']);
      } else {
        this.loggedIn = false;
        this.router.navigate(['/login']);
      }
    });
  }

  logout() {
     this.af.auth.logout();
     this.router.navigate(['./'])
  }
}
