import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  email;
  password;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
  }

  login() {
    console.log(this.email, this.password);
    this.afAuth
      .signInWithEmailAndPassword(this.email, this.password)
      .then((data) => {
        if (data.user.emailVerified) {
          this.toastr.success("Login success!", "Success", {
            timeOut: 3000,
          });
          this.router.navigateByUrl("dashboard");
        } else {
          this.toastr.warning("Email Not verified.", "Warning", {
            timeOut: 3000,
          });
        }
      })
      .catch((err) => {
        console.log(this.toastr);
        this.toastr.error("Wrong Credentials", "Error", {
          timeOut: 3000,
        });
      });
  }
}
