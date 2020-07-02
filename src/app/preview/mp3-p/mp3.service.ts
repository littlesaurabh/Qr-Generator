import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Mp3Service {

  constructor(private http: HttpClient) { }


  getMp3Data(id) {
    return this.http.get("https://whispering-thicket-97767.herokuapp.com/mp3/preview/" + id);
  }
}
