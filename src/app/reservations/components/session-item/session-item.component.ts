import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Session } from '../../../cart/interfaces/event-detail';
import { CartService } from '../../../cart/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.scss'],
})
export class SessionItemComponent implements OnInit, OnDestroy {
  @Input() session: Session = {
    date: 0,
    availability: 0,
    selected: 0,
  };

  @Input() eventId!: number;
  // totalSelected: number = 0;
  entryChangedSubscription: Subscription | undefined;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.entryChangedSubscription = this.cartService.entryChanged.subscribe(
      () => {
        this.updateSession();
      }
    );
  }

  ngOnDestroy() {
    if (this.entryChangedSubscription) {
      this.entryChangedSubscription.unsubscribe();
    }
  }

  updateSession() {
    const selectedEvent = this.cartService.getSelectedEvent(this.eventId);
    if (selectedEvent) {
      const session = selectedEvent.sessions.find(
        (s) => s.date === this.session.date
      );
      if (session) {
        this.session.availability = session.availability;
        this.session.selected = session.selected;
      }
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
