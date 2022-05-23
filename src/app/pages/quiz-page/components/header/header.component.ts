import { ScoreService } from './../../../../services/score.service';
import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userName!: string;

  score!: number;

  constructor(
    private userService: UserService,
    public scoreService: ScoreService
  ) {}

  ngOnInit(): void {
    this.userName = this.userService.getName();

    this.score = this.scoreService.getScore();
  }
}
