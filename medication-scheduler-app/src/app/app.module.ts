import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClockComponent } from './clock/clock.component';
import { MedicationListComponent } from './medicationList/medicationList.component';
import { BottomNavComponent } from './bottomNav/bottom-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClockComponent,
    MedicationListComponent,
    BottomNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, ClockComponent, MedicationListComponent, BottomNavComponent]
})
export class AppModule { }
