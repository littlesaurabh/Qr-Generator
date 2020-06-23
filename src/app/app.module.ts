import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// emailAuth
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SuperDashboardComponent } from './components/super-dashboard/super-dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { environment } from 'src/environments/environment';
import { QrmenuComponent } from './qrmenu/qrmenu.component';
import { MobileComponent } from './mobile/mobile.component';
import { WebsiteComponent } from './website/website.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { CouponsComponent } from './coupons/coupons.component';
import { BusinessComponent } from './business/business.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RatingComponent } from './rating/rating.component';
import { VideoComponent } from './video/video.component';
import { PdfComponent } from './pdf/pdf.component';
import { FacebookComponent } from './facebook/facebook.component';
import { ImagesComponent } from './images/images.component';
import { Mp3Component } from './mp3/mp3.component';
import {CreateappComponent} from './createapp/createapp.component';
import { VcardComponent } from './vcard/vcard.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    SuperDashboardComponent,
    SignupComponent,
    QrmenuComponent,
    MobileComponent,
    WebsiteComponent,
    SocialMediaComponent,
    CouponsComponent,
    BusinessComponent,
    FeedbackComponent,
    RatingComponent,
    VideoComponent,
    PdfComponent,
    FacebookComponent,
    ImagesComponent,
    Mp3Component,
    CreateappComponent,
    VcardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
