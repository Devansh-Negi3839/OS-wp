import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-q9',
  templateUrl: './q9.component.html',
  styleUrls: ['./q9.component.css']
})
export class Q9Component {
  qa ={
    "question": "9. Explain with syntax the following directives:\na. ngFor\nb. ngIf",
      "answer": "In Angular, directives are special markers in the DOM that tell Angular to attach behavior to an element. Here's an explanation of the 'ngFor' and 'ngIf' directives along with their syntax:<br><br><ul><li><strong>ngFor Directive:</strong><ul><li><strong>Syntax:</strong> The 'ngFor' directive is used for iterating over a collection and rendering elements for each item in the collection.</li><li><strong>Example:</strong> Using 'ngFor' to iterate over an array in a component's template:<br><code>&lt;ul&gt;<br>  &lt;li *ngFor=\"let item of items\"&gt;{{ item }}&lt;/li&gt;<br>&lt;/ul&gt;</code><br>This code iterates over the 'items' array in the component and renders a list item for each item in the array.</li></ul></li><li><strong>ngIf Directive:</strong><ul><li><strong>Syntax:</strong> The 'ngIf' directive is used for conditionally rendering elements based on a condition.</li><li><strong>Example:</strong> Using 'ngIf' to conditionally display an element:<br><code>&lt;div *ngIf=\"showElement\"&gt;This element is displayed conditionally.&lt;/div&gt;</code><br>In this example, 'showElement' is a variable in the component, and the 'div' element is displayed only if the condition 'showElement' is true.</li></ul></li></ul>"
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
