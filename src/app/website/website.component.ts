import { Component, OnInit } from '@angular/core';
import {WebService} from './web.service'
@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  constructor(private web:WebService) { }
  cname:any=""
  website:any;
  webd:any
  data:any
  img:any
  ngOnInit() {
  }
 
  generateqr(){
    this.webd={
      user:"5ef247c92eafbd1ed045c9d7",
      qrname:this.cname,
      url:this.website
    }
    console.log(this.webd)
    this.web.webqr(this.webd).subscribe(
      (success)=>{console.log(success)
      this.data=success
    console.log(this.data.response.data)
  this.img=this.data.response.data},
      (error)=>{console.log(error)}
    )
  }
}
