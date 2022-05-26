import { Song } from '../../../../models/song.interface';
import { Component, OnInit, Input } from '@angular/core';
import { AudioService } from './../../../../services/audio.service';

@Component({
  selector: 'app-song-part',
  templateUrl: './song-part.component.html',
  styleUrls: ['./song-part.component.scss'],
  providers: [AudioService]
})
export class SongPartComponent implements OnInit {
  @Input() currentGenre!: Song;

  constructor(public audioService: AudioService) {}

  ngOnInit(): void {}
}
