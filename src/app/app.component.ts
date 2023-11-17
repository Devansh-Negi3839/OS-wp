import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service'; // Import the data service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  qaList: any[] = []; // Initialize the variable

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getJsonData().subscribe((data: any) => {
      this.qaList = data;
      // Set the initial visibility state for all questions and answers
      this.qaList.forEach(qa => {
        qa.isVisible = false;
      });
    });
  }

}
