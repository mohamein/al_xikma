declare interface EmployeeParams {
  name: string;
  email: string;
  phone: string;
  address: string;
}

declare interface SalaryParams {
  employeeId: string;
  amount: number;
  horumarin: number;
  salary_date: Date;
  total: number;
}

declare interface CraneParams {
  id?: string;
  customer: string;
  description: string;
  price: number;
  receipt_no: string;
}

declare interface DebtParams {
  id?: string;
  company: string;
  description: string;
  amount: number;
}
