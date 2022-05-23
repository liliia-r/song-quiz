import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  score: number = 0;
  isCorrectAnswerSelected!: boolean;
  clickedSongsCount: number = 0;

  constructor() {}

  setScore(value: number) {
    this.score += value;
  }

  getScore() {
    return this.score;
  }

  clearScore() {
    this.score = 0;
  }

  setIsCorrectAnswerSelected(option: boolean) {
    this.isCorrectAnswerSelected = option;
  }

  getIsCorrectAnswerSelected() {
    return this.isCorrectAnswerSelected;
  }

  setClickedSongsCount(value: number) {
    this.clickedSongsCount += value;
  }

  getClickedSongsCount() {
    return this.clickedSongsCount;
  }
}
