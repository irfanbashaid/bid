import { Component, OnInit } from '@angular/core';
import { GrabitService } from '../service/grabit.service';

@Component({
  selector: 'app-closedauction',
  templateUrl: './closedauction.component.html',
  styleUrls: ['./closedauction.component.css']
})
export class ClosedauctionComponent implements OnInit {
  public canshow:boolean;
  public images=[];
  public ProductName='Appliances';
  public Amount='$ 4'
  public Auction_Id='GBTA:4548';
  public Time='5:45:33';
  public Bidder_name='Sri ram Prasad';

  constructor(private grabit:GrabitService) {

    let obj1={}
    obj1['ProductName']='Ultra Gamer SONIC -bboy';
    obj1['Url']="../../assets/images/new-somic-g949de-gaming-headset-usb-7-1-channel.jpg";
    obj1['Amount']='$ 3.3';
    obj1['Auction_Id']='GBTA:Apl:4554';
    obj1['Time']='12:10:55';
    obj1['Bidder_name']='Vin Diesel';
    this.images.push(obj1)

    let obj2={}
    obj2['ProductName']='Classic Quartz';
    obj2['Url']="../../assets/images/wtch2.jpg";
    obj2['Amount']='$ 1';
    obj2['Auction_Id']='GBTA:Apl:4555';
    obj2['Time']='07:15:00';
    obj2['Bidder_name']='Triple-H';
    this.images.push(obj2)

    let obj3={}
    obj3['ProductName']='Godrej New Edition';
    obj3['Url']="../../assets/images/wmach.jpg";
    obj3['Amount']='$ 12';
    obj3['Auction_Id']='GBTA:Apl:4556';
    obj3['Time']='06:08:05';
    obj3['Bidder_name']='Washington Vetrivel';
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

   changestate(){
    ;
  }
 
  ngOnInit() {
  }

}
