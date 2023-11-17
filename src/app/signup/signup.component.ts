// src/app/signup/signup.component.ts

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      studentName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      rollNo: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  signup() {
    this.auth.signup(this.signupForm.value).subscribe(
      (success) => {
        console.log('success', success);

        // Optionally, you can handle successful signup here

        // Navigate to the login page after successful signup
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log('error', error);

        // Optionally, you can handle signup error here
      }
    );
  }
}
