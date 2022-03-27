import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { PartnersComponent } from './partners/partners.component';
import { MentorsComponent } from './mentors/mentors.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TracksComponent } from './tracks/tracks.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'location', component: LocationComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'mentors', component: MentorsComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'tracks', component: TracksComponent },
  { path: 'faq', component: FaqComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
