import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../shared/user.model';
import { Game } from '../shared/game.model';
import Web3 from "web3";
import { Auction } from '../shared/auction.model';


@Injectable({
  providedIn: 'root'
})
export class GrabitService {

  public  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  public _privateKey;
  public _ethereumAccountAddress ;
  public _web3;
  constructor(private http:HttpClient) {
    this._web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));

   }

  
  postUser(user: User){
    return this.http.post(environment.api+'/register',user,this.noAuthHeader);
  }


  login(authCredentials) {
    return this.http.post(environment.api + '/authenticate', authCredentials,this.noAuthHeader);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  // send_image(file_path:Auction){
  //   console.log(file_path);
    
  //   return this.http.post(environment.api+'/createAuction',file_path,this.noAuthHeader);
  // }


   upload(product_details,product_name) {
    let obj={};
    this.http.post(environment.api+'/createAuction',product_details,this.noAuthHeader)
    .subscribe(
      res => {
        alert(res)
        console.log(res);
        obj['ipfs_hash']=res;
        obj['product_name']=product_name;
        this.http.post(environment.api+'/productdetailssave',obj,this.noAuthHeader)
        .subscribe(res=>{
          alert('Stored in DB...')
        },err=>{
          console.log(err);
          
        })
            
      },
      err=>{
          console.log(err);
          alert(err)   
          console.log(err);
          
      })

   
  }

  public async setPrivateKey(privateKey): Promise<boolean> {   
    let instance = this;
    instance._privateKey=privateKey;
    return new Promise((resolve, reject) => {
        let obj = instance._web3.eth.accounts.privateKeyToAccount('0x'+privateKey);
        instance._ethereumAccountAddress=obj["address"];
        resolve(true);
      // }
    }) as Promise<boolean>;
  }
  

}
