import { ScoreService } from './../../../../services/score.service';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { AudioService } from '../../../../services/audio.service';
import { SongsService } from '../../../../services/songs.service';
import { Songs } from '../../../../models/songs.interface';
import { Song } from '../../../../models/song.interface';

const DEFAULT_COUNT_SONGS = 4;

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit, OnChanges {
  @Input() currentGenre!: Songs;
  correctSong!: Song;

  checkedSongId!: string;
  checkedSongIndex!: number;

  points: any = {
    1: 3,
    2: 2,
    3: 1,
    4: 0,
  };
  scorePoints!: number;
  clickedSongsCount: number = 0;
  clickedSongsIds: string[] = [];

  score: number = 0;

  ROOT_URL = 'https://levi9-song-quiz.herokuapp.com/api/';

  constructor(
    private songsService: SongsService,
    public scoreService: ScoreService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    this.checkedSongIndex = -1;
    this.getCorrectSong();
    this.clickedSongsCount = 0;
  }

  ngOnInit(): void {
    this.scoreService.setIsCorrectAnswerSelected(false);
  }

  getCorrectSong() {
    const correctSongIndex = Math.floor(Math.random() * DEFAULT_COUNT_SONGS);
    this.correctSong = this.currentGenre.data[correctSongIndex];
  }

  selectSong(id: string, i: number) {
    this.checkedSongId = id;
    this.checkedSongIndex = i;

    this.clickedSongsCount += 1;
    this.scoreService.setClickedSongsCount(this.clickedSongsCount);

    if (this.clickedSongsIds.includes(this.correctSong.id)) {
      return;
    }
    this.clickedSongsIds.push(id);

    if (id === this.correctSong.id) {
      this.scorePoints = this.points[this.clickedSongsCount];

      this.scoreService.setScore(this.scorePoints);

      this.scoreService.setIsCorrectAnswerSelected(true);

      return;
    }

    this.scoreService.setIsCorrectAnswerSelected(false);
  }
}
