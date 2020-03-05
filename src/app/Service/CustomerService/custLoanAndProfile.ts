import { Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Loan} from '../../DtoModels';


@Injectable()
export class custLoanAndProfile {

  constructor (private httpClient: HttpClient){}

  register(customerUser): Observable<any>{
    return this.httpClient.post("http://localhost:8080/api/loginAndRegister/registerCustomer",customerUser)
  }


  logout():void {
    localStorage.removeItem("username")
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    localStorage.removeItem("firstName")
    localStorage.removeItem("email")
    localStorage.removeItem("lastName")
    localStorage.removeItem("address")
    localStorage.removeItem("custId")
    localStorage.removeItem("number")
  }


  getLoans(): Observable<any>{
    const header = new HttpHeaders({Authorization: ("Bearer " + localStorage.getItem("token"))})
    return this.httpClient.get<Loan[]>("http://localhost:8080/api/customer/viewAllLoans",{headers: header, params: new HttpParams().set('id', localStorage.getItem('custId'))} );
  }

  addLoan(Loan): Observable<any>{
    const header = new HttpHeaders({Authorization: ("Bearer " + localStorage.getItem("token"))})
    return this.httpClient.post("http://localhost:8080/api/customer/addLoan",Loan,{headers:header} )
  }
  getInfo(): Observable<any>{
    const header = new HttpHeaders({Authorization: ("Bearer " + localStorage.getItem("token"))})
    return this.httpClient.get("http://localhost:8080/api/customer/viewCustomerInfo",{headers: header, params: new HttpParams().set('username', localStorage.getItem("username"))})
  }

  updateInfo(customerUser): Observable<any>{
    const header = new HttpHeaders({Authorization: ("Bearer " + localStorage.getItem("token"))})
    return this.httpClient.put("http://localhost:8080/api/customer/updateCustomerInfo",Loan,
      {headers:header,
                params: new HttpParams()
                        .set('custId', customerUser.custId)
                        .set('firstName', customerUser.firstName)
                        .set('lastName', customerUser.lastName)
                        .set('email', customerUser.email)
                        .set('address', customerUser.address)
                        .set('number', customerUser.number)} )
  }
}
