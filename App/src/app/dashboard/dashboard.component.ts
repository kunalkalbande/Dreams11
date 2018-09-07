import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
//import { Router} from '@angular/router';
import { UserdataModule } from "../models/userdata/userdata.module";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  title = 'JSON to Table Example';
  constructor (private http: HttpClient,private data: UserdataModule) {
    
   }
  listMatch: string [];
  ngOnInit () {
    let head = new Headers({ 'Content-Type': 'application/json' });
    this.http.get('http://idtp285/api/GetMatch').subscribe(
      data => {
        this.listMatch = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
