import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Event } from '../../interfaces/event';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.scss',
})
export class CatalogPageComponent implements OnInit {
  eventList$ = new Observable<Event[] | null>();
  isLoading: boolean = true;

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventList$ = this.eventsService.getEvents().pipe(take(1));
    this.isLoading = false;
  }
}
