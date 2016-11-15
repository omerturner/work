import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuth, AngularFire } from 'angularfire2'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public auth: FirebaseAuth, public af: AngularFire, private router: Router) {}


  ngOnInit() {
  }

}
