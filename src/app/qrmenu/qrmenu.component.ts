import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-qrmenu',
  templateUrl: './qrmenu.component.html',
  styleUrls: ['./qrmenu.component.css']
})
export class QrmenuComponent implements OnInit {

  constructor(private router:Router){}
  // {path:"mp3",component:Mp3Component},
  // {path:"business",component:BusinessComponent},
  // {path:"coupons",component:CouponsComponent},
  // {path:"feedback",component:FeedbackComponent},
  // {path:"mobile",component:MobileComponent},
  // {path:"pdf",component:PdfComponent},
  // {path:"Rating",component:RatingComponent},
  // {path:"SocialMedia",component:SocialMediaComponent},
  // {path:"Website",component:WebsiteComponent},
  // {path:"Images",component:ImagesComponent},
  // {path:"Video",component:VideoComponent},
  // {path:"CreateApp",component:CreateappComponent},
  // {path:"facebook",component:FacebookComponent}
  menu = [

    {
      icon: "chrome",
      value: "Website",
      desc: "Link to any page on the web",
      url: 'website'
    },

    // {
    //   icon: "suitcase",
    //   value: "Business Page",
    //   desc: "Provide your company information",
    //   url: 'business'
    // },

    {
      icon: "group",
      value: "Social Media",
      desc: "Link to your social media channels",
      url: 'socialmedia'
    },




    {
      icon: "tag",
      value: "Coupons",
      desc: "Share coupons and discounts",
      url: 'coupons'
    },



    {
      icon: "address-book",
      value: "vCard Plus",
      desc: "Share personalized contact details",
      url: 'vcard'
    },







    // {
    //   icon: "pencil-square-o",
    //   value: "Feedback",
    //   desc: "Collect feedback and get rated",
    //   url: 'feedback'
    // },
    {
      icon: "star",
      value: "Rating",
      desc: "Collect feedback and get rated",
      url: 'rating'
    },
    // {
    //   icon: "video-camera",
    //   value: "Video",
    //   desc: "Share one or more videos",
    //   url: 'video'
    // },


    {
      icon: "calendar-check-o",
      value: "Event",
      desc: "Promote your event",
      url: 'event'
    },


    {
      icon: "file-pdf-o",
      value: "PDF",
      desc: "Link to a mobile-optimized PDF",
      url: 'pdf'
    },

    {
      icon: "facebook-official",
      value: "Facebook",
      desc: "Get more Likes for your page",
      url: 'facebook'
    },
    {
      icon: "android",
      value: "App",
      desc: "View your app on various App Stores",
      url: 'createapp'
    },
    {
      icon: "file-audio-o",
      value: "MP3",
      desc: "Play an audio file",
      url: 'mp3'
    },
    {
      icon: "picture-o",
      value: "Images",
      desc: "Show a series of photo",
      url: 'images'
    }



  ]
  ngOnInit() {
  }
 url:any;
  nav(url){
    console.log(url)
    this.url=url;
    // this.router.navigate([url]);
  }
  nagivate(){
    this.router.navigate([this.url]);
  }
}
