import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrmenu',
  templateUrl: './qrmenu.component.html',
  styleUrls: ['./qrmenu.component.css']
})
export class QrmenuComponent implements OnInit {

  constructor() { }
  menu = [

    {
      icon: "chrome",
      value: "Website",
      desc: "Link to any page on the web"
    },

    {
      icon: "group",
      value: "Social Media",
      desc: "Link to your social media channels"
    },




    {
      icon: "tag",
      value: "Coupons",
      desc: "Share coupons and discounts"
    },



    {
      icon: "address-book",
      value: "vCard Plus",
      desc: "Share personalized contact details"
    },



    {
      icon: "chrome",
      value: "Website",
      desc: "Link to any page on the web"
    },



    {
      icon: "pencil-square-o",
      value: "Feedback",
      desc: "Collect feedback and get rated"
    },
    {
      icon: "star",
      value: "Rating",
      desc: "Collect feedback and get rated"
    },
    {
      icon: "video-camera",
      value: "Video",
      desc: "Share one or more videos"
    },


    {
      icon: "calendar-check-o",
      value: "Event",
      desc: "Promote your event"
    },


    {
      icon: "file-pdf-o",
      value: "PDF",
      desc: "Link to a mobile-optimized PDF"
    },

    {
      icon: "facebook-official",
      value: "Facebook",
      desc: "Get more Likes for your page"
    },
    {
      icon: "android",
      value: "App",
      desc: "View your app on various App Stores"
    },
    {
      icon: "file-audio-o",
      value: "MP3",
      desc: "Play an audio file",
    },
    {
      icon: "picture-o",
      value: "Images",
      desc: "Show a series of photo"
    }



  ]
  ngOnInit() {
  }

}
