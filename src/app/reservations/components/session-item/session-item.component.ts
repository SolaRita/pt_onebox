import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Session } from '../../../cart/interfaces/event-detail';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SessionItemComponent implements OnChanges {
  @Input() session: Session = {
    date: 0,
    availability: 0,
    selected: 0,
  };

  @Input() eventId!: number;

  constructor(private cartService: CartService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['session'] && changes['session'].currentValue) {
      this.session = changes['session'].currentValue;
    }
    if (changes['eventId'] && changes['eventId'].currentValue) {
      this.eventId = changes['eventId'].currentValue;
    }
  }

  add() {
    if (this.session.availability > 0) {
      this.cartService.addEntry(this.eventId, this.session.date);
    }
  }

  remove() {
    this.cartService.removeEntry(this.eventId, this.session.date);
  }

  get totalAvailable(): number {
    return this.session.availability;
  }

  get totalSelected(): number | undefined {
    return this.session.selected;
  }
}
