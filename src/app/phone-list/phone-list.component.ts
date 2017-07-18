import { Component, OnInit } from '@angular/core';
import { PhoneService } from './../phone.service';

@Component({
  selector: 'app-phone-list',
  templateUrl:'./phone-list.component.html',
})
export class PhoneListComponent implements OnInit {
  phones = [];

  constructor(private myPhoneService: PhoneService) { }

  ngOnInit() {
    this.myPhoneService.getList()
      .subscribe((myPhoneList) => {
        this.phones = myPhoneList;
      });
  }
}
