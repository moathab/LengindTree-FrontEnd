import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import{HttpClient,HttpParams, HttpHeaders} from '@angular/common/http';
import {Customer, Department, Employee, Loan} from '../../DtoModels';

@Injectable()
export class adminApi {

  constructor(private httpClient: HttpClient) {
  }

  getAllLoans(): Observable<any> {
    console.log(localStorage.getItem("token"))
    const header = new HttpHeaders({Authorization: ("Bearer " + localStorage.getItem("token"))})
    return this.httpClient.get<Loan[]>("http://localhost:8080/api/admin/loans/viewAllLoans", {
      headers: header
    });
  }


  getLoansByDepartment(deptId): Observable<any> {
    const header = new HttpHeaders({Authorization: ("Bearer " + localStorage.getItem("token"))})
    return this.httpClient.get<Loan[]>("http://localhost:8080/api/admin/loans/viewLoansByDepartment", {
      headers: header, params: new HttpParams().set('deptId', deptId)
    });
  }

  getEmployees(): Observable<any> {
    const header = new HttpHeaders({Authorization: ("Bearer " + localStorage.getItem("token"))})
    return this.httpClient.get<Employee[]>("http://localhost:8080/api/admin/employees/viewAllEmployees", {
      headers: header
    });
  }

  getEmployeesByDepartment(deptId): Observable<any> {
    const header = new HttpHeaders({Authorization: ("Bearer " + localStorage.getItem("token"))})
    return this.httpClient.get<Employee[]>("http://localhost:8080/api/admin/employees/viewEmployeesByDepartment", {
      headers: header, params: new HttpParams().set('deptId', deptId)
    });
  }

  updateEmployee(employee): Observable<any> {
    const header = new HttpHeaders({Authorization: ("Bearer " + localStorage.getItem("token"))})
    console.log(employee)
    return this.httpClient.put("http://localhost:8080/api/admin/employees/updateEmployee", {}, {
      headers: header,
      params: new HttpParams()
        .set('empId', employee.empId)
        .set('firstName', employee.firstName)
        .set('lastName', employee.lastName)
        .set('deptId', employee.deptId)
        .set('number', employee.number)
    });
  }

  assignLoan(loan): Observable<any> {
    const header = new HttpHeaders({Authorization: ("Bearer " + localStorage.getItem("token"))})
    return this.httpClient.put<Loan[]>("http://localhost:8080/api/admin/loans/assignLoan", {},{
      headers: header, params: new HttpParams().set('loanId', loan.loanId)
    });
  }


  getCustomers(): Observable<any> {
    const header = new HttpHeaders({Authorization: ("Bearer " + localStorage.getItem("token"))})
    return this.httpClient.get<Customer[]>("http://localhost:8080/api/admin/customers/viewAllCustomers", {
      headers: header
    });
  }

  updateCustomer(customer): Observable<any>{
    const header = new HttpHeaders({Authorization: ("Bearer " + localStorage.getItem("token"))})
    return this.httpClient.put<Customer>("http://localhost:8080/api/admin/customers/updateCustomer",{}, {
      headers: header,
      params: new HttpParams()
        .set('custId', customer.custId)
        .set('firstName', customer.firstName)
        .set('lastName', customer.lastName)
        .set('number', customer.number)
        .set('email', customer.email)
        .set('address', customer.address)
    });
  }

  getDepartments(){
    const header = new HttpHeaders({Authorization: ("Bearer " + localStorage.getItem("token"))})
    return this.httpClient.get<Department[]>("http://localhost:8080/api/admin/departments/viewAllDepartments", {
      headers: header
    });
  }

  registerEmployee(employeeUser): Observable<any>{
    return this.httpClient.post("http://localhost:8080/api/loginAndRegister/registerEmployee",employeeUser)
  }

  removeLoan(id):Observable<any>{
    const header = new HttpHeaders({Authorization: ("Bearer " + localStorage.getItem("token"))})
    return this.httpClient.delete("http://localhost:8080/api/admin/loans/deleteLoan", {
      headers: header, params: new HttpParams().set('loanId', id)
    });
  }
}
