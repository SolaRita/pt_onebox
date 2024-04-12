import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { EventDetail, EventInfo } from '../../interfaces/event-detail';

@Component({
  selector: 'app-session-list',
  standalone: false,
  templateUrl: './session-list.component.html',
  styleUrl: './session-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SessionListComponent {
  @Input()
  eventDetail: EventDetail | null | undefined;

  @Output()
  private readonly eventSelectedEmitter = new EventEmitter<Event>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['sessionList'] && changes['sessionList'].currentValue) {
      this.eventDetail = changes['sessionList'].currentValue;
    }
  }

  onEventSelected(event: Event) {
    this.eventSelectedEmitter.emit(event);
  }
}
