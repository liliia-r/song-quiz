import { ScoreService } from './../../../../services/score.service';
import { SongsService } from './../../../../services/songs.service';
import { Component, OnInit, Input } from '@angular/core';
import { Songs } from '../../../../models/songs.interface';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  @Input() songsData!: Songs[];
  @Input() currentGenre!: Songs;
  @Input() genreIndex!: number;

  genresPassed: Songs[] = [];

  constructor(public scoreService: ScoreService) {}

  ngOnInit(): void {}

  enableProdMode(): void {}
}
