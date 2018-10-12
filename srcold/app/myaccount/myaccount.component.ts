import { Component, OnInit } from '@angular/core';
import { GrabitService } from '../Service/grabit.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  constructor(private grabit: GrabitService) { }

  ngOnInit() {
    var instance=this;
    instance.grabit.getUserProfile().subscribe(
      res => {
        (document.getElementById("email")as HTMLInputElement).value=res['user']['fullName'];
        (document.getElementById("pub")as HTMLInputElement).value= res['user']['email'];
        (document.getElementById("accbal")as HTMLInputElement).value=res['user']['publickey'];   
      },
      err => { 
        console.log(err);
        
      }
    );
  }

}
