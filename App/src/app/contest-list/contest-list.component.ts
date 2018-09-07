import { Component, OnInit, Input } from '@angular/core';
import {TableModule} from 'primeng/table';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router} from '@angular/router';
import 'rxjs/add/operator/map';
import {  Headers } from '@angular/http';
import { UserdataModule } from "../models/userdata/userdata.module";

@Component({
  selector: 'app-contest-list',
  templateUrl: './contest-list.component.html',
  styleUrls: ['./contest-list.component.css']
})
export class ContestListComponent implements OnInit {

  @Input() role: string;

  value: number = 0;
  title = 'JSON to Table Example';
  public usercontest: string[];
  public usermatch: string[];
  showSelected:boolean;
  
  constructor (private httpService: HttpClient,private router: Router,private data: UserdataModule) {
    debugger;
     this.usermatch= this.data.storage["userMatches"];
     this.usercontest = this.data.storage["usercontests"];
    this.showSelected=false;
  
   }

  allMatches: string [];

  ngOnInit () {
    // this.httpService.get('./assets/teamDetails.json').subscribe(      
    //   data => {        
    //     this.allMatches = data as string [];	 // FILL THE ARRAY WITH DATA.
       
    //   },
    //   (err: HttpErrorResponse) => {console.log (err.message);}
    // );
  }

 
  click1(): void{
    debugger;
    //this.showSelected=true;
    this.router.navigate(["usercontest"])
    
  }

}
