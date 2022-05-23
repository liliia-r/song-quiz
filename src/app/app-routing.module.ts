import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartPageComponent } from './pages/start-page/start-page.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { FinishPageComponent } from './pages/finish-page/finish-page.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'quiz', component: QuizPageComponent },
  { path: 'finish', component: FinishPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
