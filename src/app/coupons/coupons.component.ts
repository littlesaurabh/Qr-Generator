import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CouponService } from './coupon.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

  constructor(private couponService: CouponService) { }

  public backgroundColor: string;
  public fontColor: string;
  public linkColor: string;
  coupon: boolean = false;
  couponcode: any="SALE25OFF";
  heading: any = "Storewide Holiday Sale"
  public imagePath;
  offer: any = "25%"
  ImgSize: any = 240;
  desc: any = "Get all of your holiday shopping done early this year! Discounted items on all designer clothing, bags, and more."
  Company: any = "Elle Boutique"
  imgURL: any = "https://s3.eu-central-1.amazonaws.com/qrcgappcdn/coupon-solution/header.jpg";
  btn:any="Copy Code";
  validity:any="28 Jul 2020"
  public message: string;
  tnc:any=""
  web:any="https://www.amazon.com/"
  cname:any=""
  btn1:any="QR Code";
  image;
  ngOnInit() {
    this.backgroundColor = '#fff';
    this.fontColor = '#222';
    this.linkColor = '#4b4fce';
    // this.validity=moment().format('DD-MMM-YYYY');
  }

  /**
   * Set color from color picker
   * @param {string} type
   * @param {string} color
   */
  change2(){
    if(this.btn1=="QR Code")
    this.btn1="Preview"
    else
    this.btn1="QR Code"
  }
  goToLink(){
    window.open(this.web, "_blank");
}
  public setColor(type: string, color: string) {
    switch (type) {
      case 'background':
        this.backgroundColor = color;
        break;
      case 'font':
        this.fontColor = color;
        break;
      case 'link':
        this.linkColor = color;
        break;
      default:
        break;
    }

  }
  couponc() {
    if(this.coupon)
    this.coupon=false;
    else
    this.coupon=true;
   
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  updateSetting(event) {
    this.ImgSize = event.value;
    console.log()
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

  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  
  }

  changeFile(e) {
    console.log(e.target);
    if (e.target.name === 'image') {
      this.image = e.target.files[0]
    }
  }

  navigate() {
    const data = {
      'user': '5ef247c92eafbd1ed045c9d7',
      'coupon_name': this.cname,
      'design_color_background': this.backgroundColor,
      'design_color_text': this.fontColor,
      'design_color_button': this.linkColor,
      'company': this.Company,
      'headline': this.heading,
      'description': this.desc,
      'sale_badge': this.offer,
      'startDate': this.validity,
      'terms_and_conditions': this.tnc,
      'website_url': this.web,
      'coupon_code': this.couponcode
    }

    const formData = new FormData();
    Object.keys(data).forEach(key => formData.append(key, data[key]));

    formData.append('image', this.image);

    this.couponService.saveCoupon(formData).subscribe(data => {
      console.log(data)
    }, err => {
      console.log(err)
    })
    
  }
}
