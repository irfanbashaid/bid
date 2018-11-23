import { Component, OnInit } from '@angular/core';
import { GrabitService } from '../service/grabit.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { OwnerComponent } from '../owner/owner.component';


@Component({
  selector: 'app-create-auction',
  templateUrl: './create-auction.component.html',
  styleUrls: ['./create-auction.component.css']
})
export class CreateAuctionComponent implements OnInit {
  filepath;
  public selectedFile: any;
  public show_revert_error:boolean;
  public show_valid:boolean;
  public baseprice_error:boolean;
  public least_baseprice:number;
  public minimumbid_error:boolean;
  public reset_time_error:boolean;
  public successful_message:boolean;
  public bid_increment_error:boolean;
  fd = new FormData();
  constructor (private grab:GrabitService,private owner:OwnerComponent,private http:HttpClient) {
    this.show_revert_error=false;
    this.show_valid=false;
    this.baseprice_error=false;
    this.reset_time_error=false;
    this.successful_message=false;
    this.bid_increment_error=false;
  }

  onFileChanged(event){
      this.selectedFile = event.target.files[0];
  }    
  
  upload(productname,start,end,base_price,bid_increment,minimum_bid,reset_time){
    let ins=this;
    ins.successful_message=false;
    ins.show_revert_error=false;
    ins.show_valid=false;
    ins.baseprice_error=false;
    ins.reset_time_error=false;
    ins.minimumbid_error=false;
    ins.bid_increment_error=false;

    if(productname.trim() !="" && start.trim() !="" && end.trim() !="" && base_price.trim() !="" && bid_increment.trim() !="" && minimum_bid.trim() !="" && reset_time.trim() !="") {
  
      if(Number(minimum_bid)<Number(bid_increment))
      {
        
        ins.minimumbid_error=true;
        // alert("minimum bid must be greater or equal to bid increment")
        return;
      }
      if(Number(base_price)<Number(minimum_bid)+(Number(bid_increment)-(Number(minimum_bid)%Number(bid_increment))))
      {
        ins.baseprice_error=true;
        ins.least_baseprice= Number(minimum_bid)+Number(bid_increment-(minimum_bid%bid_increment))
        // alert("Base price must be atleast"+f+"")
        return;
      }
      if(Number(reset_time)<=0)
      {
        ins.reset_time_error=true;
        // alert("Reset time must be greater than 0");
        return;
      }
      if(Number(bid_increment<=0))
      {
        ins.bid_increment_error=true;
        return;
      }
        var headers = new HttpHeaders();
        let fd = new FormData(); 
        headers.append('Content-Type', 'application/form-data');
        fd.append('path', ins.selectedFile);
        
        this.http.post("https://ipfs.infura.io:5001/api/v0/add?stream-channels=true",fd).subscribe((r)=>{
        var t=new Date(start).getTime() / 1000;
        var a:any = Math.round(t);
        var _starttime:number = parseInt(a);
        var t1=new Date(end).getTime() / 1000;
        var a1:any = Math.round(t1);
        var _endtime:number = parseInt(a1);
        ins.owner.spinner.show();

        ins.grab.createAuction(_starttime,_endtime,base_price,bid_increment,minimum_bid,reset_time).then(res=>{
          console.log("createAuction",res);          
          ins.owner.spinner.hide();
          if(res==1){  
            res=0;
            ins.grab.upload(r["Hash"],productname);
            ins.successful_message=true;
            (document.getElementById("productname")as HTMLInputElement).value="";
            (document.getElementById("starttime")as HTMLInputElement).value="";
            (document.getElementById("endtime")as HTMLInputElement).value="";
            (document.getElementById("baseprice")as HTMLInputElement).value="";
            (document.getElementById("bidincrement")as HTMLInputElement).value="";
            (document.getElementById("minimumbid")as HTMLInputElement).value="";
            (document.getElementById("resettime")as HTMLInputElement).value="";
            return;
          }
          else if(res==2){
            res
            console.log('Error...');
            this.show_valid=true;
          }
          else{
            this.show_valid=true;
          }
        })
       })  
    }
    else{
      
      this.show_revert_error=true;
    }
  }
   
  ngOnInit() 
  { }

}

