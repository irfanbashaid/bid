import { Component, OnInit } from '@angular/core';
import { GrabitService} from '../Service/grabit.service'

@Component({
  selector: 'app-winhistory',
  templateUrl: './winhistory.component.html',
  styleUrls: ['./winhistory.component.css']
})
export class WinhistoryComponent implements OnInit {

  constructor(private grabit:GrabitService) { }
  public history = [];
  public privatekey;
  winhistory(){
    let instance = this;
      var address = instance.grabit._etherumAccountAddress;
        instance.grabit.auctionList().then(aId => {
          instance.grabit.getAuctiondetails().subscribe(details => {
            var array:any = details;
            for(let i=0;i<array.length;i++) {
          instance.grabit.auctionDetails(details[i]['auctionid']).then(res => {
              if(res[4] == address)
              {
                let obj={};
                obj['auctionid'] =details[i]['auctionid'];
                obj['productname'] = details[i]['productname'];
                obj['amount'] = res[6][0];
                let t2:any =res[0][1];
                let time2:any = new Date(t2*1000);
                obj['time'] =time2;
                instance.history.push(obj);
              }
          })
        }
        })
      })
    }

  ngOnInit() {

  
  }

}
