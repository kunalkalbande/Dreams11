import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CricketTeamComponent } from './cricket-team/cricket-team.component';
import { CaptainCreatorComponent } from './captain-creator/captain-creator.component';
import {ContestListComponent} from './contest-list/contest-list.component'

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cricketTeam', component: CricketTeamComponent },
  { path: 'createCaptain', component: CaptainCreatorComponent },
  { path:   'contestList',  component: ContestListComponent},
 // { path: '**', redirectTo: '/login', pathMatch: 'full' },
];



@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{
      useHash: true
    }) 
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
