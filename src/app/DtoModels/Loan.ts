import {Timestamp} from 'rxjs';
import {Customer} from './Customer';
import {Employee} from './Employee';
import {LoanType} from './LoanType';


export class Loan {
  loanId: number;
  amount: number;
  loanType: LoanType;
  bankId: number;
  custId: number;
  status: number;
  initialDate: string;
  recentStatusUpdate: string;

  customer: Customer;
  employee: Employee;
}
