import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  name;
  email;
  password;
  repassword;

  constructor(private afAuth: AngularFireAuth, private toastr: ToastrService) {}

  ngOnInit() {}

  signUp() {
    if (this.password !== this.repassword) {
      this.toastr.error("Passwords do not match.", "Error", {
        timeOut: 3000,
      });
    } else {
      this.afAuth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          this.toastr.success(
            "Please verify your email, a mail has been sent !",
            "Success",
            {
              timeOut: 3000,
            }
          );
          data.user
            .sendEmailVerification()
            .then((_) => {
              console.log("sent");
            })
            .catch((err) => {
              console.log("Err");
            });
        })
        .catch((err) => {
          this.toastr.warning("User already registered.", "Warning", {
            timeOut: 3000,
          });
        });
    }
  }
}
