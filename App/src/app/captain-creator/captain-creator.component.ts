import { Component, OnInit, Input } from '@angular/core';
import {TableModule} from 'primeng/table';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';



import { allMatches } from '../models/allMatches'
import 'rxjs/add/operator/map';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';

import { matchPlayers } from '../models/matchPlayer'
import { Observable } from 'rxjs/internal/Observable';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-captain-creator',
  templateUrl: './captain-creator.component.html',
  styleUrls: ['./captain-creator.component.css']
})
export class CaptainCreatorComponent implements OnInit {

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






}
