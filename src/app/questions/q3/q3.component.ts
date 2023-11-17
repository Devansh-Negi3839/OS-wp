import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['./q3.component.css']
})
export class Q3Component {
  qa ={
    "question": "3. Explain the following with a component diagram 3 tier architecture",
      "answer": "Three-tier architecture consists of Presentation (UI), Business Logic (Application Logic), and Data Storage layers. The presentation layer interacts with the business logic layer, which in turn interacts with the data storage layer.<br><br><img src='https://www.researchgate.net/profile/Santi-Caballe/publication/277187696/figure/fig1/AS:613958725672966@1523390575480/3-tier-architecture.png' alt='3-Tier Architecture Diagram'><br><br>Additional points:<br>- The presentation layer handles user interface and user interaction.<br>- The business logic layer contains application-specific logic and processes user requests.<br>- The data storage layer manages data storage and retrieval operations."
  };

  handleClick(qa: { isVisible: boolean; }) {
    // Toggle the visibility of the answer for the clicked question
    qa.isVisible = !qa.isVisible;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  constructor(private router: Router){}

  goToAssignment1() {
    this.router.navigate(['/assignment1']);
  }
}
