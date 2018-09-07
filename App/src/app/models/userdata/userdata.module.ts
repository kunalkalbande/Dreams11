import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class UserdataModule { 
  public storage: any;
  public userteamstorage: any;

    public constructor() { }
}
