import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventDetail } from '../../interfaces/event-detail';
import { Observable } from 'rxjs';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-detail-page',
  standalone: false,
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss',
})
export class DetailPageComponent implements OnInit {
  private id!: number;
  isLoading: boolean = true;
  eventDetail$ = new Observable<EventDetail>();
  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.getEventDetail(this.id);
  }

  getEventDetail(id: number) {
    this.eventDetail$ = this.eventsService.getEventDetails(id).pipe();
    this.isLoading = false;
  }
}
