'use client';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import { createExpense } from '@/lib/actions/expense.actions';
import { expenseValidation } from '@/lib/validation';

import SubmitButton from '../SubmitButton';
import FormFields from '@/components/FormFields';

const ExpenseForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof expenseValidation>>({
    resolver: zodResolver(expenseValidation),
    defaultValues: {
      fuel: 0,
      shaxaad: 0,
      salary: 0,
      expenses: 0,
      description: '',
      total: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof expenseValidation>) {
    setIsLoading(true);
    try {
      const expense = {
        fuel: values.fuel,
        shaxaad: values.shaxaad,
        salary: values.salary,
        expenses: values.expenses,
        description: values.description,
        total: values.total,
      };
      const expenseData = await createExpense(expense);

      if (expenseData) {
        router.push('/dashboard/expense');

        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex gap-2 w-full">
          <FormFields
            control={form.control}
            type="number"
            name="fuel"
            label="Shidaal:"
            placeholder="Enter amount..."
          />
          <FormFields
            control={form.control}
            type="number"
            name="shaxaad"
            label="Shaxaad:"
            placeholder="Shaxaad..."
          />
        </div>

        <div className="flex gap-2">
          <FormFields
            control={form.control}
            type="number"
            name="salary"
            label="Salary:"
            placeholder="Enter Salary..."
          />
          <FormFields
            control={form.control}
            type="number"
            name="expenses"
            label="Expenses:"
            placeholder="Enter Expenses..."
          />
        </div>

        <div className="flex gap-2">
          <FormFields
            control={form.control}
            type="number"
            name="total"
            label="Total:"
            placeholder="Enter Total..."
          />
        </div>
        <FormFields
          control={form.control}
          type="text"
          name="description"
          label="Description:"
          placeholder="Enter description..."
        />

        <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
      </form>
    </Form>
  );
};

export default ExpenseForm;
