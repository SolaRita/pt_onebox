import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Event } from '../../interfaces/event';

@Component({
  selector: 'app-event-list',
  standalone: false,
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventListComponent implements OnChanges {
  @Input() eventList: Event[] | null = [];

  @Output()
  private readonly eventSelectedEmitter = new EventEmitter<Event>();

  isLoading = true;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['eventList'] && changes['eventList'].currentValue) {
      this.eventList = changes['eventList'].currentValue;
      this.isLoading = false;
    }
  }

  onEventSelected(event: Event) {
    this.eventSelectedEmitter.emit(event);
  }
}
