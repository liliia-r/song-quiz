import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private _user$ = new BehaviorSubject<string | null>(null);
  // user$ = this._user$.asObservable();

  // isLoggedIn = false;
  user!: string;
  constructor() {}

  getName() {
    return JSON.parse(localStorage.getItem('userName') || '');
  }

  setName(userName: string) {
    this.user = userName;
    // this._user$.next(userName);
    localStorage.setItem('userName', JSON.stringify(this.user));
  }
}
