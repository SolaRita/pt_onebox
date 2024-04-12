import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Event } from '../interfaces/event';
import { EventDetail } from '../interfaces/event-detail';
import { HttpClient } from '@angular/common/http';
import { mapToEvent } from './mappers/event.mapper';
import { RawEventData } from '../interfaces/raw-event-data';
import { RawEventDetailData } from '../interfaces/raw-event-detail-data';
import { mapToEventDetail } from './mappers/event-detail.mapper';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private eventsUrl = 'assets/db/events.json';
  private eventInfoUrl = 'assets/db/event-info-';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http
      .get<RawEventData[]>(this.eventsUrl)
      .pipe(map((response) => response.map((event) => mapToEvent(event))));
  }

  getEventDetails(eventId: number): Observable<EventDetail> {
    if (isNaN(eventId) || eventId <= 0) {
      throw new Error('Invalid eventId');
    }

    return this.http
      .get<RawEventDetailData>(`${this.eventInfoUrl}${eventId}.json`)
      .pipe(map((rawEventDetail) => mapToEventDetail(rawEventDetail)));
  }
}
