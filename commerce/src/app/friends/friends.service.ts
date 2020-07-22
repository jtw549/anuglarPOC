import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config/config';

@Injectable({
  providedIn: 'platform'
})
export class FriendsService {

  apiRoot: string;
  constructor(private _config: Config) {
    this.apiRoot = _config.get('apiRoot');
  }
 // constructor(private jsonp: Jsonp) { }

  addFriend(term: string) {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`; 
    return this.jsonp.request(apiURL)  
        .map(res => {
          return res.json().results.map(item => {
            return new FriendsItem(
                //file in Items and import model
            );
          });
        });
      }

      deleteFriend(term: string) {
        let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`; 
        return this.jsonp.request(apiURL)  
            .map(res => {
              return res.json().results.map(item => {
                return new FriendsItem(
                    //file in Items and import model
                );
              });
            });
          }

          getFriends(term: string) {
            let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`; 
            return this.jsonp.request(apiURL)  
                .map(res => {
                  return res.json().results.map(item => {
                    return new FriendsItem(
                        //file in Items and import model
                    );
                  });
                });
              }
}