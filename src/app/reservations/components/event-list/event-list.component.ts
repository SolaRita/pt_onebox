import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
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

  isLoading = true;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['eventList'] && changes['eventList'].currentValue) {
      this.eventList = changes['eventList'].currentValue;
      this.isLoading = false;
    }
  }
}
