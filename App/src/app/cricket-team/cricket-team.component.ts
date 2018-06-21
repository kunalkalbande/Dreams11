import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import{allMatches} from'../models/allMatches';
import{LoginInfo} from'../models/LoginInfo';
import 'rxjs/add/operator/map';
import {  Headers } from '@angular/http';
 
import{matchPlayers} from'../models/matchPlayer'



@Component({
  selector: 'app-cricket-team',
  templateUrl: './cricket-team.component.html',
  styleUrls: ['./cricket-team.component.css']
})
export class CricketTeamComponent implements OnInit {
  dartDetails: any;
  checked: boolean = false;
  LoginInfo:LoginInfo[];

  @Input() role: string;
  title = 'JSON to Table Example';
  constructor(private http: HttpClient) { }
  allMatches: allMatches[];
  matchPlayers: matchPlayers[];

  ngOnInit() {
    let key = 'Item 1';

    var playerCnt = localStorage.getItem(key);

    //this.MatchInfo.PlayerCount = playerCnt;
    let head = new Headers({ 'Content-Type': 'application/json' });

    this.http.get('http://idtp285/api/GetMatch/12').subscribe(

      data => {        
        this.allMatches = data as allMatches[];	 // FILL THE ARRAY WITH DATA.      	
        console.log(this.allMatches);
      },
      (err: HttpErrorResponse) => {
        //  console.log (err.message);
      }
    );
 
  }



  

}
