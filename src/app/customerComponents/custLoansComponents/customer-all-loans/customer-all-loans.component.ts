import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {custLoanAndProfile} from '../../../Service/CustomerService/custLoanAndProfile';
import {Loan} from '../../../DtoModels';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-customer-all-loans',
  templateUrl: './customer-all-loans.component.html',
  styleUrls: ['./customer-all-loans.component.scss']
})
export class CustomerAllLoansComponent implements OnInit {

  custName: string
  constructor(private router: Router,private api: custLoanAndProfile) {
    this.custName=localStorage.getItem("firstName")+ " " +localStorage.getItem("lastName");
  }
  loans: Loan[]
  ngOnInit(): void {
    this.updateLoans()

  }


  updateLoans(){
    this.api.getLoans().subscribe(

      (res)=> {
        this.loans=res;

      }
    )
  }
}
