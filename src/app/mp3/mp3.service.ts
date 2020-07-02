import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Mp3Service {

  constructor(private http: HttpClient) { }

  saveMp3(data) {
    return this.http.post("https://whispering-thicket-97767.herokuapp.com/mp3", data);
  }
}
