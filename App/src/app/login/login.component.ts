import { Component, OnInit, Input } from '@angular/core';

import 'rxjs/add/operator/map';

import { allMatches } from '../models/allMatches';
import { matchPlayers } from '../models/matchPlayer';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { LoginInfo } from '../models/LoginInfo'

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
  loginDetails: loginDetails[];
  constructor(private http: HttpClient) { }
  // allMatches: allMatches[];
  matchPlayers: matchPlayers[];


 

  ngOnInit() {
    let LoginData: LoginInfo = {} as any;
    LoginData.UserName = "avi";
    LoginData.Password="test";
    LoginData.RemeberMe = true;
    let jsonData = JSON.stringify(LoginData);
    const req = this.http.post('http://idtp285/api/UserLogin', {
      jsonData
    })
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

  onSubmit(form): void {
    debugger;
    let LoginData: LoginInfo = {} as any;
    LoginData.UserName = "avi";
    LoginData.Password="test";
    LoginData.RemeberMe = true;
    let jsonData = JSON.stringify(LoginData);
    const req = this.http.post('http://idtp285/api/UserLogin', {
      jsonData
    })
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
