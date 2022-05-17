import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { StartPageComponent } from './start-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [StartPageComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
})
export class StartPageModule {}
