import { Component, OnInit, Input } from '@angular/core';
import {TableModule} from 'primeng/table';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contest-list',
  templateUrl: './contest-list.component.html',
  styleUrls: ['./contest-list.component.css']
})
export class ContestListComponent implements OnInit {

  @Input() role: string;

  value: number = 0;
  title = 'JSON to Table Example';
  constructor (private httpService: HttpClient) { }
  allMatches: string [];
  ngOnInit () {
    this.httpService.get('./assets/teamDetails.json').subscribe(      
      data => {        
        this.allMatches = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {console.log (err.message);}
    );
  }

}
