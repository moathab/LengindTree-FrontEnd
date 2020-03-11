import {Component, OnInit} from '@angular/core';
import {adminApi} from '../../../Service/AdminService/adminApi';
import {Loan} from '../../../DtoModels';

@Component({
  selector: 'app-pending-loans',
  templateUrl: './pending-loans.component.html',
  styleUrls: ['./pending-loans.component.scss']
})
export class PendingLoansComponent implements OnInit {

  loans: Loan[];

  constructor(private api: adminApi) {
  }

  ngOnInit(): void {
    this.getPendingLoans();
  }

  getPendingLoans() {
    this.api.getLoansByDepartment(4).subscribe(
      (res) => {
        this.loans = res;
      }
    );
  }

  assignLoan(loan: Loan) {
  this.api.assignLoan(loan).subscribe(
    (res)=> {
      alert("Loan assigned to employee: " + res.employee.firstName + " " + res.employee.lastName)
      this.getPendingLoans();
    },
    (error)=> {
      console.log(error)
      alert("Error assigning loan:" + error)
    }
  )
  }

  removeLoan(loan){
    this.api.removeLoan(loan.loanId).subscribe(
      res=>{
        alert("Loan Removed Successfully.")
        this.getPendingLoans()
      },
      error => {
        alert("Error removing Loan.")

      }
    )
  }
}
