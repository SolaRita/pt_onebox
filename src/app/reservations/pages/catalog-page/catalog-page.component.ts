import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Observable, take } from 'rxjs';
import { Event } from '../../interfaces/event';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.scss',
})
export class CatalogPageComponent implements OnInit {
  public eventList: Event[] = [];
  isLoading: boolean = true;
  public prueba = 'hola';

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.getAllEvents();
  }
  getAllEvents() {
    this.isLoading = true;
    this.eventsService
      .getEvents()
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          debugger;
          this.eventList = res;
          console.log('event', this.eventList);
          console.log('res', res);
          this.isLoading = false;
        },

        error: (e) => {
          console.log(e);
          console.error('Error fetching events:', e);
          this.isLoading = false;
        },

        complete: () => {
          console.log('Event fetch completed');
        },
      });
  }
}
