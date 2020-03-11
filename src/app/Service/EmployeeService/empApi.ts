import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Loan} from '../../DtoModels';

@Injectable()
export class empApi{

  constructor (private httpClient: HttpClient){}


  getLoans(): Observable<any>{
    const header = new HttpHeaders({Authorization: ("Bearer " + localStorage.getItem("token"))})
    return this.httpClient.get<Loan[]>("http://localhost:8080/api/employee/viewAllLoans",{
      headers: header, params: new HttpParams().set('id', localStorage.getItem('empId'))} );
  }

  getEmployee(): Observable<any>{
    const header = new HttpHeaders({Authorization: ("Bearer " + localStorage.getItem("token"))})
    return this.httpClient.get("http://localhost:8080/api/employee/getEmployeeInfoByUsername",{
      headers: header, params: new HttpParams().set('username', localStorage.getItem('username'))} );
  }

  assignLoanToVerify(loanId): Observable<any>{
    const header = new HttpHeaders({Authorization: ("Bearer " + localStorage.getItem("token"))})
    return this.httpClient.put("http://localhost:8080/api/employee/PickUp/moveLoanToVerification",
      {},{
      headers: header, params: new HttpParams().set('loanId', loanId)})

  }

  assignLoanToLegal(loanId): Observable<any>{
    const header = new HttpHeaders({Authorization: ("Bearer " + localStorage.getItem("token"))})
    return this.httpClient.put("http://localhost:8080/api/employee/verification/moveLoanToLegal",
      {},{
        headers: header, params: new HttpParams().set('loanId', loanId)})
  }

  approveLoan(loanId): Observable<any>{
    const header = new HttpHeaders({Authorization: ("Bearer " + localStorage.getItem("token"))})
    return this.httpClient.put("http://localhost:8080/api/employee/legal/approveLoan",
      {},{
        headers: header, params: new HttpParams().set('id', loanId)})
  }

  rejectLoan(loanId): Observable<any>{
    const header = new HttpHeaders({Authorization: ("Bearer " + localStorage.getItem("token"))})
    return this.httpClient.put("http://localhost:8080/api/employee/rejectLoan",
      {},{
        headers: header, params: new HttpParams().set('loanId', loanId)})
  }

  updateEmployeeProfile(emp): Observable<any>{
    const header = new HttpHeaders({Authorization: ("Bearer " + localStorage.getItem("token"))})
    return this.httpClient.put("http://localhost:8080/api/employee/updateEmployee",
      {},{
        headers: header,
        params:
          new HttpParams().set('empId',localStorage.getItem("empId"))
            .set('firstName', emp.firstName)
            .set('lastName', emp.lastName)
            .set('email', emp.email)
            .set('number', emp.number)
    })
  }
}
