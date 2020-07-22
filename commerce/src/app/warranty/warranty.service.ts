import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Config} from '../config/config';

@Injectable({
  providedIn: 'platform'
})
export class WarrantyService {

  apiRoot: string;
  constructor(private _config: Config) {
    this.apiRoot = _config.get('apiRoot');
  }
  //constructor(private jsonp: Jsonp) { }

  addWarranty(term: string) {
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

      deleteWarranty(term: string) {
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

          updateWarranty(term: string) {
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

              getWarranty(term: string) {
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