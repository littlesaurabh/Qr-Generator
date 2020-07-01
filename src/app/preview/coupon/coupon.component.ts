import { Component, OnInit } from '@angular/core';
import { CouponService } from 'src/app/preview/coupon/coupon.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CouponsComponent } from 'src/app/coupons/coupons.component';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  constructor(private couponService: CouponService,  private route: ActivatedRoute) { }
  id;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.loadData(this.id)
    })    
  }

  loadData(id) {
    this.couponService.getCouponData(id).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err)
    })
  }
}
