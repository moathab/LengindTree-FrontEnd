import {Timestamp} from 'rxjs';


export class Loan {
  loanId: number;
  amount: number;
  loanType: string;
  bankId: number;
  custId: number;
  status: number;
  initialDate: string;
  recentStatusUpdate: string;
}
