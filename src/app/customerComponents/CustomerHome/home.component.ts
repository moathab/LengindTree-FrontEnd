import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username = '';
  token='';
  role='';

  constructor() {

   }

  ngOnInit(): void {

    this.username = localStorage.getItem("username");;
    console.log(this.username)

    this.token=localStorage.getItem("token");
    console.log(this.token)

    this.role=localStorage.getItem("role");
    console.log(this.role)
  }


}
