import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  song = '../../assets/Ennio Morricone.mp3';

  isPlay: boolean = false;
  currentDuration: number = 0;
  currentTime: number = 0;
  audio!: any;
  minutes!: number;
  seconds!: number;

  constructor() {}

  togglePlay() {
    this.audio = document.querySelector('.audio-item');

    if (!this.isPlay) this.audio.play();
    else this.audio.pause();
    this.isPlay = !this.isPlay;
  }

  // updateTimeProgress() {
  //   this.minutes = Math.floor(this.audio.currentTime / 60);
  //   this.seconds = Math.floor(this.audio.currentTime % 60);
  //   if (this.seconds < 10) {
  //     this.seconds = `0${this.seconds}`;
  //   }
  //   if (seconds) {
  //     currentSound.textContent = `${minutes}:${seconds}`;
  //   }

  //   progressTime.value = (audio.currentTime / audio.duration) * 100;

  //   audio.currentTime =
  //     (progressTime.offsetX / progressTime.offsetWidth) * audio.duration;
  // }
}
