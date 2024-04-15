import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['eventDetail'] && changes['eventDetail'].currentValue) {
      this.eventDetail = changes['eventDetail'].currentValue;
    }
  }
}
