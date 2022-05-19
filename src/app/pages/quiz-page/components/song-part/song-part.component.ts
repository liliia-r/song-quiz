import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-song-part',
  templateUrl: './song-part.component.html',
  styleUrls: ['./song-part.component.scss'],
})
export class SongPartComponent implements OnInit {
  @Input() genreObj!: any;

  constructor() {}

  ngOnInit(): void {}
}
