import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {WeatherApi} from '../../Service/WeatherApi';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  openNav() {
    document.getElementById("mobile__menu").style.width = "100%";
  }

  closeNav() {
    document.getElementById("mobile__menu").style.width = "0";
  }
  logout(){
    localStorage.clear()
    alert("Logout Successful")
    this.router.navigate([''])
  }

}
