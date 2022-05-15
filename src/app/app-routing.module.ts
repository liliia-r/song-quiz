import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartPageComponent } from './pages/start-page/start-page.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'quiz', component: QuizPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
