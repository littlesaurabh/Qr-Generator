import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {
  

  constructor(private http:HttpClient) { }
  data:any;

  public backgroundColor: string;
  public fontColor: string="white";
  public linkColor: string;
  coupon: boolean = false;
  couponcode: any="SALE25OFF";
  heading: any = ""
  public imagePath;
  offer: any = "25%"
  ImgSize: any ;
  desc: any = ""
  Company: any = "Lake Cruisers"
  imgURL: any = "https://www.pngitem.com/pimgs/m/33-336397_like-us-on-facebook-png-black-white-find.png";
  btn:any="Copy Code";
  validity:any="28 Jul 2020"
  public message: string;
  tnc:any=""
  web:any="www.facebook.com"
  mobile:any=""
  fax:""
  var:boolean=false;
  var2:boolean=true;
  var3:boolean=true;
  address:any
  phone:any
  job:any
  fb:any="www.facebook.com"
  fname="QR Code"
  title="Facebook Page"
  email

  lname:any
  cname:any=""
  btn1:any="QR Code";
  rate="2"
  currentRate = 6;
  ngOnInit() {
    this.backgroundColor = 'lightblue';
    this.fontColor = 'black';
    this.linkColor = 'black';
    // this.validity=moment().format('DD-MMM-YYYY');
  }

  /**
   * Set color from color picker
   * @param {string} type
   * @param {string} color
   */
  open(n){
   if(n==1)
   this.var=true
  }
  change2(){
    if(this.btn1=="QR Code")
    this.btn1="Preview"
    else
    this.btn1="QR Code"
  }
  goToLink(){
    window.open(this.web, "_blank");
}
  goToLink1(){
    window.open(this.fb, "_blank");
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
  img;
  image;
  navigate() {
    // this.spinner=true
    // this.img1=""
    const data = {
      'user': '5ef247c92eafbd1ed045c9d7',
      'facebook_name': this.cname,
      'background': this.backgroundColor,
      'font': this.fontColor,
      'link': this.linkColor,
      'image':this.image,
      'url':this.fb,
      'name':this.fname,
      'title':this.title,

      // 'aboutUs': this.about,
      // 'headline': this.heading,
      // 'description': this.desc,
      'website': this.web,
      // 'websiteText': this.urltext,
      // 'startDate': this.validity,
      // 'facebookUrl': this.facebook,
      // 'facebookText':this.fbtext,
      // 'youtubeUrl': this.youtube,
      // 'youtubeText': this.youtext,
      'isActive':true,
      'scanned':0
      // 'socialMedia_name':''
    }
    this.http.post("https://whispering-thicket-97767.herokuapp.com/facebook", data).subscribe(success=>{
    this.data=success
    this.img=this.data.response.data
    },
    (error)=>{
      console.log(error)
    })

}
}
