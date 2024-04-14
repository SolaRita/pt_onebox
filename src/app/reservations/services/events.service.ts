import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Event } from '../interfaces/event';
import { HttpClient } from '@angular/common/http';
import { mapToEvent } from './mappers/event.mapper';
import { RawEventData } from '../interfaces/raw-event-data';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private eventsUrl = 'assets/db/events.json';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http
      .get<RawEventData[]>(this.eventsUrl)
      .pipe(map((response) => response.map((event) => mapToEvent(event))));
  }
}
