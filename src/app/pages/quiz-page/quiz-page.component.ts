import { ScoreService } from './../../services/score.service';
import { StateService } from './../../services/state.service';
import { AudioService } from './../../services/audio.service';
import { SongsService } from './../../services/songs.service';
// import { Observable } from 'rxjs';
import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
} from '@angular/core';
import { Songs, Song } from 'src/app/models/song.interface';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
})
export class QuizPageComponent implements OnInit {
  idx: number = 0;
  songsData!: Songs[];
  genreObj!: Songs;

  // checkedIndex!: number;
  // correctIndex!: number;

  // correctSong!: Song;

  // isCorrect!: boolean;
  // isQuizCompleted!: boolean;
  // state: any = {};

  constructor(
    private songsService: SongsService,
    private audioService: AudioService,
    private stateService: StateService,
    private scoreService: ScoreService
  ) {}

  ngOnInit() {
    this.songsService.getData().subscribe((res: any) => {
      this.songsData = res;
      this.genreObj = this.songsData[this.idx];
    });
  }

  nextIndex() {
    if (this.idx < this.songsData.length - 1) {
      this.idx += 1;
      this.genreObj = this.songsData[this.idx];
    }
  }
}
