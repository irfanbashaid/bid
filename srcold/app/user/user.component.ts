import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  public optionselected = 0;

  check(selected){
    this.optionselected = selected;
  }

  ngOnInit() {
  }

}
