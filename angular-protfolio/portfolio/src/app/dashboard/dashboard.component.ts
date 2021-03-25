import { Component, OnInit } from '@angular/core';
import { ContactClass } from '../ContactClass.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

output:string = "";
cValue = "your contact name .. ";
pValue = "phone number ..";

listOfContacts:Array<ContactClass> = new Array();

constructor() { }

  ngOnInit(): void {
  }


  saveToTable(contactName:string,num:string)
  {
    this.output = contactName + "," + num ;
    
    let conatact1 = new ContactClass(contactName,num);
    this.listOfContacts.push(conatact1);
    this.cValue = ""
    this.pValue = ""
  }
  display()
  {
   

  }
}
