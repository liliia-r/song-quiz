import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { FinishPageComponent } from './finish-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [FinishPageComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
})
export class FinishPageModule {}
