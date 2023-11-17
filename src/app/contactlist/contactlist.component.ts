import { Component } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css'],
})
export class ContactlistComponent {
  constructor(private contactService: ContactService) {}
  contacts:any=[];
  ngOnInit(): void {
    this.getAll();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  getAll() {
    this.contactService.getAll().subscribe(
      (success) => {
        console.log('success', success);
        let sData:any=success;
        this.contacts=sData.data;
      },
      (error) => {
        console.log('error', error); 
      }
    );
  }
}
