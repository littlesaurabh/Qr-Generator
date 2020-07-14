import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-vcard',
  templateUrl: './vcard.component.html',
  styleUrls: ['./vcard.component.css']
})
export class VcardComponent implements OnInit {

  constructor(private http:HttpClient) { }
  

  img;
  image;
  public backgroundColor: string;
  public fontColor: string="white";
  public linkColor: string;
  coupon: boolean = false;
  couponcode: any="SALE25OFF";
  heading: any = ""
  public imagePath;
  offer: any = "25%"
  ImgSize: any ;
  data:any;
  desc: any = ""
  Company: any = ""
  imgURL: any = "https://upload.wikimedia.org/wikipedia/commons/6/67/Vector_Face_wearing_Spectacles.png";
  btn:any="Copy Code";
  validity:any="28 Jul 2020"
  public message: string;
  tnc:any=""
  web:any=""
  mobile:any=""
  fax:""
  var:boolean=false;
  var2:boolean=true;
  var3:boolean=true;
  address
  phone
  job
  email
  fname
  lname
  cname:any=""
  btn1:any="QR Code";
  ngOnInit() {
    this.backgroundColor = 'grey';
    this.fontColor = 'white';
    this.linkColor = 'white';
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
    // this.spinner=true
    // this.img1=""
    const data = {
      'user': '5ef247c92eafbd1ed045c9d7',
      'vCard_name': this.cname,
      'background': this.backgroundColor,
      'font': this.fontColor,
      'link': this.linkColor,
      'image':this.image,
      'firstName':this.fname,
      'lastName':this.lname,
      'phoneNumber':this.phone,
      'mobileNumber':this.mobile,
      'faxNumber':this.fax,
      'company':this.Company,
      'email':this.email,
      'job':this.job,
      'address':this.address,
      'description':this.desc,
      'website':this.web,

    
    }
    this.http.post("https://whispering-thicket-97767.herokuapp.com/vcard", data).subscribe(success=>{
    this.data=success
    console.log(success)
    this.img=this.data.response.data
    },
    (error)=>{
      console.log(error)
    })

}
}
