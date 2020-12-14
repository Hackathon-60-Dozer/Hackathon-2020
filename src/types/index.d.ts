export interface Session {
  id: string;
  email: string;
  token: string;
}

export interface Account {
  firstName: string;
  lastName?: string;
}

export interface Address {
  administrative: string;
  city: string;
  country: string;
  countryCode: string;
  county: string;
  lat: number;
  lng: number;
  postcode: string;
  postcodes: string[];
  value: string;
}

type Day = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
export type Hours = {
  [p in Day]: {
    from: number;
    to: number;
  }[];
};
export type Label = string; /** Food typr label */
export interface Shop {
  name: string;
  organisation: {
    name: string;
    siret: string;
    siege: Address;
  };
  hours: Hours;
  owner: Account;
  labels: Label[];
  products: Product[];
  commands: Command[];
  meta: {
    useMarketCollectPoint: boolean;
    marketValidated: boolean;
    validated: boolean;
  };
}

export type Unit = 'kilo' | 'liter' | 'piece' | 'lot';
export type ConsumptionMode = string;
export type Allergens = string;
export interface Product {
  name: string;
  price: number;
  unit: Unit;
  details: {
    mode: ConsumptionMode[];
    allergens: Allergens[];
    alcohol: boolean;
  };
  meta: {
    available: boolean;
  };
}

export type PaymentType = 'online' | 'onsite';
export interface Command {
  user: Account;
  product: Product[];
  collectDate: Date;
  price: number;
  paymentType: PaymentType;
  meta: {
    validated: boolean;
    collected: boolean;
    paid: boolean;
  };
}
