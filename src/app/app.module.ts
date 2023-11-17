import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { AppRoutingModule } from './app-routing.module';
import { Assignment2Component } from './assignment2/assignment2.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CountriesComponent } from './countries/countries.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    Assignment1Component,
    AppComponent,
    Assignment2Component,
    CountriesComponent,
    LoginComponent,
    RegisterComponent,
    SignupComponent,
    ContactlistComponent
  ],
  imports: [ 
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"angularassignmentiwp","appId":"1:810303030783:web:606335c52e005170f253ca","databaseURL":"https://angularassignmentiwp-default-rtdb.firebaseio.com","storageBucket":"angularassignmentiwp.appspot.com","apiKey":"AIzaSyCL33X8SgRPZH5WWoLGLA3lVVDzCXXY6R4","authDomain":"angularassignmentiwp.firebaseapp.com","messagingSenderId":"810303030783"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }