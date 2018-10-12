import { Component, OnInit } from '@angular/core';
import { GrabitService } from '../service/grabit.service';

@Component({
  selector: 'app-upcomingauction',
  templateUrl: './upcomingauction.component.html',
  styleUrls: ['./upcomingauction.component.css']
})
export class UpcomingauctionComponent implements OnInit {
  public canshow:boolean;
  public images=[];
  public ProductName='Appliances';
  public Amount='$ 4'
  public Auction_Id='GBTA:4548';
  public Time='5:45:33';
  public Bidder_name='Sri ram Prasad';

  constructor(private grabit:GrabitService) {

    let obj1={}
    obj1['ProductName']='Zerald Home Speakers -Boom or Blast';
    obj1['Url']="../../assets/images/ht.png";
    obj1['Amount']='$ 12';
    obj1['Auction_Id']='GBTA:Apl:4558';
    obj1['Time']='04:37:24';
    obj1['Bidder_name']='Lachumi Raja';
    this.images.push(obj1)

    let obj2={}
    obj2['ProductName']='Crocodile Wallet';
    obj2['Url']="../../assets/images/wal.png";
    obj2['Amount']='$ 5';
    obj2['Auction_Id']='GBTA:Apl:4559';
    obj2['Time']='11:45:52';
    obj2['Bidder_name']='Maddy';
    this.images.push(obj2)

    let obj3={}
    obj3['ProductName']='PUMA -lets Sport';
    obj3['Url']="../../assets/images/shoes.png";
    obj3['Amount']='$ 8';
    obj3['Auction_Id']='GBTA:Apl:4560';
    obj3['Time']='12:00:0';
    obj3['Bidder_name']='Rohit Sharma';
    this.images.push(obj3)

    
    // this.images.push("../../assets/images/91+OxUea0JL._SY355_.jpg");
    // this.images.push("../../assets/images/AP.png");
    // this.images.push("../../assets/images/bat.jpg");
    // this.images.push("../../assets/images/lap.jpg");
    // this.images.push("../../assets/images/oppo.jpg");
    // this.images.push("../../assets/images/pbank.jpg ");

    // this.images.push("../../assets/images/new-somic-g949de-gaming-headset-usb-7-1-channel.jpg");
    // this.images.push("../../assets/images/wtch2.jpg");
    // this.images.push("../../assets/images/wmach.jpg");

    // this.images.push("../../assets/images/ht.png");
    // this.images.push("../../assets/images/wal.png");
    // this.images.push("../../assets/images/shoes.png");
  }
  ngOnInit() {
  }

}
