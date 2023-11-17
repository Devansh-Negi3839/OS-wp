import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}
  getAll() {
    const headers = new HttpHeaders().set(
      'x-access-token',
      '' + localStorage.getItem('vnittoken')
    );
    return this.http.get(
      'http://109.106.255.69:2208/contact/getAllContactByStudentId/' +
        localStorage.getItem('vnitid'),
      {
        headers: headers,
      }
    );
  }

  add() {
    //use tkoen i post reqeuest
    //this.http.post(url,data,headers);
  }
  update() {
    //this.http.put(url,data,headers);
  }
  delete() {
    //this.http.delete(url,headers);
  }
}
