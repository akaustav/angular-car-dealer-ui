export interface ICustomer {
  id: number;
  name: string;
  make: string;
  model: string;
  year: number;
}

export class Customer implements ICustomer {
  id: number;  name: string;
  make: string;
  model: string;
  year: number;
}
