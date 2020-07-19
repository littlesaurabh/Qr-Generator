import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private http: HttpClient) { }

  savePdf(data){
    return this.http.post("https://whispering-thicket-97767.herokuapp.com/pdf", data);
  }
}
