import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-q6',
  templateUrl: './q6.component.html',
  styleUrls: ['./q6.component.css']
})
export class Q6Component {
  qa ={
    "question": "6. What is AJAX? Explain with examples..    ",
      "answer": "AJAX (Asynchronous JavaScript and XML) is a technique for making asynchronous HTTP requests to a server from a web page without reloading the entire page. Here's an explanation with examples:<br><br><ul><li><strong>Definition:</strong> AJAX allows web pages to send and receive data from a server without disrupting the user's experience.</li><li><strong>Example:</strong> Using the fetch API to load data from a server without refreshing the page.<br><br><code>// Example using the fetch API to fetch data from a server</code><br><code>fetch('https://api.example.com/data')</code><br><code>  .then(response => response.json())</code><br><code>  .then(data => {</code><br><code>    // Process and display the data on the web page</code><br><code>    console.log(data);</code><br><code>  })</code><br><br>This example demonstrates how AJAX allows you to retrieve data from a server in the background and update the web page dynamically, providing a smoother and more interactive user experience.</li></ul></li></ul>"
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
