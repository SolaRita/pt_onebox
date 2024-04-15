import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventDetail } from '../../../cart/interfaces/event-detail';
import { Observable, finalize, forkJoin, of, take } from 'rxjs';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-detail-page',
  standalone: false,
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss',
})
export class DetailPageComponent implements OnInit {
  private id!: number;
  isLoading: boolean = true;
  eventDetail$ = new Observable<EventDetail | null>();
  selectedEvents$ = new Observable<EventDetail[] | null>();

  constructor(private route: ActivatedRoute, private cartService: CartService) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.getEventDetail(this.id);
    this.getEventsWithSessions();
  }

  getEventDetail(id: number) {
    this.eventDetail$ = this.cartService.getEventDetails(id).pipe();
    this.isLoading = false;
  }

  getUpdatedEventDetail() {
    this.cartService.getEventDetailUpdates().subscribe((eventDetail) => {
      this.eventDetail$ = of(eventDetail);
    });
  }

  getEventsWithSessions() {
    this.cartService.getEventsWithSessions().subscribe((sessions) => {
      this.selectedEvents$ = of(sessions);
      this.isLoading = false;
    });
  }
}
