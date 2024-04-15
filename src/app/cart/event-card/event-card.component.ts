import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { EventDetail } from '../interfaces/event-detail';

@Component({
  selector: 'app-event-card',
  standalone: false,
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCardComponent implements OnChanges {
  @Input()
  eventDetail!: EventDetail;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['event'] && changes['event'].currentValue.length > 0) {
      this.eventDetail = changes['selectedEvents'].currentValue;
    }
  }
}
