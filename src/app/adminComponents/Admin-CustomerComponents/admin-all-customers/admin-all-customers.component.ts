import { Component, OnInit } from '@angular/core';
import {adminApi} from '../../../Service/AdminService/adminApi';
import {Customer} from '../../../DtoModels';

@Component({
  selector: 'app-admin-all-customers',
  templateUrl: './admin-all-customers.component.html',
  styleUrls: ['./admin-all-customers.component.scss']
})
export class AdminAllCustomersComponent implements OnInit {
  term
  errorHolder
  customers: Customer[]
  constructor(private api: adminApi) { }

  ngOnInit(): void {
    this.getCustomer();


  }

  getCustomer(){

    this.api.getCustomers().subscribe(

      (res)=> {
        this.customers=res;
      },
      error => {
        alert("FAILURE RETRIEVING CUSTOMER INFORMATION:" + error)
      }
    )
  }

  updateCustomer(Customer){

    this.api.updateCustomer(Customer).subscribe(
      res=> {
        this.getCustomer();
        alert("Customer updated Successfully:\n " +
          "First name:   "+ res.firstName +
          "\nLast name:  "  + res.lastName +
          "\nEmail:  " + res.email +
          "\nAddress:  " + res.address +
          "\nNumber:  " + res.number)
      },
      error => {
        alert("Failure updating customer: "+ error)
      }
    );
  }


}
