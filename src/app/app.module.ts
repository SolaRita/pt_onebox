import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './reservations/pages/catalog/catalog.component';
import { SessionComponent } from './reservations/pages/session/session.component';

@NgModule({
  declarations: [AppComponent, CatalogComponent, SessionComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
