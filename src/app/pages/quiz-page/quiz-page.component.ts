import { ScoreService } from './../../services/score.service';
import { AudioService } from './../../services/audio.service';
import { SongsService } from './../../services/songs.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Songs } from '../../models/songs.interface';
import { Song } from '../../models/song.interface';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
})
export class QuizPageComponent implements OnInit, OnDestroy {
  isLoading$!: Observable<boolean>;

  songsData!: Songs[];
  currentGenre!: Songs;
  genreIndex: number = 0;

  correctSong!: Song;

  checkedSong!: Song | null;

  subscription!: Subscription;

  constructor(
    private songsService: SongsService,
    private audioService: AudioService,
    private router: Router,
    public scoreService: ScoreService
  ) {}

  ngOnInit() {
    this.isLoading$ = this.songsService.isLoading$;

    this.subscription = this.songsService.getData().subscribe((res: any) => {
      this.songsData = res;
      this.currentGenre = this.songsData[this.genreIndex];
    });
  }

  getNextQuestionIndex() {
    if (this.genreIndex < this.songsData.length - 1) {
      this.genreIndex += 1;
      this.currentGenre = this.songsData[this.genreIndex];
      this.scoreService.setIsCorrectAnswerSelected(false);
    }
  }

  finishQuiz() {
    this.router.navigate(['/finish']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
