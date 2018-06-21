import { Component, OnInit, Input } from '@angular/core';
import {TableModule} from 'primeng/table';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { matchInfo } from '../models/allMatches'
import 'rxjs/add/operator/map';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';

import {FormControl, FormGroup, Validators} from '@angular/forms';

  import { matchPlayers } from '../models/matchPlayer'

import { Observable } from 'rxjs/internal/Observable';
import { count } from 'rxjs/operators';
import { UserPlayer } from '../models/userPlayer';

@Component({
  selector: 'app-team-selection',
  templateUrl: './team-selection.component.html',
  styleUrls: ['./team-selection.component.css']
})
export class TeamSelectionComponent implements OnInit {
  dartDetails: any;
  checked: boolean[] = [];

  @Input() role: string;
  title = 'JSON to Table Example';
  count: any;
  headers: Headers;
  editUserForm: any;
  constructor(private http: HttpClient) { }
  matchInfo: matchInfo[];
  matchPlayers: matchPlayers[];
  userPlayer:UserPlayer[];
  saveSuccess: boolean;
 //user: IUser;


 
  ngOnInit() {
    let head = new Headers({ 'Content-Type': 'application/json' });

    this.http.get('http://idtp285/api/GetMatch/12').subscribe(

      data => {

        this.matchInfo = data as matchInfo[];	 // FILL THE ARRAY WITH DATA.      	
    //    console.log(this.allMatches);
      },
      (err: HttpErrorResponse) => {
    
      }
    );

  }




  
  stateChanged(playerId) {
    let allmatchPlayers = this.matchInfo
    var i;
    var count = 0;
  debugger;
    let matchedPlayerCount = this.matchInfo.map(match => {      
      return match.MatchPlayers.filter(player => player.IsSelected).length })
    var result = matchedPlayerCount.reduce((a, b) => a + b, 0)
    let key = 'Item 1';
    localStorage.setItem(key, result.toString());
   // debugger;
   //  ( document.getElementById("lblCounter") as HTMLInputElement).innerHTML= result.toString();
    //this.allMatches[0].MatchPlayers[0].PlayerId=100;
  // alert( playerId);
  }



  onSubmit(): void {
debugger;
var jsonData = JSON.stringify(this.matchInfo);
    const req = this.http.post('http://idtp285/api/InsertUser', {
      jsonData
    })
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
}
}



