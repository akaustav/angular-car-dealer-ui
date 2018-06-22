export interface ICustomer {
  id: number;
  firstName: string;
  lastName: string;
}

export class Customer implements ICustomer {
  id: number;
  firstName: string;
  lastName: string;
}
