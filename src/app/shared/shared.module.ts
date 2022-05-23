import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { LogoComponent } from './logo/logo.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [ButtonComponent, LogoComponent, LoaderComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, LogoComponent, LoaderComponent],
})
export class SharedModule {}
