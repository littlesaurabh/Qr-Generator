import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http: HttpClient) { }

  getCouponData(id) {
    return this.http.get("https://whispering-thicket-97767.herokuapp.com/coupon/preview/" + id);
  }
}
