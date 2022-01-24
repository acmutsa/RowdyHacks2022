import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AttendComponent } from './attend/attend.component';
import { PartnersComponent } from './partners/partners.component';
import { MentorsComponent } from './mentors/mentors.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'attend', component: AttendComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'mentors', component: MentorsComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'faq', component: FaqComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
