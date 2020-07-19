import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'platform'
})
export class WarrantyService {

  apiRoot: string = "http://localhost:3000";

  constructor(private jsonp: Jsonp) { }

  search(term: string) {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`; 
    return this.jsonp.request(apiURL)  
        .map(res => {
          return res.json().results.map(item => {
            return new WarrantyItem(
               //file in Items and import model
            );
          });
        });
      }
}