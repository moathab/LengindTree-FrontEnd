import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-navbar',
  templateUrl: './employee-navbar.component.html',
  styleUrls: ['./employee-navbar.component.css']
})
export class EmployeeNavbarComponent implements OnInit {

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
