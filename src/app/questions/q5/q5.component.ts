import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-q5',
  templateUrl: './q5.component.html',
  styleUrls: ['./q5.component.css']
})
export class Q5Component {
  qa ={
    "question": "5. What is difference between let, var and const in javascript?    ",
      "answer": "In JavaScript, 'let' and 'const' are block-scoped variables, while 'var' is function-scoped. Here are the key differences:<br><br><ul><li><strong>Scope:</strong><ul><li>'var' is function-scoped, accessible anywhere within the function it's declared in.</li><li>'let' and 'const' are block-scoped, only accessible within the block where they are declared.</li></ul></li><li><strong>Reassignment:</strong><ul><li>'var' variables can be reassigned multiple times within their scope.</li><li>'let' variables can also be reassigned within their scope.</li><li>'const' variables, once assigned a value, cannot be reassigned; they are constant.</li></ul></li><li><strong>Hoisting:</strong><ul><li>'var' declarations are hoisted to the top of their function or global scope, but their initializations remain where they are.</li><li>'let' and 'const' declarations are hoisted to the top of their block but are not initialized until the actual declaration is encountered in the code. You can't access them before their declaration.</li></ul></li><li><strong>Temporal Dead Zone (TDZ):</strong><ul><li>'let' and 'const' variables are in the Temporal Dead Zone (TDZ) from the start of their block until their declaration is encountered, preventing access before the declaration.</li></ul></li></ul>"
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
