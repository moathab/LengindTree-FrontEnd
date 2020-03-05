import { Component, OnInit } from '@angular/core';
import {custLoanAndProfile} from '../../Service/CustomerService/custLoanAndProfile';
import {Router} from '@angular/router';
import {Loan} from '../../DtoModels';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-loans',
  templateUrl: './custloans.component.html',
  styleUrls: ['./custloans.component.css']
})
export class CustloansComponent implements OnInit {

  constructor(private router: Router,private api: custLoanAndProfile) { }
  loans: Loan[]
  ngOnInit(): void {
    this.updateLoans()
  }


  addLoan(form: NgForm){

    let loan= {
      bankId: form.value.bankId,
      amount: form.value.amount,
      loanType: form.value.loanType,
      custId: localStorage.getItem("custId")
    }

    this.api.addLoan(loan).subscribe(
      (res)=>{
        this.updateLoans();
        this.router.navigate(['customer/customerComponents']);
      }
    )
  }

  updateLoans(){
    this.api.getLoans().subscribe(

      (res)=> {
        this.loans=res;

      }
    )
  }








}
