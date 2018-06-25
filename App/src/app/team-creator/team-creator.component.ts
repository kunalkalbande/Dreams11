import { Component, OnInit, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { matchInfo } from '../models/allMatches'
import 'rxjs/add/operator/map';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';


import { matchPlayers } from '../models/matchPlayer'


import { Observable } from 'rxjs/internal/Observable';
import { count } from 'rxjs/operators';




@Component({
  selector: 'app-team-creator',
  templateUrl: './team-creator.component.html',
  styleUrls: ['./team-creator.component.css']
})
export class TeamCreatorComponent implements OnInit {

  dartDetails: any;
  checked: boolean[] = [];

  @Input() role: string;
  @Input()  matchInfo: matchInfo;
  title = 'JSON to Table Example';
  count: any;
  constructor(private http: HttpClient) { }

  matchPlayers: matchPlayers[];
  IsSelected:boolean;


  ngOnInit() {
   

  }


  stateChanged(playerId) {
    let allmatchPlayers = this.matchInfo;
    let selectedCount =  this.matchInfo.MatchPlayers.filter(x=>x.IsSelected==true).length;
    ( document.getElementById("lblCounter") as HTMLInputElement).innerHTML= selectedCount.toString();

   
  }

  
}
   






