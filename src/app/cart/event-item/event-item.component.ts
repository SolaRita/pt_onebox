import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Session } from '../interfaces/event-detail';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-event-item',
  standalone: false,
  templateUrl: './event-item.component.html',
  styleUrl: './event-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventItemComponent implements OnChanges {
  @Input()
  session!: Session;

  @Input()
  eventId!: number;

  constructor(private cartService: CartService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['session'] && changes['session'].currentValue) {
      this.session = changes['session'].currentValue;
    }
    if (changes['eventId'] && changes['eventId'].currentValue) {
      this.eventId = changes['eventId'].currentValue;
    }
  }
  remove() {
    this.cartService.removeEntry(this.eventId, this.session.date);
    this.totalSelected;
  }

  get totalSelected(): number | undefined {
    return this.session.selected;
  }
}
