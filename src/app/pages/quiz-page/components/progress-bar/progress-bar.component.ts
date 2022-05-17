import { SongsService } from './../../../../services/songs.service';
import { Component, OnInit } from '@angular/core';
import { Songs } from 'src/app/models/song.interface';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  songsData!: Songs[];

  constructor(private songsService: SongsService) {}

  ngOnInit(): void {
    this.songsService.getData().subscribe((res: any) => {
      this.songsData = res;
      console.log(this.songsData);
    });
  }
}
