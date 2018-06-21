import { UserPlayer } from "./userPlayer";

export interface Person {
    Id: number,
    Firstname: string,
    Lastname: string,
    Username:string,
    Emailaddress: string,
    age: number,
    UserTeam: {
      TeamName: string,
      UserPlayer:UserPlayer []
    }

  }