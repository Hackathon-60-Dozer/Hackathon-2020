export interface ShopInput {
  name: string;
  address: string;
  organisationName: string;
  organisationSiret: string;
  organisationSiege: string;
  labels: string;
}

export interface SignUpInput {
  firstName: string;
  lastName: string;
  email: string;
  plainPassword: string;
}

export interface AddUserInfoInput {
  firstName: string;
  lastName: string;
}
