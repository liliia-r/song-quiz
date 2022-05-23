import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { ScoreService } from './../../services/score.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finish-page',
  templateUrl: './finish-page.component.html',
  styleUrls: ['./finish-page.component.scss'],
})
export class FinishPageComponent implements OnInit {
  sum!: number;

  constructor(
    public scoreService: ScoreService,
    private router: Router,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.sum = this.scoreService.getScore();
  }

  tryAgain() {
    this.scoreService.setIsCorrectAnswerSelected(false);
    this.scoreService.clearScore();
    this.router.navigate(['/quiz']);
  }
}
