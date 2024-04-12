import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../interfaces/event';
import { EventInfo } from '../interfaces/event-info';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private eventsUrl = 'assets/db/events.json';
  private eventInfoUrl = 'assets/db/event-info-';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl);
  }

  getEventDetails(eventId: number): Observable<EventInfo> {
    if (isNaN(eventId) || eventId <= 0) {
      throw new Error('Invalid eventId');
    }

    return this.http.get<EventInfo>(`${this.eventInfoUrl}${eventId}.json`);
  }
}
