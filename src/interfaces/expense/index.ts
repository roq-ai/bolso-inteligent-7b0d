import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ExpenseInterface {
  id?: string;
  amount: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ExpenseGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
