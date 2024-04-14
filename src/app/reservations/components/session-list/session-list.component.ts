import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { EventDetail } from '../../../cart/interfaces/event-detail';

@Component({
  selector: 'app-session-list',
  standalone: false,
  templateUrl: './session-list.component.html',
  styleUrl: './session-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SessionListComponent implements OnChanges {
  @Input()
  eventDetail: EventDetail | null | undefined;

  @Output()
  private readonly eventSelectedEmitter = new EventEmitter<Event>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['eventDetail'] && changes['eventDetail'].currentValue) {
      this.eventDetail = changes['eventDetail'].currentValue;
    }
  }

  onEventSelected(event: Event) {
    this.eventSelectedEmitter.emit(event);
  }
}
