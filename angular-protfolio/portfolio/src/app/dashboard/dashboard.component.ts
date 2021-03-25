import { Component, OnInit } from '@angular/core';
import { ContactClass } from '../ContactClass.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

output:string = "";
cValue = "";
pValue = "";
 JsobObj = sessionStorage.getItem('0')
 stringJson = JSON.parse(this.JsobObj || '{}') ;
welcomeName:string = this.stringJson.first  + " " + this.stringJson.last;

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

}
