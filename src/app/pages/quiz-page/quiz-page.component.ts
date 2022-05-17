import { SongsService } from './../../services/songs.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Songs } from 'src/app/models/song.interface';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
})
export class QuizPageComponent implements OnInit {
  songsData!: Songs[];

  constructor(private songsService: SongsService) {}

  ngOnInit() {
    this.songsService.getData().subscribe((res: any) => {
      this.songsData = res;
      console.log(this.songsData);
    });
  }
}
