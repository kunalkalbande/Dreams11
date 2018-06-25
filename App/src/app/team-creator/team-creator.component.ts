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
  title = 'JSON to Table Example';
  count: any;
  constructor(private http: HttpClient) { }
  matchInfo: matchInfo;
  matchPlayers: matchPlayers[];
  IsSelected:boolean;


  ngOnInit() {
    let head = new Headers({ 'Content-Type': 'application/json' });
    this.http.get('http://idtp285/api/GetMatch/12').subscribe(

      data => {

        this.matchInfo = data as matchInfo;	 // FILL THE ARRAY WITH DATA.      	
        console.log(this.matchInfo);
      },
      (err: HttpErrorResponse) => {
    
      }
    );

  }


  stateChanged(playerId) {
    let allmatchPlayers = this.matchInfo
    var i;
    var count = 0;

    let selectedCount =  this.matchInfo.MatchPlayers.filter(x=>x.IsSelected==true).length;
    ( document.getElementById("lblCounter") as HTMLInputElement).innerHTML= selectedCount.toString();
    //this.allMatches[0].MatchPlayers[0].PlayerId=100;
    alert( selectedCount.toString());
  }

  
}
   






