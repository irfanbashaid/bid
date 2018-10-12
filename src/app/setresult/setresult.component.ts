import { Component, OnInit } from '@angular/core';
import { GrabitService } from '../Service/grabit.service';
import * as IPFS from 'ipfs';
@Component({
  selector: 'app-setresult',
  templateUrl: './setresult.component.html',
  styleUrls: ['./setresult.component.css']
})
export class SetresultComponent implements OnInit {
  finalizeresult=[];
  constructor(private grabit:GrabitService) {
    this.setresulttable();
  }

setresulttable(){
  var meta=this;
  meta.grabit.currentTime().then(now_time => {    
      meta.grabit.getauctiondetails().subscribe(actionDetail=>{
        var array:any = actionDetail;
        for(let i=0;i<array.length;i++) {
          meta.grabit.auctionDetails(actionDetail[i]['auctionid']).then(auctions=>{
            if(auctions[0][1]>=now_time){
            let obj={};
                obj['auctionid'] =actionDetail[i]['auctionid'];
                obj['productname'] = actionDetail[i]['productname'];
                let st:any =auctions[0][0];
                let starttime:any = new Date(st*1000);
                obj['start_time'] =starttime;
                let endt:any =auctions[0][1];
                let endtime:any = new Date(endt*1000);               
                obj["end_time"]=endtime;
                obj["basePrice"]=auctions[1];
                obj["bidIncrement"]=   auctions[2];
                obj["minBid"]=auctions[3];
                obj["lastBidder"]=auctions[4];
                obj["resetTime"]=auctions[5];
                obj["lastBidDetails_amount"]=auctions[6][0];  
                let bt:any =auctions[6][1];
                let lastbettime:any = new Date(bt*1000);
                obj["lastBidDetails_time"]=lastbettime;                     
              meta.finalizeresult.push(obj); 
              }
           })
         }        
      })
   })
}

  ngOnInit() {
  }

}
