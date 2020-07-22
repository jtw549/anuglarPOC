import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config/config';

@Injectable({
  providedIn: 'platform'
})
export class UsersService {

  apiRoot: string;
  constructor(private _config: Config) {
    this.apiRoot = _config.get('apiRoot');
  }

  //constructor(private jsonp: Jsonp) { }
registerUser(term: string) {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`; 
    return this.jsonp.request(apiURL)  
        .map(res => {
          return res.json().results.map(item => {
            return new UsersItem(
          //file in Items and import model
            );
          });
        });
      }

      updateUser(term: string) {
        let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`; 
        return this.jsonp.request(apiURL)  
            .map(res => {
              return res.json().results.map(item => {
                return new UsersItem(
              //file in Items and import model
                );
              });
            });
          }

          deleteUser(term: string) {
            let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`; 
            return this.jsonp.request(apiURL)  
                .map(res => {
                  return res.json().results.map(item => {
                    return new UsersItem(
                  //file in Items and import model
                    );
                  });
                });
              }
              //Might not use this method...
              getAccountInfoUser(term: string) {
                let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`; 
                return this.jsonp.request(apiURL)  
                    .map(res => {
                      return res.json().results.map(item => {
                        return new UsersItem(
                      //file in Items and import model
                        );
                      });
                    });
                  }

                  loginUser(term: string) {
                    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`; 
                    return this.jsonp.request(apiURL)  
                        .map(res => {
                          return res.json().results.map(item => {
                            return new UsersItem(
                          //file in Items and import model
                            );
                          });
                        });
                      }

                      logoutUser(term: string) {
                        let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`; 
                        return this.jsonp.request(apiURL)  
                            .map(res => {
                              return res.json().results.map(item => {
                                return new UsersItem(
                              //file in Items and import model
                                );
                              });
                            });
                          }
}