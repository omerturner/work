import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { LookupService } from './lookup.service'

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ListsComponent } from './lists/lists.component';
import { LookupComponent } from './lookup/lookup.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDXQalnhoA7TZ7fxgcR_YUk7FMQ-6AJ4cM",
  authDomain: "userauth-3c740.firebaseapp.com",
  databaseURL: "https://userauth-3c740.firebaseio.com",
  storageBucket: "userauth-3c740.appspot.com",
  messagingSenderId: "568148522490"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    AnalysisComponent,
    ListsComponent,
    LookupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'login', component: LoginComponent },
      { path: 'main', component: MainComponent },
      { path: 'lookup', component: LookupComponent },
      { path: 'analysis', component: AnalysisComponent },
      { path: 'lists', component: ListsComponent }
    ]),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
  ],
  providers: [LookupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
