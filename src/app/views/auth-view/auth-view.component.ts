import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../../services/auth/auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {
  errMsg: string;

  constructor(private authService: AuthService, private router: Router) {
    this.errMsg = "";
  }

  ngOnInit(): void {
  }

  onSubmitAuthForm(form: NgForm) {
    const values = form.form.value;
    console.log(values.email);
    console.log(values.password);
    this.authService
      .signin(values.email, values.password)
      .then(() => {
        this.router.navigateByUrl('home');
      })
      .catch((errMsg: string) => {
        this.errMsg = errMsg;
      });
  }
}
