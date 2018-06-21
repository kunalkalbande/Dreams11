import { Component, OnInit, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { allMatches } from '../models/allMatches'
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
  title = 'JSON to Table Example';
  count: any;
  constructor(private http: HttpClient) { }
  allMatches: allMatches[];
  matchPlayers: matchPlayers[];


  ngOnInit() {
    let head = new Headers({ 'Content-Type': 'application/json' });

    this.http.get('http://idtp285/api/GetMatch/12').subscribe(

      data => {

        this.allMatches = data as allMatches[];	 // FILL THE ARRAY WITH DATA.      	
        console.log(this.allMatches);
      },
      (err: HttpErrorResponse) => {
    
      }
    );

  }


  stateChanged(playerId) {
    let allmatchPlayers = this.allMatches
    var i;
    var count = 0;
    //debugger;
    let matchedPlayerCount = this.allMatches.map(match => {      
      return match.MatchPlayers.filter(player => player.IsSelected).length })
    var result = matchedPlayerCount.reduce((a, b) => a + b, 0)
    let key = 'Item 1';
    localStorage.setItem(key, result.toString());
   // debugger;
     ( document.getElementById("lblCounter") as HTMLInputElement).innerHTML= result.toString();
    //this.allMatches[0].MatchPlayers[0].PlayerId=100;
    alert( result.toString());
  }

  
}
   




