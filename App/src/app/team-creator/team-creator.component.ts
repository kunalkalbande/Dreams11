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


  stateChanged() {

    let allmatchPlayers = this.matchInfo;
    let selectedCount =  this.matchInfo.MatchPlayers.filter(x=>x.IsSelected==true).length;
    ( document.getElementById("lblCounter") as HTMLInputElement).innerHTML= selectedCount.toString();
    
    let selectedCountTwo =  allmatchPlayers.MatchPlayers.filter(x=>x.IsSelected==true && x.PlayerRoleName == "Wicketkeeper").length;
    ( document.getElementById("wicketkeeperCount") as HTMLInputElement).innerHTML= selectedCountTwo.toString();

    let selectedCountThree =  allmatchPlayers.MatchPlayers.filter(x=>x.IsSelected==true && x.PlayerRoleName == "Batsman").length;
    ( document.getElementById("batsmanCount") as HTMLInputElement).innerHTML= selectedCountThree.toString();

    
    let selectedCountFour = allmatchPlayers.MatchPlayers.filter(x=>x.IsSelected==true && x.PlayerRoleName == "AllRounder").length;
    ( document.getElementById("allrounderCount") as HTMLInputElement).innerHTML= selectedCountFour.toString();

      
    let selectedCountFive =  allmatchPlayers.MatchPlayers.filter(x=>x.IsSelected==true && x.PlayerRoleName == "Blower").length;
    ( document.getElementById("bowlerCount") as HTMLInputElement).innerHTML= selectedCountFive.toString();
      
  }

  
}
   






