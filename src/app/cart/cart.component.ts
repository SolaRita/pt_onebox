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
import { EventDetail } from './interfaces/event-detail';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnChanges {
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
