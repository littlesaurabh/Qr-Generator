import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http: HttpClient) { }

  saveCoupon(data) {
    return this.http.post("https://whispering-thicket-97767.herokuapp.com/coupon", data);
  }
}
