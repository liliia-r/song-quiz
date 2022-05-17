import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { QuizPageComponent } from './quiz-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [QuizPageComponent, HeaderComponent, ProgressBarComponent],
  imports: [CommonModule, SharedModule],
  exports: [QuizPageComponent],
})
export class QuizPageModule {}
