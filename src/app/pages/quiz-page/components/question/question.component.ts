import { ScoreService } from './../../../../services/score.service';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { AudioService } from '../../../../services/audio.service';
import { SongsService } from '../../../../services/songs.service';
import { Songs, Song } from 'src/app/models/song.interface';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit, OnChanges {
  // @Input() correctSong!: any;
  @Input() genreObj!: any;

  // songs: any;
  ROOT_URL = 'https://levi9-song-quiz.herokuapp.com/api/data';

  checkedIndex!: number;
  correctIndex!: number;

  correctSong!: Song;

  isCorrect!: boolean;
  state: any = {};

  constructor(
    private songsService: SongsService,
    private scoreService: ScoreService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    this.checkedIndex = -1;
    this.correctIndex = Math.floor(Math.random() * 4);
    this.correctSong = this.genreObj.data[this.correctIndex];
    this.isCorrect = false;
  }

  ngOnInit(): void {}

  selectSong(song: Song, i: number) {
    this.checkedIndex = i;

    if (song.id === this.correctSong.id) {
      this.state[song.id] = 'correct';
      this.isCorrect = true;
      this.scoreService.countScore(4 - Object.keys(this.state).length);
    } else if (song.id !== this.correctSong.id) {
      this.isCorrect = false;
      this.state[song.id] = 'error';
    }

    console.log(this.isCorrect);
  }
}
