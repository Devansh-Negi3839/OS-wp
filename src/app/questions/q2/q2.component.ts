import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css'],
})
export class Q2Component {
  qa = {
    question:
      '2. What are http and https protocols? Explain in detail the following http methods..\n a. GET \nb. POST\nc. PUT',
    answer:
      "HTTP (Hypertext Transfer Protocol) is a protocol used for transmitting data over the internet, while HTTPS is a secure version of HTTP.<br><br>HTTP methods:<br><ol><li>GET: Retrieves data from a specified resource.</li><li>POST: Submits data to be processed to a specified resource.</li><li>PUT: Updates a specified resource or creates it if it doesn't exist.</li></ol>",
  };

  handleClick(qa: { isVisible: boolean }) {
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
