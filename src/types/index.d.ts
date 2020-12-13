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
