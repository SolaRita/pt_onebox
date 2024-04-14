import { EventEmitter, Injectable } from '@angular/core';
import { EventDetail, Session } from '../interfaces/event-detail';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RawEventDetailData } from '../interfaces/raw-event-detail-data';
import { mapToEventDetail } from './mappers/event-detail.mapper';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private eventInfoUrl = 'assets/db/event-info-';
  totalAvailability: number = 0;
  totalSelected: number | undefined = 0;
  private selectedEvents: { [eventId: number]: EventDetail } = {};
  entryChanged = new EventEmitter<void>();

  constructor(private http: HttpClient) {}

  getEventDetails(eventId: number): Observable<EventDetail> {
    if (isNaN(eventId) || eventId <= 0) {
      throw new Error('Invalid eventId');
    }
    return this.http
      .get<RawEventDetailData>(`${this.eventInfoUrl}${eventId}.json`)
      .pipe(
        map((rawEventDetail) => {
          const eventDetail = mapToEventDetail(rawEventDetail);
          this.selectedEvents[eventId] = eventDetail;
          console.log('selectedEvents', this.selectedEvents[eventId]);
          return eventDetail;
        })
      );
  }

  calculateTotalSelected(session: Session): void {
    if (session) {
      this.totalSelected = session.selected;
    }
  }

  calculateSessionAvailability(session: Session): void {
    if (session) {
      this.totalAvailability = session.availability;
    }
  }

  addEntry(eventId: number, sessionDate: number): void {
    const eventDetail = this.selectedEvents[eventId];
    if (eventDetail) {
      const session = eventDetail.sessions.find((s) => s.date === sessionDate);
      if (session && session.availability > 0) {
        session.availability--;
        session.selected++;
        this.entryChanged.emit();
      }
    }
  }

  removeEntry(eventId: number, sessionDate: number): void {
    const eventDetail = this.selectedEvents[eventId];
    if (eventDetail) {
      const session = eventDetail.sessions.find((s) => s.date === sessionDate);
      if (session) {
        session.availability++;
        session.selected--;
        this.entryChanged.emit();
      }
    }
  }

  getSelectedEvent(eventId: number): EventDetail | undefined {
    return this.selectedEvents[eventId];
  }
}
