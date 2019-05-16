import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
  export class Conector {
  private headers = new Headers({'Content-Type': 'application/json'});
  private dataUrl = 'https://www.datos.gov.co/api/views/w5z3-vb4d/rows.json';  // URL to api
  constructor(private http: Http) { }
  //Users = [];
  getUserData(){
    return this.http.get(this.dataUrl)
               //.toPromise()
               .map(response => response.json() )
               //.subscribe(result => result = result)
               //.catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

} //end Conector

export class Users{
//  users="asdkjaklsjd";
 }