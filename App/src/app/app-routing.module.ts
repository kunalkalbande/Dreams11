import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CricketTeamComponent } from './cricket-team/cricket-team.component';
import { CaptainCreatorComponent } from './captain-creator/captain-creator.component';
import { ContestListComponent } from './contest-list/contest-list.component'
import { UsercontestComponent } from './usercontest/usercontest.component';
import { ViewteamComponent } from './viewteam/viewteam.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cricketTeam', component: CricketTeamComponent },
  { path: 'createCaptain', component: CaptainCreatorComponent },
  { path: 'contestList',  component: ContestListComponent },
  { path: 'usercontest',  component: UsercontestComponent },
  { path: 'viewteam/:username',  component: ViewteamComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
      // { useHash: true }
      { enableTracing: true }
  ) 
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
