import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-detail-page',
  standalone: false,
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailPageComponent {}
