import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() { 
    this.auth.login(this.loginForm.value).subscribe(
      (success) => {
        console.log('success', success);
        let successData: any = success;
        let token = successData.data.token;
        let id = successData.data.id;
        console.log('token=>', token);
        console.log('id=>', id);

        // Local storage
        localStorage.setItem('vnittoken', token);
        localStorage.setItem('vnitid', id);

        // Navigate to contact list page
        this.router.navigate(['/contactlist']);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
