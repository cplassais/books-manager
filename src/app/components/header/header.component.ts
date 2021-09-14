import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from 'src/app/services/auth/auth.service';
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isConnected!: boolean;
  tokenSub!: Subscription;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.tokenSub = this.authService.token.subscribe(
      (token: string) => {
        this.isConnected = !!token;
      }
    )
    if (this.authService.token.getValue()) {
      this.isConnected = true;
    }
    this.isConnected = false;
  }

  onClickSignOut() {
    this.authService
      .signout()
      .then(() => {
        this.router.navigateByUrl('auth')
          .catch(() => {
            console.log('erreur')
          })
      })
  }

  ngOnDestroy() {
    this.tokenSub.unsubscribe();

  }
}
