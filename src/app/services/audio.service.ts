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

  percent: number = 0

  constructor() {
    this.audio = new Audio();
  }

  setAudio(audio: HTMLAudioElement) {
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

  toggleAudio(): void {
    !this.isPlaying ? this.playAudio() : this.pauseAudio();
  }

  resetAudio() {
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

  updateCurrentTime() {
    this.currentDuration = this.getConvertedCurrentTime(this.audio.currentTime);
  }

  updateTimeRange() {
    this.percent = Math.round(
      (this.audio.currentTime / this.audio.duration) * 100);
    
 
    return `linear-gradient(270deg, rgba(27, 29, 49, 0.6) ${100 -this.percent }%, #7E55B3 0%, #7E55B3 99.44%)`

      }
}
