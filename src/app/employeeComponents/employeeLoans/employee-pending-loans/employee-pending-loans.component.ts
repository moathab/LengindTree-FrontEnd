import { Component, OnInit } from '@angular/core';
import {Loan} from '../../../DtoModels';
import {empApi} from '../../../Service/EmployeeService/empApi';

@Component({
  selector: 'app-employee-pending-loans',
  templateUrl: './employee-pending-loans.component.html',
  styleUrls: ['./employee-pending-loans.component.scss']
})
export class EmployeePendingLoansComponent implements OnInit {

  loans:Loan[]
  constructor(private api: empApi) { }

  ngOnInit(): void {
    this.getPendingLoans()
  }

  getPendingLoans(){

    this.api.getLoans().subscribe(
      res=>{

        this.loans=res;
      }
    )
  }

  assignLoan(loan){
    if(localStorage.getItem("role") == "PickUp"){
      this.api.assignLoanToVerify(loan.loanId).subscribe(
        res=>{
          alert("Loan assigned to " + res.employee.firstName + " " + res.employee.lastName)
          this.updateLoans()
        },
        error => {
          alert("Error approving Loan:pickup")
        }
      )
    }else if (localStorage.getItem("role") == "Verification"){

      this.api.assignLoanToLegal(loan.loanId).subscribe(
        res => {
          alert("Loan assigned to " + res.employee.firstName + " " + res.employee.lastName)
          this.updateLoans()
        },
        error => {
          alert("Error approving Loan:verification")
        }
      )

    }else {
      console.log(loan.loanId)
      this.api.approveLoan(loan.loanId).subscribe(
        res=>{
          alert("Loan approved and assigned to " + res.employee.firstName + " " + res.employee.lastName)
          this.updateLoans()
        },
        error => {
          console.log(localStorage.getItem("role"))
          alert("Error approving Loan:legal")
        }
      )
    }

  }
  updateLoans(){
    this.getPendingLoans()
  }

  rejectLoan(loan){
    this.api.rejectLoan(loan.loanId).subscribe(
      res=>{
        alert("Loan Rejected Successfully and moved to " + res.employee.firstName + " for further review")
        this.updateLoans()
      },
      error => {
        alert("Error rejecting loan")
      }
    )
  }
}
