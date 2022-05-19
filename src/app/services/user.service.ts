import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user$ = new BehaviorSubject<string>('');
  user$ = this._user$.asObservable();

  constructor() {}

  getName(): Observable<string> {
    return this.user$;
  }

  setName(userName: string) {
    this._user$.next(userName);
  }
}

