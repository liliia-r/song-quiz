import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { StartPageComponent } from './start-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StartPageComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginPageModule {}
