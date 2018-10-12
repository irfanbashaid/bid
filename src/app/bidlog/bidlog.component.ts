import { Component, OnInit } from '@angular/core';
import { GrabitService} from '../Service/grabit.service';

@Component({
  selector: 'app-bidlog',
  templateUrl: './bidlog.component.html',
  styleUrls: ['./bidlog.component.css']
})
export class BidlogComponent implements OnInit {

  constructor(private grabit:GrabitService) { }

  public bidhistory = [];

  bidlog(){
    let instance = this;
    
    instance.grabit.auctionList().then(res=>{
      instance.grabit.getAuctiondetails().subscribe(details => {
        var array:any = details;
        for(let i=0;i<array.length;i++){
          instance.grabit.bidDetails(details[i]['optionid']).then(res => {
            let obj={};
            obj['auctionid'] =details[i]['auctionid'];
            obj['productname'] = details[i]['productname'];
            obj['amount'] = res[0];
          })
        }
      })
    })
  }

  ngOnInit() {
  }

}
