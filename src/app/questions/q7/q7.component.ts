import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-q7',
  templateUrl: './q7.component.html',
  styleUrls: ['./q7.component.css']
})
export class Q7Component {
  qa ={
    "question": "7. What is a single page application?    ",
      "answer": "A Single Page Application (SPA) is a web application or website that loads and interacts with content dynamically on a single web page, without the need for complete page reloads. Here's an explanation of SPAs:<br><br><ul><li><strong>Dynamic Content:</strong> SPAs retrieve and display content from the server as the user interacts with the application, typically through asynchronous requests.</li><li><strong>Smooth User Experience:</strong> SPAs provide a smoother and more responsive user experience since they avoid full page reloads, resulting in faster transitions between views and reduced server load.</li><li><strong>Client-Side Routing:</strong> SPAs often use client-side routing to manage navigation within the application, allowing different views or components to be displayed based on the URL without contacting the server.</li><li><strong>JavaScript Frameworks:</strong> SPAs are commonly built using JavaScript frameworks and libraries like React, Angular, or Vue.js, which facilitate the development of dynamic and interactive user interfaces.</li><li><strong>Examples:</strong> Notable examples of SPAs include social media platforms like Facebook and Twitter, as well as web applications like Gmail.</li></ul></li></ul>"
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
