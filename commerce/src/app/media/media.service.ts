import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config/config';

@Injectable({
  providedIn: 'platform'
})
export class MediaService {

  apiRoot: string;
  constructor(private _config: Config) {
    this.apiRoot = _config.get('apiRoot');
  }
 // constructor(private jsonp: Jsonp) { }


  addMedia(term: string) {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`; 
    return this.jsonp.request(apiURL)  
        .map(res => {
          return res.json().results.map(item => {
            return new MediaItem(
              //file in Items and import model
            );
          });
        });
      }

      deleteMedia(term: string) {
        let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`; 
        return this.jsonp.request(apiURL)  
            .map(res => {
              return res.json().results.map(item => {
                return new MediaItem(
                  //file in Items and import model
                );
              });
            });
          }

          //Probably won't need this...
          getMedia(term: string) {
            let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`; 
            return this.jsonp.request(apiURL)  
                .map(res => {
                  return res.json().results.map(item => {
                    return new MediaItem(
                      //file in Items and import model
                    );
                  });
                });
              }
}