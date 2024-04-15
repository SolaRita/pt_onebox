import { Injectable } from '@angular/core';
import { EventDetail, Session } from '../interfaces/event-detail';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RawEventDetailData } from '../interfaces/raw-event-detail-data';
import { mapToEventDetail } from './mappers/event-detail.mapper';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private eventInfoUrl = 'assets/db/event-info-';

  private selectedEvents: { [eventId: number]: EventDetail } = {};
  private _eventWithSessions: BehaviorSubject<EventDetail[]> =
    new BehaviorSubject<EventDetail[]>([]);
  eventsWithSessions: EventDetail[] = [];
  private _eventDetail: BehaviorSubject<EventDetail | null> =
    new BehaviorSubject<EventDetail | null>(null);

  constructor(private http: HttpClient) {}

  getEventDetails(eventId: number): Observable<EventDetail> {
    if (isNaN(eventId) || eventId <= 0) {
      throw new Error('Invalid eventId');
    }
    return this.http
      .get<RawEventDetailData>(`${this.eventInfoUrl}${eventId}.json`)
      .pipe(
        map((response) => {
          const eventDetail = mapToEventDetail(response);
          this.selectedEvents[eventId] = eventDetail;
          return this.sortSessionsByDate(eventDetail);
        })
      );
  }

  getEventDetailUpdates(): Observable<EventDetail | null> {
    return this._eventDetail.asObservable();
  }

  getEventsWithSessions(): Observable<EventDetail[]> {
    return this._eventWithSessions.asObservable();
  }

  addEntry(eventId: number, sessionDate: number): void {
    this.updateEventDetail(eventId, sessionDate, 'add');
  }

  removeEntry(eventId: number, sessionDate: number): void {
    this.updateEventDetail(eventId, sessionDate, 'remove');
  }

  private sortSessionsByDate(eventDetail: EventDetail): EventDetail {
    if (eventDetail && eventDetail.sessions) {
      eventDetail.sessions.sort((a, b) => a.date - b.date);
    }
    return eventDetail;
  }

  private updateEventDetail(
    eventId: number,
    sessionDate: number,
    action: 'add' | 'remove'
  ): void {
    const eventDetail = this.selectedEvents[eventId];
    if (!eventDetail) {
      throw new Error('EventDetail not found');
    }
    const sessionIndex = eventDetail.sessions.findIndex(
      (s) => s.date === sessionDate
    );
    if (sessionIndex === -1) {
      throw new Error('Session not found');
    }
    const session = eventDetail.sessions[sessionIndex];
    if (action === 'add' && session.availability > 0) {
      session.availability--;
      session.selected++;
    } else if (action === 'remove') {
      session.availability++;
      session.selected--;
    }
    this._eventDetail.next(eventDetail);
    this.updateEventsWithSessions();
  }

  private updateEventsWithSessions(): void {
    const eventsWithSessions = Object.values(this.selectedEvents).filter(
      (eventDetail) => {
        return eventDetail.sessions.some(
          (session) => session.selected && session.selected > 0
        );
      }
    );
    this._eventWithSessions.next(eventsWithSessions);
  }
}
