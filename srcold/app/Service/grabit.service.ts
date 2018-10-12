import { Injectable } from '@angular/core';
import Web3 from 'web3';
import * as Tx from 'ethereumjs-tx';
import { Buffer } from "buffer";
import { Router } from "@angular/router";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../shared/user.model';
import { Game } from '../shared/game.model';


declare let require:any;
let json = require('./grabit.json');

@Injectable({
  providedIn: 'root'
})
export class GrabitService {
//0x30De3e4F76f69ca11FeC5630C5ce4a39825D4f4E
  public _etherumAccountAddress: string = null; 
  public _privateKey: string; 
  public  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  public  _web3: any;
  public _grabItContractAddress: string = "0x30De3e4F76f69ca11FeC5630C5ce4a39825D4f4E";
  public _grabItContract: any;
  public id1;

  constructor(private router:Router,private http:HttpClient) { 
    this._web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));
    this._grabItContract = new this._web3.eth.Contract(json,this._grabItContractAddress,{gaslimit:3000000});
    // this.owner().then(console.log);
    console.log("inside servei")
    this.setPrivateKey("060e7bb5ad2b21b0ecf1777447060a3395439f28408bc2b5f504196f89dfacfc").then(console.log)
    this.mint("0xCdd62B78b828464225E436CEd514d28647A04331",1).then(res => {
      this.balanceOf().then(console.log)
    })
    
    // var meta = this;
  /*  meta.id1 = setInterval(function() {
      if(typeof(meta._privateKey)!=undefined){
        meta.destroy();
        // clearInterval();
      }
      else{
        meta.router.navigate(["/login"])
        meta.destroy();
      }
    }, 200); */
  } 
  // destroy(){
  //   var meta = this;
  //   if (meta.id1) { 
  //     clearInterval(meta.id1);
  //   }  
  // }

    
  postUser(user: User){
    return this.http.post(environment.api+'/register',user,this.noAuthHeader);
  }
  getauctiondetails() {
    return this.http.get(environment.api + '/productsDetails');
  }
  getUserProfile() {
    return this.http.get(environment.api + '/userProfile');
  }
  public async setPrivateKey(privateKey): Promise<boolean> {                                       
    let instance = this;
    instance._privateKey=privateKey;
    return new Promise((resolve, reject) => {
      let obj = instance._web3.eth.accounts.privateKeyToAccount('0x'+privateKey);
      instance._etherumAccountAddress=obj["address"];
      resolve(true);
    }) as Promise<boolean>;
  }

  
  
  public async getEtherumAccountBalance(): Promise<number> {
    let instance = this;
    return new Promise((resolve, reject) => {
      instance._web3.eth.getBalance(instance._etherumAccountAddress,function(err,result){
        if(err != null) {
          reject(err);
        }
        else{
          resolve(instance._web3.utils.fromWei(result,'ether'));
        }
      })
    }) as Promise<number>;
  }

  public async owner(): Promise<string> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance._grabItContract.methods.owner().call(function(error, result){  
        if(error != null) {
          reject(error);
        }
        else {
          resolve(result)
        }
      });
    }) as Promise<string>;
  }

  public async transferOwnership(newOwner):Promise<number>{
    let instance = this;
    return new Promise((resolve, reject) => {
      instance._web3.eth.getTransactionCount(instance._etherumAccountAddress,function(err,result){
        var nonce = result.toString(16);
        const private_key =Buffer.from(instance._privateKey,'hex');
        var contract_function = instance._grabItContract.methods.transferOwnership(newOwner);
        var contract_function_abi = contract_function.encodeABI();
        var txParams = {
          nonce: '0x'+nonce,
          gasPrice: '0x4A817C800',
          gasLimit: 4000000,
          from: instance._etherumAccountAddress,
          to: instance._grabItContractAddress,
          value: '0x00',
          data: contract_function_abi
        }
        var tx = new Tx(txParams);
        tx.sign(private_key);
        const serializedtx = tx.serialize();
        instance._web3.eth.sendSignedTransaction('0x'+serializedtx.toString('hex'),function(err,result){
          if(err != null){
            console.log("err")
            resolve(0)
          }
          else{
            instance.hash(result).then(res =>{
              if(res == 0){
                resolve(0)
              }
              else if(res == 1) {
                resolve(1)
              }
              else if(res == 2) {
                resolve(2)
              }
            })
          }
        })
      })
    }) as Promise<number>;
  }

  public async transfer( _to,_value):Promise<number>{
    let instance = this;
    return new Promise((resolve, reject) => {
      instance._web3.eth.getTransactionCount(instance._etherumAccountAddress,function(err,result){
        var nonce = result.toString(16);
        const private_key =Buffer.from(instance._privateKey,'hex');
        var contract_function = instance._grabItContract.methods.transfer(_to,_value);
        var contract_function_abi = contract_function.encodeABI();
        var txParams = {
          nonce: '0x'+nonce,
          gasPrice: '0x4A817C800',
          gasLimit: 4000000,
          from: instance._etherumAccountAddress,
          to: instance._grabItContractAddress,
          value: '0x00',
          data: contract_function_abi
        }
        var tx = new Tx(txParams);
        tx.sign(private_key);
        const serializedtx = tx.serialize();
        instance._web3.eth.sendSignedTransaction('0x'+serializedtx.toString('hex'),function(err,result){
          if(err != null){
            console.log("err")
            resolve(0)
          }
          else{
            instance.hash(result).then(res =>{
              if(res == 0){
                resolve(0)
              }
              else if(res == 1) {
                resolve(1)
              }
              else if(res == 2) {
                resolve(2)
              }
            })
          }
        })
      })
    }) as Promise<number>;
  }

  public async mint( _to,_tokens):Promise<number>{
    let instance = this;
    return new Promise((resolve, reject) => {
      instance._web3.eth.getTransactionCount(instance._etherumAccountAddress,function(err,result){
        var nonce = result.toString(16);
        const private_key =Buffer.from(instance._privateKey,'hex');
        var contract_function = instance._grabItContract.methods.mint(_to,_tokens);
        var contract_function_abi = contract_function.encodeABI();
        var txParams = {
          nonce: '0x'+nonce,
          gasPrice: '0x4A817C800',
          gasLimit: 4000000,
          from: instance._etherumAccountAddress,
          to: instance._grabItContractAddress,
          value: '0x00',
          data: contract_function_abi
        }
        var tx = new Tx(txParams);
        tx.sign(private_key);
        const serializedtx = tx.serialize();
        instance._web3.eth.sendSignedTransaction('0x'+serializedtx.toString('hex'),function(err,result){
          if(err != null){
            console.log("err")
            resolve(0)
          }
          else{
            instance.hash(result).then(res =>{
              if(res == 0){
                resolve(0)
              }
              else if(res == 1) {
                resolve(1)
              }
              else if(res == 2) {
                resolve(2)
              }
            })
          }
        })
      })
    }) as Promise<number>;
  }

  public async balanceOf(): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance._grabItContract.methods.balanceOf().call({from:instance._etherumAccountAddress},function(error, result){  
        if(error != null) {
          reject(error);
        }
        else {
          resolve(result);//instance._web3.utils.fromWei(result,'ether')
        }
      });
    }) as Promise<number>;
  }

  public async currentTime(): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance._grabItContract.methods.currentTime().call(function(error, result){  
        if(error != null) {
          reject(error);
        }
        else {
          resolve(result)
        }
      });
    }) as Promise<number>;
  }

  public async createAuction(_startTime,_endTime,_basePrice,_bidIncrement,_minBid,_resetTime) :Promise<number>{
    let instance = this;
    return new Promise((resolve, reject) => {
      instance._web3.eth.getTransactionCount(instance._etherumAccountAddress,function(err,result){
        var nonce = result.toString(16);
        const private_key =Buffer.from(instance._privateKey,'hex');
        var contract_function = instance._grabItContract.methods.createAuction(_startTime,_endTime,_basePrice,_bidIncrement,_minBid,_resetTime);
        var contract_function_abi = contract_function.encodeABI();
        var txParams = {
          nonce: '0x'+nonce,
          gasPrice: '0x4A817C800',
          gasLimit: 4000000,
          from: instance._etherumAccountAddress,
          to: instance._grabItContract,
          value:'0x0',
          data: contract_function_abi
        }
        var tx = new Tx(txParams);
        tx.sign(private_key);
        const serializedtx = tx.serialize();
        instance._web3.eth.sendSignedTransaction('0x'+serializedtx.toString('hex'),function(err,result){
          if(err != null){
            console.log("err")
            resolve(0)
          }
          else{
            instance.hash(result).then(res =>{
              if(res == 0){
                resolve(0)
              }
              else if(res == 1) {
                resolve(1)
              }
              else if(res == 2) {
                resolve(2)
              }
            })
          }
        })
      })
    }) as Promise<number>;
  }

  public async auctionDetails(_aID): Promise<any> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance._grabItContract.methods.auctionDetails(_aID).call(function(error, result){  
        if(error != null) {
          reject(error);
        }
        else {
          resolve(result)
        }
      });
    }) as Promise<any>;
  }

  public async bidDetails(_aID): Promise<any> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance._grabItContract.methods.bidDetails(_aID).call(function(error, result){  
        if(error != null) {
          reject(error);
        }
        else {
          resolve(result)
        }
      });
    }) as Promise<any>;
  }

  public async auctionList(): Promise<number[]> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance._grabItContract.methods.auctionList().call(function(error, result){  
        if(error != null) {
          reject(error);
        }
        else {
          resolve(result)
        }
      });
    }) as Promise<number[]>;
  }

  public async manualBidding(_aID,_amount) :Promise<number>{
    let instance = this;
    return new Promise((resolve, reject) => {
      instance._web3.eth.getTransactionCount(instance._etherumAccountAddress,function(err,result){
        var nonce = result.toString(16);
        const private_key =Buffer.from(instance._privateKey,'hex');
        var contract_function = instance._grabItContract.methods.manualBidding(_aID,_amount);
        var contract_function_abi = contract_function.encodeABI();
        var txParams = {
          nonce: '0x'+nonce,
          gasPrice: '0x4A817C800',
          gasLimit: 4000000,
          from: instance._etherumAccountAddress,
          to: instance._grabItContract,
          value:'0x0',
          data: contract_function_abi
        }
        var tx = new Tx(txParams);
        tx.sign(private_key);
        const serializedtx = tx.serialize();
        instance._web3.eth.sendSignedTransaction('0x'+serializedtx.toString('hex'),function(err,result){
          if(err != null){
            console.log("err")
            resolve(0)
          }
          else{
            instance.hash(result).then(res =>{
              if(res == 0){
                resolve(0)
              }
              else if(res == 1) {
                resolve(1)
              }
              else if(res == 2) {
                resolve(2)
              }
            })
          }
        })
      })
    }) as Promise<number>;
  }

  public async finalizeAuction(_aID) :Promise<number>{
    let instance = this;
    return new Promise((resolve, reject) => {
      instance._web3.eth.getTransactionCount(instance._etherumAccountAddress,function(err,result){
        var nonce = result.toString(16);
        const private_key =Buffer.from(instance._privateKey,'hex');
        var contract_function = instance._grabItContract.methods.finalizeAuction(_aID);
        var contract_function_abi = contract_function.encodeABI();
        var txParams = {
          nonce: '0x'+nonce,
          gasPrice: '0x4A817C800',
          gasLimit: 4000000,
          from: instance._etherumAccountAddress,
          to: instance._grabItContract,
          value:'0x0',
          data: contract_function_abi
        }
        var tx = new Tx(txParams);
        tx.sign(private_key);
        const serializedtx = tx.serialize();
        instance._web3.eth.sendSignedTransaction('0x'+serializedtx.toString('hex'),function(err,result){
          if(err != null){
            console.log("err")
            resolve(0)
          }
          else{
            instance.hash(result).then(res =>{
              if(res == 0){
                resolve(0)
              }
              else if(res == 1) {
                resolve(1)
              }
              else if(res == 2) {
                resolve(2)
              }
            })
          }
        })
      })
    }) as Promise<number>;
  }

  public async hash(a): Promise<number> {
    let meta = this;
    return new Promise((resolve, reject) => {
      var accountInterval = setInterval(function()
      {
        meta._web3.eth.getTransactionReceipt(a,function(err,result){
          if(err != null) {
            console.log("hash err");
            resolve(0);
          }
          if(result !== null)
          {
            clearInterval(accountInterval);
            if(result.status == 0x1)
            {
              console.log("hash result.status == 0x1");
              resolve(1);
            }
            else
            {           
              console.log("hash result.status == else");
              resolve(2);
            }
          }
        })
      },100)
    }) as Promise<number>;
  }

}
