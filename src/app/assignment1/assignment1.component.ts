import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // Import the data service  
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {
  qaList: any[] = []; // Initialize the variable 

  constructor(private dataService: DataService) { }
  handleClick(qa: { isVisible: boolean; }) {
    // Toggle the visibility of the answer for the clicked question
    qa.isVisible = !qa.isVisible;
  }
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