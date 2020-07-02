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

  data:any;
  data1:any;
  constructor(private couponService: CouponService,  private route: ActivatedRoute) { }
  id;coupo
  coupon:any=false;
  Coupon:any="Coupon"
  btn:any="Copy Code"
  backgroundColor:any
  fontColor:any
  linkColor:any
  image:any="https://whispering-thicket-97767.herokuapp.com/";
// https://whispering-thicket-97767.herokuapp.com/5fgsX7luQM-1593627024656.jpg";

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.loadData(this.id)
    })    
  }
  couponc(){
   
    if(this.coupon){
      this.coupon=false;
      this.Coupon="Coupon"
    }
    else{

      this.coupon=true;
      this.Coupon="Preview"
    }
  }
  loadData(id) {
    this.couponService.getCouponData(id).subscribe(data => {
      console.log("data1",data);
    this.data1=data
      this.data=this.data1.response.data
      this.backgroundColor=this.data.design.colors.background
      this.fontColor=this.data.design.colors.text
      this.linkColor=this.data.design.colors.button
      this.image=this.image+"/"+this.data.design.image
      console.log(this.image)

    }, err => {
      console.log(err)
    })
  }
  goToLink(){
    window.open(this.data.coupon.website_url, "_blank");
}
copyMessage(val: string){
    
  const selBox = document.createElement('textarea');
  selBox.style.position = 'fixed';
  selBox.style.left = '0';
  selBox.style.top = '0';
  selBox.style.opacity = '0';
  selBox.value = val;
  document.body.appendChild(selBox);
  selBox.focus();
  selBox.select();
  document.execCommand('copy');
  document.body.removeChild(selBox);
  this.btn="Copied"
}

}
