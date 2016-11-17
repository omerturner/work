import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { ChartModule } from 'angular2-highcharts';

import { LookupService } from './lookup.service'
import { AnalysisService } from './analysis.service'

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ListsComponent } from './lists/lists.component';
import { LookupComponent } from './lookup/lookup.component';
import { LoaderComponent } from './loader/loader.component';

export const firebaseConfig = {
  apiKey: "AIzaSyC5SsVq0P4POsC0_s05mPTsD9Taaj3TXzc",
  authDomain: "webhose-work.firebaseapp.com",
  databaseURL: "https://webhose-work.firebaseio.com",
  storageBucket: "webhose-work.appspot.com",
  messagingSenderId: "232734272701"
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
    LookupComponent,
    LoaderComponent
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
    ChartModule
  ],
  providers: [
    LookupService,
    AnalysisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
