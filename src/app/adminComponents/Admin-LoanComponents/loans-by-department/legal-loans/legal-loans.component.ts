import { Component, OnInit } from '@angular/core';
import {adminApi} from '../../../../Service/AdminService/adminApi';
import {Loan} from '../../../../DtoModels';

@Component({
  selector: 'app-legal-loans',
  templateUrl: './legal-loans.component.html',
  styleUrls: ['./legal-loans.component.scss']
})
export class LegalLoansComponent implements OnInit {

  loans: Loan[]
  constructor(private api:adminApi) { }

  ngOnInit(): void {
    this.getLoansByDepartment()
  }

  getLoansByDepartment(){

    this.api.getLoansByDepartment(3).subscribe(
      (res)=> {
        this.loans=res;
      }
    )

  }

}
