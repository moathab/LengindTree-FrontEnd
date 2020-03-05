import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class commonApi{

  constructor(private httpClient: HttpClient) {
  }


  getuser(user): Observable<any>{
    return this.httpClient.post("http://localhost:8080/api/loginAndRegister/authenticate", user);
  }


}
