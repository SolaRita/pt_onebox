import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Event } from '../../interfaces/event';
import { take } from 'rxjs';
@Component({
  selector: 'app-event-list',
  standalone: false,
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventListComponent {
  @Input() eventList: Event[] = [];

  @Output()
  private readonly eventSelectedEmitter = new EventEmitter<Event>();

  constructor(
    private eventsService: EventsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnChanges() {
    console.log('eventList', this.eventList);
    this.cdr.markForCheck();
  }

  trackByFn(index: number, event: Event): string | undefined {
    return event.id;
  }

  onEventSelected(event: Event) {
    this.eventSelectedEmitter.emit(event);
  }
}
