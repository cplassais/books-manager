import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }


  onSubmitAuthForm() {
    this.authService
      .signin('a@a.com', 'azerty')
      .then(() => {
        this.router.navigateByUrl('home');

      })
      .catch(() => {

      });
  }
}
