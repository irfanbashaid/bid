import { Component, OnInit } from '@angular/core';
import { GrabitService } from '../service/grabit.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  public _credits;
  public optionselected = 1;
  public user_name:string;
  public balance:number;
  public spinner;
  constructor(private grabit:GrabitService,private route:Router,private spin:NgxSpinnerService) { 
    this.load_credits();
    this.load_user_name();
    this.spinner=this.spin;
  }


  load_credits(){
    this.grabit.balanceOf().then(res=>this.balance=res)
  }

  load_user_name(){
    let meta = this;
    meta.grabit.getuserthings().subscribe(
      res=>{
        meta.user_name = res['user']['fullName'];
      },
      err=>{

      }
    )
  }

  check(selected){
    this.optionselected = selected;
    this.grabit.imgshow=false;
  }

  onLogout(){
    this.grabit.deleteToken();
    this.route.navigate(['/login']);
  }

  ngOnInit() {
  }

}
