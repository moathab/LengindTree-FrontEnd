import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {custLoanAndProfile} from '../../../Service/CustomerService/custLoanAndProfile';
import {Router} from '@angular/router';
import {Bank, LoanType} from '../../../DtoModels';

@Component({
  selector: 'app-customer-apply-loan',
  templateUrl: './customer-apply-loan.component.html',
  styleUrls: ['./customer-apply-loan.component.css']
})
export class CustomerApplyLoanComponent implements OnInit {

  banks:Bank[]
  types:LoanType[]
  selectedLoanAmount: number
  selectedBankOption: string
  selectedTypeOption: string
  bankoption:number
  typeOption: number
  constructor(private router: Router,private api: custLoanAndProfile) { }

  ngOnInit(): void {
    this.getBanks()
    this.getLoanTypes()
  }

  addLoan(){

      if (this.selectedLoanAmount == null){
        alert("Must declare loan amount")
        return;
      }
    if(this.selectedBankOption == "Chase"){
      this.bankoption=1
    }else if(this.selectedBankOption =="Bank Of America"){
      this.bankoption=2
    }else if(this.selectedBankOption=="Citi"){
      this.bankoption=3
    }else if(this.selectedBankOption=="Wells Fargo"){
      this.bankoption=4
    }else if(this.selectedBankOption=="TD Bank"){
      this.bankoption=5
    }else if(this.selectedBankOption==null){
      alert("Must select a bank")
      return
    }
    console.log(this.bankoption)
    if(this.selectedTypeOption == "Personal"){
      this.typeOption=1
    }else if(this.selectedTypeOption =="Business"){
      this.typeOption=2
    }else if(this.selectedTypeOption=="Education"){
      this.typeOption=3
    }else if(this.selectedTypeOption=="Investment"){
      this.typeOption=4
    }else if(this.selectedTypeOption=="Car"){
      this.typeOption=5
    }else if(this.selectedTypeOption == null){
      alert("Must select a loan type")
      return
    }
  console.log(this.typeOption)
    let loanType={
      id: this.typeOption

    }

    let loan= {
      amount: this.selectedLoanAmount,
      loanType: loanType,
      bankId: this.bankoption,
      custId: localStorage.getItem("custId")
    }

    this.api.addLoan(loan).subscribe(
      (res)=>{

        alert("Applied for Loan Successfully.\n View loans from loans page.\n Loan information: " + res )

      },
      error => {
        alert("Application for loan unsuccessful")
      }
    )
  }

  getBanks(){
    this.api.getBanks().subscribe(
      res => {
        this.banks=res;
        console.log(this.banks)
      }
    )
  }

  getLoanTypes(){
    this.api.getLoanTypes().subscribe(
      res=> {
        this.types = res;
        console.log(this.types)
      }
    )
  }

  submit(){
    console.log(this.selectedBankOption)
    console.log(this.selectedLoanAmount)
    console.log(this.selectedTypeOption)
  }
}
