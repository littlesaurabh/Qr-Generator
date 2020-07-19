import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  constructor(private http:HttpClient) { }

  spinner=false
  img:any;
  public backgroundColor: string;
  public fontColor: string;
  public linkColor: string;
  coupon: boolean = false;
  couponcode: any="SALE25OFF";
  heading: any = "Connect with us on social media"
  public imagePath;
  offer: any = "25%"
  ImgSize: any = 360;
  urltext:any="Visit us online"
  youtube:any="www.youtube.com/id"
  youtext:any="Watch our videos"
  facebook:any="www.facebook.com/id"
  fbtext:any="Become a fan"
  about: any = "Follow us and get updates delivered to your favorite social media channel."
  // headline: any = "Connect with us on social media"
  imgURL: any = "https://media.sproutsocial.com/uploads/2017/11/Social-Media-Ideas.png";
  btn:any="Copy Code";
  validity:any="28 Jul 2020"
  public message: string;
  tnc:any=""
  image
  web:any="https://www.amazon.com/"
  cname:any=""
  data:any
  btn1:any="QR Code";
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
  navigate() {
    this.spinner=true
    // this.img1=""
    const data = {
      'user': '5ef247c92eafbd1ed045c9d7',
      'socialMedia_name': this.cname,
      'background': this.backgroundColor,
      'font': this.fontColor,
      'link': this.linkColor,
      'aboutUs': this.about,
      'headline': this.heading,
      // 'description': this.desc,
      'websiteUrl': this.web,
      'websiteText': this.urltext,
      // 'startDate': this.validity,
      'facebookUrl': this.facebook,
      'facebookText':this.fbtext,
      'youtubeUrl': this.youtube,
      'youtubeText': this.youtext,
      'isActive':true,
      'scanned':0
      // 'socialMedia_name':''
    }
    // const formData = new FormData();
    // Object.keys(data).forEach(key => formData.append(key, data[key]));

    // formData.append('image', this.image);
    this.http.post("https://whispering-thicket-97767.herokuapp.com/socialMedia", data).subscribe(success=>{
      console.log(data,success)
    this.data=success,
    this.img=this.data.response.data
    },
    (error)=>{
      console.log(error)
    })
    this.spinner=false
}
}
