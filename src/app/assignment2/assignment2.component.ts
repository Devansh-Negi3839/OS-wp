import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  countries: any[] = [];
  isLoading: boolean = true; // Add a loading indicator

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Make an HTTP GET request to the API
    this.http.get('https://restcountries.com/v3.1/all').subscribe((data: Object) => {
      this.countries = data as any[]; // Cast data to the appropriate type
      this.isLoading = false; // Set loading to false when data is loaded
    });
  }
}
