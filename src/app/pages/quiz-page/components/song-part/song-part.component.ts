import { Song } from '../../../../models/song.interface';
import { Component, OnInit, Input } from '@angular/core';
import { AudioService } from './../../../../services/audio.service';

@Component({
  selector: 'app-song-part',
  templateUrl: './song-part.component.html',
  styleUrls: ['./song-part.component.scss'],
  providers: [AudioService],
})
export class SongPartComponent implements OnInit {
  @Input() currentGenre!: Song;
  @Input() checkedSongUrl!: string;

  ROOT_URL = 'https://levi9-song-quiz.herokuapp.com/api/';

  constructor(public audioService: AudioService) {}

  ngOnInit(): void {}
}
