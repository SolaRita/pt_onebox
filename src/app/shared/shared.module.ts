import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormatTextPipe } from './pipes/format-text.pipe';

@NgModule({
  declarations: [HeaderComponent, FormatTextPipe],
  exports: [HeaderComponent, FormatTextPipe],
  imports: [CommonModule],
})
export class SharedModule {}
