import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  public credit_balance = 80;
  public tabSelected:number=1;
/*
  <li (click)="chooseTab(1)"><a>Create Auction</a></li>
  <li (click)="chooseTab(2)"><a>Send Credits</a></li>
  <li (click)="chooseTab(3)"><a>Change Ownership</a></li>
  <li (click)="chooseTab(4)"><a>Finalize Auction</a></li>*/
  constructor() { }

  chooseTab(selected){
    this.tabSelected = selected;
  }

  top_up_credits(){
    
  }

  transferOwnership(){

  }

  ngOnInit() {

  }

}
