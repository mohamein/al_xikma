import { string, z } from 'zod';

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
  amount: z.number().int(),
  horumarin: z.number().int(),
});

export const craneValidation = z.object({
  customer: z.string().min(2, {
    message: 'employeeId must be at least 2 characters',
  }),
  description: z.string().min(2, {
    message: 'employeeId must be at least 2 characters',
  }),
  price: z.number(),
  receipt_no: z.string().min(2),
});

export const expenseValidation = z.object({
  fuel: z.number().int(),
  shaxaad: z.number().int(),
  salary: z.number().int(),
  expenses: z.number().int(),
  description: z.string().min(2, {
    message: 'description must be at least 2 characters',
  }),
  crane: z.string().min(2, {
    message: 'crane must be at least 2 characters',
  }),
  total: z.number().int(),
});
