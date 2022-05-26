import { AudioService } from './../../../../services/audio.service';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
} from '@angular/core';
import { Song } from '../../../../models/song.interface';

@Component({
  selector: 'app-audio-player-progress',
  templateUrl: './audio-player-progress.component.html',
  styleUrls: ['./audio-player-progress.component.scss'],
})
export class AudioPlayerProgressComponent
  implements OnInit, OnChanges, DoCheck {
  @Input() correctSong!: Song;

  audioInputMaxValue!: number;
  audioInputCurrentValue!: number;

  ROOT_URL = 'https://levi9-song-quiz.herokuapp.com/api/';

  constructor(public audioService: AudioService) {}

  ngOnChanges(change: SimpleChanges) {}

  ngOnInit(): void {}

  ngDoCheck(): void {}

}
