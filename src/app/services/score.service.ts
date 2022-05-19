import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  score: number = 0;

  constructor() {}

  countScore(num: number) {
    return (this.score += num);
  }
}
