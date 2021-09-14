import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../../services/auth/auth.service";

// import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {
  errMsg: string;
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {
    this.errMsg = "";
    this.email = "";
    this.password = "";
  }

  ngOnInit(): void {
  }

  onSubmitAuthForm() {

    this.authService
      .signin(this.email, this.password)
      .then(() => {
        this.router.navigateByUrl('home');
      })
      .catch((errMsg: string) => {
        this.errMsg = errMsg;
      });
  }
}
