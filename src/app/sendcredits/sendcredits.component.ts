import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sendcredits',
  templateUrl: './sendcredits.component.html',
  styleUrls: ['./sendcredits.component.css']
})
export class SendcreditsComponent implements OnInit {

  public sendCreditsArray =[];

  constructor() { this.loadSendCreditsArray();}

  loadSendCreditsArray(){
    let meta = this;
    meta.sendCreditsArray.length = 0;

    let obj={};
    obj["receiver"]="0x4535";
    obj["credit"]=767;
    meta.sendCreditsArray.push(obj);

  }

  sendcredits(receiver,credit){
    alert(receiver+credit);
  }
  ngOnInit() {
  }

}
