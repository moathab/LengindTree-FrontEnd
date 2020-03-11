import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loans-home',
  templateUrl: './loans-home.component.html',
  styleUrls: ['./loans-home.component.css']
})
export class LoansHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openNav() {
    document.getElementById("mobile__menu").style.width = "100%";
  }

  closeNav() {
    document.getElementById("mobile__menu").style.width = "0";
  }
}
