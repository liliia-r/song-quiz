import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user!: string;
  constructor() {}

  getName() {
    return JSON.parse(localStorage.getItem('userName') || '');
  }

  setName(userName: string) {
    this.user = userName;
    localStorage.setItem('userName', JSON.stringify(this.user));
  }
}
