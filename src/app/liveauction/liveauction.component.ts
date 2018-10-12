import { Component, OnInit } from '@angular/core';
import { GrabitService } from '../service/grabit.service';
@Component({
  selector: 'app-liveauction',
  templateUrl: './liveauction.component.html',
  styleUrls: ['./liveauction.component.css']
})
export class LiveauctionComponent implements OnInit {
  public canshow:boolean;
public images=[];
public ProductName='Appliances';
public Amount='$ 4'
public Auction_Id='GBTA:4548';
public Time='5:45:33';
public Bidder_name='Sri ram Prasad';

  constructor(private grabit:GrabitService) { 

    let obj1={};
    obj1['ProductName']=' Philips-Trimmer ';
    obj1['Url']="../../assets/images/91+OxUea0JL._SY355_.jpg";
    obj1['Amount']='$ 4.5';
    obj1['Auction_Id']='GBTA:Apl:4548';
    obj1['Time']='5:45:33';
    obj1['Bidder_name']='Sri ram Prasad';
    this.images.push(obj1);

    let obj2={};
    obj2['ProductName']='Loud Speaker';
    obj2['Url']="../../assets/images/AP.png";
    obj2['Amount']='$ 1.5';
    obj2['Auction_Id']='GBTA:Apl:4549';
    obj2['Time']='4:40:21';
    obj2['Bidder_name']='Gowtham';
    this.images.push(obj2);

    let obj3={};
    obj3['ProductName']='Kokkubura Bat';
    obj3['Url']="../../assets/images/bat.jpg";
    obj3['Amount']='$ 3.5';
    obj3['Auction_Id']='GBTA:Apl:4550';
    obj3['Time']='2:26:11';
    obj3['Bidder_name']='Kumar';
    this.images.push(obj3)

    let obj4={};
    obj4['ProductName']='Laptop';
    obj4['Url']="../../assets/images/lap.jpg";
    obj4['Amount']='$ 12.5';
    obj4['Auction_Id']='GBTA:Apl:4551';
    obj4['Time']='8:50:20';
    obj4['Bidder_name']='Aarumugam';
    this.images.push(obj4)

    let obj5={};
    obj5['ProductName']='OPPO Mobile';
    obj5['Url']="../../assets/images/oppo.jpg";
    obj5['Amount']='$ 6.5';
    obj5['Auction_Id']='GBTA:Apl:4552';
    obj5['Time']='12:10:55';
    obj5['Bidder_name']='Vin Diesel';
    this.images.push(obj5)

    let obj6={}
    obj6['ProductName']='Power bank-Lenovo 12000 Mah';
    obj6['Url']="../../assets/images/pbank.jpg";
    obj6['Amount']='$ 6.5';
    obj6['Auction_Id']='GBTA:Apl:4553';
    obj6['Time']='12:10:55';
    obj6['Bidder_name']='Vin Diesel';
    this.images.push(obj6)


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
  changestate(){
    ;
  }
 


  ngOnInit() {
    
  console.log(this.images.length)
  }

}
""