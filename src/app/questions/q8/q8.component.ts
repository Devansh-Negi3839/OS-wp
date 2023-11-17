import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-q8',
  templateUrl: './q8.component.html',
  styleUrls: ['./q8.component.css']
})
export class Q8Component {
  qa ={
    "question": "8. What is a component in angular?.    ",
      "answer": "In Angular, a component is a fundamental building block of the application. Here's an explanation of Angular components:<br><br><ul><li><strong>Composition:</strong> A component combines a template, logic, and styles to define a specific part of the user interface (UI).</li><li><strong>Reusability:</strong> Components are designed for reusability, allowing you to create modular and self-contained pieces of the UI that can be used across the application.</li><li><strong>Encapsulation:</strong> Components encapsulate their functionality, meaning their logic and styles are scoped to that specific component, preventing conflicts with other parts of the application.</li><li><strong>Communication:</strong> Components can communicate with other components through input and output properties, enabling parent-child relationships and data sharing.</li><li><strong>Example:</strong> For example, in an e-commerce application, you might have a 'ProductList' component responsible for displaying a list of products, and a 'ProductDetail' component for showing detailed information about a selected product. Each of these components would have its own template, logic, and styles.</li></ul></li></ul>"
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
