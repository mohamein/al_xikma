import { z } from 'zod';

export const employeeValidation = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().min(2).max(50, {
    message: 'email must be at least 50 characters',
  }),
  address: z.string().min(2).max(50, {
    message: 'address must be at least 50 characters',
  }),
  phone: z.string().min(2).max(50, {
    message: 'phone must be at least 50 characters',
  }),
});
export const salaryValidation = z.object({
  employee: z.string().min(2, {
    message: 'employeeId must be at least 2 characters',
  }),
  amount: z.number(),
  horumarin: z.number(),
});

export const craneValidation = z.object({
  customer: z.string().min(2, {
    message: 'employeeId must be at least 2 characters',
  }),
  description: z.string().min(2, {
    message: 'employeeId must be at least 2 characters',
  }),
  price: z.number().min(2),
  receipt_no: z.string().min(2),
});

export const expenseValidation = z.object({
  fuel: z.number().min(2),
  shaxaad: z.number().min(2),
  salary: z.number().min(2),
  expenses: z.number().min(2),
  description: z.string().min(2, {
    message: 'employeeId must be at least 2 characters',
  }),
  total: z.number().min(2),
  feePercentage: z.number().min(2),
  totalAmount: z.number().min(2),
});
