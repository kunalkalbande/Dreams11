import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  private initialState = { "TEAM": false, "PLAYER": true, "POINT":false, "CREDITS":true }
  private isNextVisible = new BehaviorSubject<any>(this.initialState);
  getSaveBtnStatus(){
    return this.isNextVisible.asObservable();
  }
  setSaveBtnStatus(key: string, value: boolean){
    this.isNextVisible.next({[key]: value});
  }
}
