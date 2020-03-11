import { Component, OnInit } from '@angular/core';
import {adminApi} from '../../../../Service/AdminService/adminApi';
import {Loan} from '../../../../DtoModels';

@Component({
  selector: 'app-verification-loans',
  templateUrl: './verification-loans.component.html',
  styleUrls: ['./verification-loans.component.scss']
})
export class VerificationLoansComponent implements OnInit {

  loans: Loan[];
  constructor(private api: adminApi) { }

  ngOnInit(): void {
    this.getLoansByDepartment()
  }

  getLoansByDepartment(){

    this.api.getLoansByDepartment(2).subscribe(
      (res)=> {
        this.loans=res;
      }
    )

  }
}
