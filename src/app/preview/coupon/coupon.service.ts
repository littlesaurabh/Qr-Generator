import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http: HttpClient) { }

  getCouponData(id) {
    return this.http.get("http://localhost:5555/coupon/preview/" + id);
  }
}
