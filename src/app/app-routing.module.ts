import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { CountriesComponent } from './countries/countries.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { Q1Component } from './questions/q1/q1.component';
import { Q2Component } from './questions/q2/q2.component';
import { Q3Component } from './questions/q3/q3.component';
import { Q4Component } from './questions/q4/q4.component';
import { Q5Component } from './questions/q5/q5.component';
import { Q6Component } from './questions/q6/q6.component';
import { Q7Component } from './questions/q7/q7.component';
import { Q8Component } from './questions/q8/q8.component';
import { Q9Component } from './questions/q9/q9.component';

const routes: Routes = [
  { path: 'assignment1', component: Assignment1Component },
  { path: 'assignment2', component: Assignment2Component },
  { path: 'countries', component: CountriesComponent },
  { path: '', redirectTo: 'assignment1', pathMatch: 'full' },
  
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contactlist', component: ContactlistComponent },
  


  { path: 'assignment1/q1', component: Q1Component },
  { path: 'assignment1/q2', component: Q2Component },
  { path: 'assignment1/q3', component: Q3Component },
  { path: 'assignment1/q4', component: Q4Component },
  { path: 'assignment1/q5', component: Q5Component },
  { path: 'assignment1/q6', component: Q6Component },
  { path: 'assignment1/q7', component: Q7Component },
  { path: 'assignment1/q8', component: Q8Component },
  { path: 'assignment1/q9', component: Q9Component },

  { path: 'assignment2/part1', component: CountriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Use RouterModule.forRoot() to configure your routes
  exports: [RouterModule], // Export RouterModule for use in other parts of your application
})
export class AppRoutingModule { }