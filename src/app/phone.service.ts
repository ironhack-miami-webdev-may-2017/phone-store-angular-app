import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhoneService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private myHttp: Http) {}

  getList() {
    return this.myHttp.get(`${this.BASE_URL}/api/phones`)
      .map((res) => res.json());
  }

  createNew(newPhonetoCreate){
    return this.myHttp.post(`${this.BASE_URL}/api/phones`, newPhonetoCreate )
    
  }



}
