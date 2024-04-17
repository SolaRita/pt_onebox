import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventDetail, Session } from '../../../cart/interfaces/event-detail';
import { Observable } from 'rxjs';
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
    this.getCartEvents();
  }

  getEventDetail(id: number) {
    this.eventDetail$ = this.cartService.getEventDetails(id).pipe();
    this.isLoading = false;
  }

  getCartEvents() {
    this.selectedEvents$ = this.cartService.getCartEvents();
  }
}
