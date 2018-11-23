import { Component, OnInit } from '@angular/core';
import { GrabitService } from "../service/grabit.service";
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  public credit_balance;
  public tabSelected:number=1;
  public owner_name:string;
  public spinner;
  constructor(private grabit:GrabitService,private route:Router,private spin:NgxSpinnerService) { 
    this.acc_balance();
    this.load_owner_name();
    this.spinner =this.spin;
  }

  load_owner_name(){
    let meta =this;
    meta.grabit.getuserthings().subscribe(
      res=>{
        meta.owner_name=res['user']['fullName'];
      },
      err =>{

      }
    )
  }
  chooseTab(selected){
    this.tabSelected = selected;
  }
 
  acc_balance(){
    let meta = this;
    meta.grabit.balanceOf().then(bal => {
      meta.credit_balance = bal;
    })
  }

  
  onLogout(){
    this.grabit.deleteToken();
    this.route.navigate(['/login']);
  }

  top_up_credits(){
    
  }

  transferOwnership(){
  }
 

  ngOnInit() {

}
}