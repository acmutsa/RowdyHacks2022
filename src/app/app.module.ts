import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { PartnersComponent } from './partners/partners.component';
import { MentorsComponent } from './mentors/mentors.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FaqComponent } from './faq/faq.component';
import { TracksComponent } from './tracks/tracks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationComponent,
    PartnersComponent,
    MentorsComponent,
    ScheduleComponent,
    FaqComponent,
    TracksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
