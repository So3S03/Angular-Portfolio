import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  showMyClass:boolean = false;
  onChange(inputVal:string):void {
  if (inputVal.trim() !== '') {
    this.showMyClass = true;
  } else {
    this.showMyClass = false;
  }
  }
}
