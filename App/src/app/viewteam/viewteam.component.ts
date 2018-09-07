import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router,ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';
import {  Headers } from '@angular/http';
import { UserdataModule } from "../models/userdata/userdata.module";
import { PlayerFilterByRolePipe } from "../player-filter-by-role.pipe";
@Component({
  selector: 'app-viewteam',
  templateUrl: './viewteam.component.html',
  styleUrls: ['./viewteam.component.css']
})
export class ViewteamComponent implements OnInit {
  public player: string[];
  public uname
  constructor(private router: Router,private data1 : UserdataModule,private route : ActivatedRoute) {
    debugger; 
    

   this.player= this.data1.userteamstorage.filter(a => a.username === "Avinash Patil");
  }

  ngOnInit() {
    
  }

}
