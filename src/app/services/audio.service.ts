import { Injectable } from '@angular/core';

@Injectable()
export class AudioService {
  isPlaying: boolean = false;

  currentDuration: string = '00:00';
  totalDuration: string = '00:30';

  audio!: HTMLAudioElement;

  minutes: string = '';
  seconds: string = '';

  minutesTotal: string = '';
  secondsTotal: string = '';

  percent: any = 0;

  constructor() {}

  setAudio(audio: HTMLAudioElement) {
    this.percent = 0;
    this.audio = audio;
    this.totalDuration = this.getConvertedCurrentTime(audio.duration);
  }

  playAudio(): void {
    this.audio.play();
    this.isPlaying = true;
  }

  pauseAudio(): void {
    this.audio.pause();
    this.isPlaying = false;
  }

  endSong(): void {
    this.pauseAudio();
    this.percent = 0;
  }

  toggleAudio(): void {
    !this.isPlaying ? this.playAudio() : this.pauseAudio();
  }

  resetAudio() {
    this.currentDuration = '00:00';
    this.pauseAudio();
    this.audio.load();
  }

  getConvertedCurrentTime(time: number) {
    this.minutes = String(Math.floor(time / 60));
    this.seconds = String(Math.floor(time % 60));
    if (+this.minutes < 10) {
      this.minutes = `0${this.minutes}`;
    }
    if (+this.seconds < 10) {
      this.seconds = `0${this.seconds}`;
    }

    return `${this.minutes}:${this.seconds}`;
  }

  updateCurrentTime(audio: HTMLAudioElement) {
    this.currentDuration = this.getConvertedCurrentTime(audio.currentTime);
  }

  updateTimeRange(audio: HTMLAudioElement) {
    this.percent = Math.round((audio.currentTime / audio.duration) * 100);

    return `linear-gradient(270deg, rgba(27, 29, 49, 0.6) ${
      100 - this.percent
    }%, #7E55B3 0%, #7E55B3 99.44%)`;
  }
}
