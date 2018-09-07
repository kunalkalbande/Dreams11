import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { matchInfo } from '../models/allMatches';
import { Router} from '@angular/router';
import { UserdataModule } from "../models/userdata/userdata.module";
@Component({
  selector: 'app-usercontest',
  templateUrl: './usercontest.component.html',
  styleUrls: ['./usercontest.component.css']
})
export class UsercontestComponent implements OnInit {

 
  usercontests : string[];
  constructor(private http: HttpClient,private router: Router,private data: UserdataModule) { }

  ngOnInit() {
    let head = new Headers({ 'Content-Type': 'application/json' });
    this.http.get('http://idtp285/api/GetContest/1').subscribe(
      data => {
        debugger;
        this.usercontests = data as string [];	 // FILL THE ARRAY WITH DATA.
        this.data.userteamstorage = this.usercontests;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
