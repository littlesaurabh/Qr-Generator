import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WebService {



  constructor(private http: HttpClient) { }

  webqr(data) {
    return this.http.post("https://whispering-thicket-97767.herokuapp.com/website", data);
  }
}
