import { Component, OnInit } from '@angular/core';
import {adminApi} from '../../../Service/AdminService/adminApi';

@Component({
  selector: 'app-loans-by-department',
  templateUrl: './loans-by-department.component.html',
  styleUrls: ['./loans-by-department.component.css']
})
export class LoansByDepartmentComponent implements OnInit {

  constructor(private api: adminApi) { }

  ngOnInit(): void {
  }


}
