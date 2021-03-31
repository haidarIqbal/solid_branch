export interface User {
  _id: string;
  name: {
    first: string;
    last: string;
  };
  address: string;
  company: string;
  phone: number;
  type: string;
  amount: string;
  email: string;
}
