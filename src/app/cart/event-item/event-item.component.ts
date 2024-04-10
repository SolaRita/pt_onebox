import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-event-item',
  standalone: false,
  templateUrl: './event-item.component.html',
  styleUrl: './event-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventItemComponent {
  deleteOne() {
    throw new Error('Method not implemented.');
  }
}
