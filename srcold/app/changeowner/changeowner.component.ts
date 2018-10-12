import { Component, OnInit } from '@angular/core';
import { GrabitService } from '../Service/grabit.service';
@Component({
  selector: 'app-changeowner',
  templateUrl: './changeowner.component.html',
  styleUrls: ['./changeowner.component.css']
})
export class ChangeownerComponent implements OnInit {

  constructor(private grabit:GrabitService) { 
    grabit.owner().then(owneraddress=>{
      // document.getElementById("").value=
      
    })
  }

  ngOnInit() {
  }

}
