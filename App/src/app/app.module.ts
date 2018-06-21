import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';


import { CricketTeamComponent } from './cricket-team/cricket-team.component';


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { SharedModule, PanelModule } from 'primeng/primeng';
import { TeamCreatorComponent } from './team-creator/team-creator.component';
import { CarService } from './car.service';
import { TableModule } from 'primeng/table';

import { PlayerFilterByRolePipe } from './player-filter-by-role.pipe';
import { CaptainCreatorComponent } from './captain-creator/captain-creator.component';
import { TeamSelectionComponent } from './team-selection/team-selection.component';
import { ContestListComponent } from './contest-list/contest-list.component';
// import { MyFilterPipe } from './my-filter.pipe';
import {ProgressBarModule} from 'primeng/progressbar';

import {CheckboxModule} from 'primeng/checkbox';

import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CricketTeamComponent,
    TeamCreatorComponent,
    PlayerFilterByRolePipe,
    CaptainCreatorComponent,
    TeamSelectionComponent,
    ContestListComponent,
    // MyFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule, PanelModule,
    TabViewModule,
    TableModule,
    ProgressBarModule,
    CheckboxModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [TabViewModule, AccordionModule, SharedModule, TableModule,ProgressBarModule,CheckboxModule],


  bootstrap: [AppComponent],
  providers: [CarService ]
})
export class AppModule { }
