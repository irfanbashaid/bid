import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import  Web3 from "web3";
import { GrabitService } from '../service/grabit.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public _web3;
public  show_signup;
public show_create_account;
public show_account_details;
public account_address;
public private_key;
public text1="Private Key:";
public text2='Ethereum Acc Address:';
public emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
public showSucessMessage: boolean;
public show_error:boolean
public error_message: string;
public publickey_;

  constructor(private grab:GrabitService,private route:Router,private spinner: NgxSpinnerService)
  {
    this._web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));
    console.log(this._web3.version);
    this.show_create_account=true;
  }



  checkValue(event: any){
    if(event == 0)
    {
      this.show_create_account=false;
      this.show_account_details=true;
      let object=this._web3.eth.accounts.create();
      this.account_address=object['address'];
      this.private_key=object['privateKey']; 
    }
    else{
      this.Change_content();
    }
  }

  Change_content()
  {
   this.show_create_account=false;
   this.show_signup=true;
  }

navigate()
{
  this.show_account_details=false;
  this.show_signup=true;
}  

copyInputMessage(inputElement){
  inputElement.select();
  document.execCommand('copy');
  inputElement.setSelectionRange(0, 0);
  alert('Account details copied!')
}

sign_up(name,email,password,privatekey)
{
  this.spinner.show();
let access=this;
let detail={};
detail['fullName']=name;
detail['email']=email;
detail['password']=password;
detail['publickey']=privatekey;
let user:any =detail;
access.grab.setPrivateKey(privatekey).then(res=>{
  
    if(res==true){
      this.spinner.hide();
    access.grab.postUser(user).subscribe(
      res => {
       swal("ok")
        access.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        access.resetForm();
        access.route.navigateByUrl('/user');
      },
      
      err => {
        if (err.status === 422) {
          access.show_error=true;
          access.error_message = err.error.join('<br/>');
        }
        else
        access.error_message = 'Something went wrong.Please contact admin.';
      }
    );
    }
    else if(res== false){
    swal('Enter valid privatekey')
    }
    })    
}

resetForm()
{

}
ngOnInit() { }

}
