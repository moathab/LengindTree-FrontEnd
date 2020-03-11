import { Component, OnInit } from '@angular/core';
import {adminApi} from '../../../../Service/AdminService/adminApi';
import {Loan} from '../../../../DtoModels';

@Component({
  selector: 'app-pickup-loans',
  templateUrl: './pickup-loans.component.html',
  styleUrls: ['./pickup-loans.component.scss']
})
export class PickupLoansComponent implements OnInit {
  loans: Loan[]
  constructor(private api: adminApi) { }

  ngOnInit(): void {
    this.getLoansByDepartment()
  }

  getLoansByDepartment(){

    this.api.getLoansByDepartment(1).subscribe(
      (res)=> {
        this.loans=res;
      }
    )

  }

}
