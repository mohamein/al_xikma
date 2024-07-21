declare interface EmployeeParams {
  name: string;
  email: string;
  phone: string;
  address: string;
}

declare interface SalaryParams {
  employee: string;
  amount: number;
  horumarin: number;
}

declare interface CraneParams {
  customer: string;
  description: string;
  price: number;
  receipt_no: string;
}
