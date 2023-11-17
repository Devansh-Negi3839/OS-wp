import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(data: any) {
    console.log('logindata', data);
    return this.http.post('http://109.106.255.69:2208/student/login', data);
  }
  signup(data: any) {
    console.log('signupdata', data);
    return this.http.post('http://109.106.255.69:2208/student/register', data);
  }
}
 