import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AttendComponent } from './attend/attend.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { FollowComponent } from './follow/follow.component';
import { GuideComponent } from './guide/guide.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AttendComponent,
    SponsorsComponent,
    FollowComponent,
    GuideComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
