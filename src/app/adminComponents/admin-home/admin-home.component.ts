import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(localStorage.getItem("token"))

  }

   openNav() {
    document.getElementById("mobile__menu").style.width = "100%";
  }

   closeNav() {
    document.getElementById("mobile__menu").style.width = "0";
  }

}
