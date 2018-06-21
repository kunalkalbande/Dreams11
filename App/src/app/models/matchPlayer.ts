import { Url } from "url";

export interface matchPlayers {
    Id: number;
    MatchId: number;
    MatchName: string;
    PlayerId: number;
    FirstName: string;
    LastName: string;
    Age: number;
    Address: string;
    PlayerRoleName: string;
    PlayerImage:Url;
    Points: number;
    Credits: number;
    IsSelected:Boolean;

}
