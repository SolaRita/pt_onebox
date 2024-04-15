import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
  @Input() selectedEvent!: EventDetail;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['selectedEvent'] &&
      changes['selectedEvent'].currentValue.length > 0
    ) {
      this.selectedEvent = changes['selectedEvents'].currentValue;
    }
  }
}
