import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-q4',
  templateUrl: './q4.component.html',
  styleUrls: ['./q4.component.css']
})
export class Q4Component {
  qa ={
    "question": "4. What are different array methods in JavaScript? Explain with examples",
      "answer": "Here are some common array methods in JavaScript with brief explanations:<br><ol><li>push: Adds one or more elements to the end of an array.</li><li>pop: Removes and returns the last element from an array.</li><li>shift: Removes and returns the first element from an array.</li><li>unshift: Adds one or more elements to the beginning of an array.</li><li>splice: Adds, removes, or replaces elements at a specified index.</li><li>slice: Returns a shallow copy of a portion of an array.</li><li>map: Creates a new array by applying a function to each element.</li><li>filter: Creates a new array with elements that pass a test.</li></ol>"
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
