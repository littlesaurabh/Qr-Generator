import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SuperDashboardComponent } from './components/super-dashboard/super-dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { QrmenuComponent } from './qrmenu/qrmenu.component'
import { Mp3Component } from './mp3/mp3.component'
import { BusinessComponent } from './business/business.component'
import { CouponsComponent } from './coupons/coupons.component'
import { FeedbackComponent } from './feedback/feedback.component'
import { MobileComponent } from './mobile/mobile.component'
import { PdfComponent } from './pdf/pdf.component'
// import {QrmenuComponent} from './qrmenu/qrmenu.component'
import { RatingComponent } from './rating/rating.component'
import { SocialMediaComponent } from './social-media/social-media.component'
import { WebsiteComponent } from './website/website.component'
import { ImagesComponent } from './images/images.component'
import { VideoComponent } from './video/video.component'
import { CreateappComponent } from './createapp/createapp.component'
import { FacebookComponent } from './facebook/facebook.component'
import { VcardComponent } from './vcard/vcard.component'
import { CouponComponent } from './preview/coupon/coupon.component';
import {Mp3PComponent} from'./preview/mp3-p/mp3-p.component'
import {PdfvComponent} from './preview/pdfv/pdfv.component'
import { EventComponent } from './event/event.component';
import { SocialmediapComponent } from './preview/socialmediap/socialmediap.component';
import { WebsitepComponent } from './preview/websitep/websitep.component';
import { BusinesspComponent } from './preview/businessp/businessp.component';
import { CreateAppComponent } from './preview/create-app/create-app.component';
import { VideopComponent } from './preview/videop/videop.component';
import { VcardpComponent } from './preview/vcardp/vcardp.component';
import { RatingpComponent } from './preview/ratingp/ratingp.component';
import { FacebookpComponent } from './preview/facebookp/facebookp.component';
import { ImagepComponent } from './preview/imagep/imagep.component';
import { FeedbackpComponent } from './preview/feedbackp/feedbackp.component';
import { EventpComponent } from './preview/eventp/eventp.component';
// import {RatingComponent0}
const routes: Routes = [

  { path: "signin", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "qrmenu", component: QrmenuComponent },
  {
    path: "super-dash", component: SuperDashboardComponent
  },
  { path: "mp3", component: Mp3Component },
  { path: "business", component: BusinessComponent },
  { path: "coupons", component: CouponsComponent },
  { path: "feedback", component: FeedbackComponent },
  { path: "mobile", component: MobileComponent },
  { path: "pdf", component: PdfComponent },
  { path: "rating", component: RatingComponent },
  { path: "socialmedia", component: SocialMediaComponent },
  { path: "website", component: WebsiteComponent },
  { path: "images", component: ImagesComponent },
  { path: "video", component: VideoComponent },
  { path: "createapp", component: CreateappComponent },
  { path: "facebook", component: FacebookComponent },
  { path: "event", component: EventComponent },
  { path: "vcard", component: VcardComponent },
  { path: "preview/coupon/:id", component: CouponComponent },
  { path: "mp3/preview/:id", component:Mp3PComponent},
  { path: "pdf/preview/:id", component:PdfvComponent},
  { path: "facebook/preview/:id", component:FacebookpComponent},
  { path: "socialmedia/preview/:id", component:SocialmediapComponent},
  { path: "website/preview/:id", component:WebsitepComponent},
  { path: "business/preview/:id", component:BusinesspComponent},
  { path: "video/preview/:id", component:VideopComponent},
  { path: "vCard/preview/:id", component:VcardpComponent},
  { path: "images/preview/:id", component:ImagepComponent},
  { path: "feedback/preview/:id", component:FeedbackpComponent},
  { path: "rating/preview/:id", component:RatingpComponent},
  { path: "app/preview/:id", component:CreateAppComponent},
  { path: "event/preview/:id", component:EventpComponent},
  { path        : '**',
  pathMatch   : 'full', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
