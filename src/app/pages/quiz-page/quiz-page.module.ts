import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { QuizPageComponent } from './quiz-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { AudioPlayerButtonComponent } from './components/audio-player-button/audio-player-button.component';
import { AudioPlayerProgressComponent } from './components/audio-player-progress/audio-player-progress.component';
import { QuestionComponent } from './components/question/question.component';
import { SongPartComponent } from './components/song-part/song-part.component';

@NgModule({
  declarations: [
    QuizPageComponent,
    HeaderComponent,
    ProgressBarComponent,
    AudioPlayerButtonComponent,
    AudioPlayerProgressComponent,
    QuestionComponent,
    SongPartComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [QuizPageComponent],
})
export class QuizPageModule {}
