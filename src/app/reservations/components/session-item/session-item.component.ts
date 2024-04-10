import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-session-item',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './session-item.component.html',
  styleUrl: './session-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SessionItemComponent { }
