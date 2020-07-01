import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http: HttpClient) { }

  saveCoupon(data) {
    return this.http.post("http://localhost:5555/coupon", data);
  }
}
