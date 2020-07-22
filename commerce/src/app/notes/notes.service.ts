import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config/config';

@Injectable({
  providedIn: 'platform'
})
export class NotesService {

  apiRoot: string;
  constructor(private _config: Config) {
    this.apiRoot = _config.get('apiRoot');
  }
  //constructor(private jsonp: Jsonp) { }

  addNotes(term: string) {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`; 
    return this.jsonp.request(apiURL)  
        .map(res => {
          return res.json().results.map(item => {
            return new NotesItem(
          //file in Items and import model
            );
          });
        });
      }

      addNotes(term: string) {
        let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`; 
        return this.jsonp.request(apiURL)  
            .map(res => {
              return res.json().results.map(item => {
                return new NotesItem(
              //file in Items and import model
                );
              });
            });
          }

          deleteNotes(term: string) {
            let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`; 
            return this.jsonp.request(apiURL)  
                .map(res => {
                  return res.json().results.map(item => {
                    return new NotesItem(
                  //file in Items and import model
                    );
                  });
                });
              }

              updateNotes(term: string) {
                let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`; 
                return this.jsonp.request(apiURL)  
                    .map(res => {
                      return res.json().results.map(item => {
                        return new NotesItem(
                      //file in Items and import model
                        );
                      });
                    });
                  }

                  getNotes(term: string) {
                    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`; 
                    return this.jsonp.request(apiURL)  
                        .map(res => {
                          return res.json().results.map(item => {
                            return new NotesItem(
                          //file in Items and import model
                            );
                          });
                        });
                      }
}