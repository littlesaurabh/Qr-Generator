import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

  
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  constructor(private http:HttpClient) { }
  data:any;
  pdfSrc:any="https://www.inf.ed.ac.uk/teaching/courses/nlu/assets/reading/Gurney_et_al.pdf"
  public backgroundColor: string;
  public fontColor: string;
  public linkColor: string;
  coupon: boolean = false;
  couponcode: any="SALE25OFF";
  heading: any = "Storewide Holiday Sale"
  public imagePath;
  offer: any = "25%"
  ImgSize: any = 240;
  desc: any = "Latest Song."
  company:any="QR Coders"
  pdf:any
  title:any="Research Paper"
  info:any="QR code generation using Angular."
  Company: any = "Elle Boutique"
  imgURL: any = "https://helpdeskgeek.com/wp-content/pictures/2020/04/pdf-file.png";
  btn:any="Buy Now";
  validity:any="28 Jul 2020"
  public message: string;
  tnc:any=""
  web:any="https://www.amazon.com/"
  cname:any=""
  btn1:any="QR Code";
  image;
  img1:any="";
  data1:any;
  spinner=false
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

 

  updateSetting(event) {
    this.ImgSize = event.value;
    console.log()
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
    if (e.target.name === 'pdf') {
      this.image = e.target.files[0]
    }
  }

  // navigate() {
    // this.spinner=true
    // this.img1=""
    // const data = {
    //   'user': '5ef247c92eafbd1ed045c9d7',
    //   'coupon_name': this.cname,
    //   'design_color_background': this.backgroundColor,
    //   'design_color_text': this.fontColor,
    //   'design_color_button': this.linkColor,
    //   'company': this.Company,
    //   'headline': this.heading,
    //   'description': this.desc,
    //   'sale_badge': this.offer,
    //   'startDate': this.validity,
    //   'terms_and_conditions': this.tnc,
    //   'website_url': this.web,
    //   'coupon_code': this.couponcode
    // }

    // const formData = new FormData();
    // Object.keys(data).forEach(key => formData.append(key, data[key]));

    // formData.append('image', this.image);

    // this.couponService.saveCoupon(formData).subscribe(data => {
    //   console.log(data)
    //   this.data=data
    //   this.img1=this.data.response.data
    //   this.spinner=false
    // }, err => {
    //   console.log(err)
    //   this.spinner=false
    // })
    
  // }
 
  navigate() {

    const data = new FormData();
    data.append("user", "5ef247c92eafbd1ed045c9d7")
    data.append("pdf_name", this.cname)
    data.append("file", this.image)
    
    this.http.post("https://whispering-thicket-97767.herokuapp.com/pdf", data).subscribe(success=>{
    this.data1=success
    this.img1=this.data1.response.data
    },
    (error)=>{
      console.log(error)

    })

}

}
