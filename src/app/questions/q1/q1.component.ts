import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']    
})
export class Q1Component {
  qa ={
    "question": "1. What is REST API?",
    "answer": "REST API (Representational State Transfer Application Programming Interface) is an architectural style for designing networked applications, allowing communication between a client and server over HTTP using standard CRUD (Create, Read, Update, Delete) operations. Here's an explanation of REST API:<br><br><ul><li><strong>HTTP Methods:</strong><ul><li><strong>GET:</strong> Retrieve data from a specified resource.</li><li><strong>POST:</strong> Create a new resource or submit data to be processed on a specified resource.</li><li><strong>PUT:</strong> Update a specified resource or create it if it doesn't exist.</li><li><strong>DELETE:</strong> Remove a specified resource.</li></ul></li><li><strong>Stateless:</strong> REST APIs are stateless, meaning each request from a client to a server must contain all the information needed to understand and fulfill the request. No client context is stored on the server between requests.</li><li><strong>Resource-Based:</strong> In REST, resources (e.g., data objects) are identified by URIs (Uniform Resource Identifiers), and interactions with these resources are performed using standard HTTP methods.</li><li><strong>Example:</strong> Using REST API to retrieve a list of products from a server:<br><code>GET /api/products</code><br>This request retrieves a list of products from the server, and the response typically includes a representation of those products in a specified format, such as JSON or XML.</li></ul></li></ul>"
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