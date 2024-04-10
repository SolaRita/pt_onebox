import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-catalog-page',
  standalone: false,
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogPageComponent {}
