import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AttendComponent } from './attend/attend.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { FollowComponent } from './follow/follow.component';
import { GuideComponent } from './guide/guide.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'attend', component: AttendComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'follow', component: FollowComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'faq', component: FaqComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
