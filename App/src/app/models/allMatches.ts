import { matchPlayers } from "./matchPlayer";

export interface matchInfo {
    Id: number;
    Name: string;
    SeriesName: string;
    TImeSlot: number;
    Teamlogs: null;
    Location:string;
    Date: Date;
    MatchPlayers:matchPlayers[];
}
