import { Component, OnInit } from '@angular/core';
import { GrabitService } from '../service/grabit.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private grabit:GrabitService) { }

  public optionselected = 0;

  check(selected){
    this.optionselected = selected;
    this.grabit.imgshow=false;
  }

  ngOnInit() {
  }

}
