import { Songs } from 'src/app/models/song.interface';
import { ScoreService } from './score.service';
import { SongsService } from './songs.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  songsData!: Songs[];
  genreObj!: Songs;
  idx: number = 0;
  ROOT_URL = 'https://levi9-song-quiz.herokuapp.com/api/data';

  constructor(
    private songsService: SongsService,
    private scoreService: ScoreService
  ) {}

  // getGenreObj(): Songs {
  //   return this.songsService.getData().subscribe((res) => {
  //     this.genreObj = res;
  //   });
  // }
}
