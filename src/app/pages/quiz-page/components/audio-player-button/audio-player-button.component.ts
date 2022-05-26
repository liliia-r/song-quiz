import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AudioService } from './../../../../services/audio.service';

@Component({
  selector: 'app-audio-player-button',
  templateUrl: './audio-player-button.component.html',
  styleUrls: ['./audio-player-button.component.scss'],
})
export class AudioPlayerButtonComponent implements OnInit, OnChanges {
  constructor(public audioService: AudioService) {}

  ngOnChanges(changes: SimpleChanges) {}

  ngOnInit(): void {}
}
