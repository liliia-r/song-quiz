import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userName!: Observable<string>;
  score: number = 0;

  constructor(private userService: UserService) {
    this.userName = this.userService.getName();
  }

  ngOnInit(): void {}
}
