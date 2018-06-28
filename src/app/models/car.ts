export interface ICar {
  id: number;
  name: string;
  make: string;
  model: string;
  year: number;
}

export class Car implements ICar {
  id: number;
  name: string;
  make: string;
  model: string;
  year: number;
}
