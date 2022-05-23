import { Song } from '../../../../models/song.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-song-part',
  templateUrl: './song-part.component.html',
  styleUrls: ['./song-part.component.scss'],
})
export class SongPartComponent implements OnInit {
  @Input() currentGenre!: Song;

  constructor() {}

  ngOnInit(): void {}
}
