import { Component, OnInit, Input } from '@angular/core';

import 'rxjs/add/operator/map';

import { matchInfo } from '../models/allMatches';
import { matchPlayers } from '../models/matchPlayer';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginInfo } from '../models/LoginInfo'
import { RequestOptions } from '@angular/http';

export class loginDetails{
UserName:string 
Password:String
RememberMe:boolean
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  
  dartDetails: any;
  checked: boolean[] = [];
  LoginInfo : LoginInfo;
  @Input() role: string;
  title = 'JSON to Table Example';
  count: any;
  login: any;
  matchInfo: matchInfo;
  
  constructor(private http: HttpClient) { }
  // allMatches: allMatches[];
  matchPlayers: matchPlayers[];


 

  ngOnInit() {
    
  }

  onSubmit(form): void {
    debugger;
    let LoginData: LoginInfo = {} as any;
    LoginData.UserName = "avi";
    LoginData.Password="test";
    LoginData.RemeberMe = true;
    let jsonData = JSON.stringify(LoginData);
    let headers = new Headers({ 'Content-Type': 'application/json' });    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const req = this.http.post('http://idtp285/api/UserLogin',JSON.stringify(LoginData),httpOptions)
    .subscribe(

      data => {

         debugger;
           console.log(data);
          },
      err => {
        debugger;
        console.log(err);
      },
      // err => {
      //   console.log(err);
      // }
    );

    }



}
