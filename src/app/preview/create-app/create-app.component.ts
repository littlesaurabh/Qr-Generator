import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-create-app',
  templateUrl: './create-app.component.html',
  styleUrls: ['./create-app.component.css']
})
export class CreateAppComponent implements OnInit {
  constructor(  private route: ActivatedRoute,private http:HttpClient) { }

  

  public backgroundColor: string;
  public fontColor: string;
  public linkColor: string;
  coupon: boolean = false;
  couponcode: any="SALE25OFF";
  heading: any = "Storewide Holiday Sale"
  public imagePath;
  offer: any = "25%"
  ImgSize: any = 180;
  desc: any = "Latest Song."
  mp3:any
  title:any="Stars"
  info:any="Turn your photos into professional artwork with detailed editing and retouching of your images. Less"
  Company: any = "Elle Boutique"
  imgURL: any = "https://cdn.pixabay.com/photo/2017/11/15/09/28/music-player-2951399__340.jpg";
  btn:any="Buy Now";
  validity:any="28 Jul 2020"
  public message: string;
  tnc:any=""
  web:any="https://www.amazon.com/"
  cname:any=""
  btn1:any="QR Code";
  logo;
  img1:any="";
  data:any;
  spinner=false
  appname:any="PIC INFINYG";
  dev:any="PicBros";
 
id;coupo
data1
// data
image
ngOnInit() {
  this.backgroundColor = '#fff';
  this.fontColor = '#222';
  this.linkColor = '#4b4fce';
  // this.validity=moment().format('DD-MMM-YYYY');
  this.route.paramMap.subscribe(params => {
    this.id = params.get('id')
    this.loadData(this.id)
  })
}
goToLink1(){
  window.open(this.data.app.appStore, "_blank");
}
goToLink2(){
  window.open(this.data.app.playStore, "_blank");
}
loadData(id) {
  this.http.get("https://whispering-thicket-97767.herokuapp.com/app/preview/" + id).subscribe(data => {
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
  /**
   * Set color from color picker
   * @param {string} type
   * @param {string} color
   */
  change2(){
    console.log(this.img1)
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
      this.logo = e.target.files[0]
    } else  if (e.target.name === 'mp3') {
      this.mp3 = e.target.files[0]
    }
  }

  navigate() {



}
}
