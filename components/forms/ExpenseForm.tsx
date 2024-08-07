'use client';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import { createExpense1 } from '@/lib/actions/expense.actions';
import { expenseValidation } from '@/lib/validation';

import SubmitButton from '../SubmitButton';
import FormFields from '@/components/FormFields';

const ExpenseForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [income, setIncome] = useState<any>([]);
  const form = useForm<z.infer<typeof expenseValidation>>({
    resolver: zodResolver(expenseValidation),
    defaultValues: {
      fuel: 0,
      shaxaad: 0,
      waterLaydh: 0,
      internet: 0,
      salary: 0,
      expenses: 0,
      description: '',
      feePercentage: 0,
      total: 0,
      netIncome: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof expenseValidation>) {
    setIsLoading(true);
    try {
      const {
        fuel,
        shaxaad,
        waterLaydh,
        internet,
        salary,
        expenses,
        description,
        feePercentage,
      } = values;
      const total1 = fuel + waterLaydh + internet + shaxaad + expenses + salary;
      const netAmount = total1 - feePercentage;

      const expenseData = await createExpense1({
        fuel: fuel,
        shaxaad: shaxaad,
        waterLayadh: waterLaydh,
        internet: internet,
        salary: salary,
        expenses: expenses,
        description: description,
        total: total1,
        feePercentage: feePercentage,
        netIncome: netAmount,
      });

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
        <div className="flex gap-2 w-[400px]">
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
        <div className="flex gap-2 w-[400px]">
          <FormFields
            control={form.control}
            type="number"
            name="waterLaydh"
            label="Biyo & Laydh:"
            placeholder="Enter amount..."
          />
          <FormFields
            control={form.control}
            type="number"
            name="internet"
            label="Internet:"
            placeholder="Enter amount..."
          />
        </div>

        <div className="flex gap-2 w-[400px]">
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

        <FormFields
          control={form.control}
          type="text"
          name="description"
          label="Description:"
          placeholder="Enter description..."
        />
        <FormFields
          control={form.control}
          type="number"
          name="feePercentage"
          label="Khidmada:"
          placeholder="Khidmada..."
        />

        <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
      </form>
    </Form>
  );
};

export default ExpenseForm;
