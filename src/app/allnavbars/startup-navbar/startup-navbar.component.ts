import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'startup-app-navbar',
  templateUrl: './startup-navbar.component.html',
  styleUrls: ['./startup-navbar.component.css']
})
export class StartupNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    document.getElementById("mobile__menu").style.width = "100%";
  }



}
