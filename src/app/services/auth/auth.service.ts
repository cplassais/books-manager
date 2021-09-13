import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: BehaviorSubject<string>;

  constructor() {
    this.token = new BehaviorSubject<string>('');
  }

  signin(email: string, password: string): Promise<void | string> {
    return new Promise<void | string>(
      (res, rej) => {
        setTimeout(() => {
          this.token.next('azertyuiop');
          res();
        }, 300);
      }
    )
  }

  signout(): Promise<void> {

    return new Promise<void>(
      (res, rej) => {
        this.token.next('');
        res();
      }
    );
  }
}
