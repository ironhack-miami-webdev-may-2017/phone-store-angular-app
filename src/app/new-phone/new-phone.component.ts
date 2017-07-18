import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-new-phone',
  templateUrl: './new-phone.component.html',
  styleUrls: ['./new-phone.component.css']
})

export class NewPhoneComponent implements OnInit {

  newPhone = {
    brand: "",
    name: "",
    specs: "",
    image: ""
  }


  constructor(  private myPhoneService: PhoneService) { };

  ngOnInit() {}



  sendNewPhoneToApi(){
    this.myPhoneService.createNew(this.newPhone).subscribe(()=>{
      this.newPhone = {
        brand: "",
        name: "",
        specs: "",
        image: ""
      }
    });
  }

}
