'use client';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import { expense1Validation } from '@/lib/validation';
import FormFields from '../FormFields';
import { createExpense2 } from '@/lib/actions/expense.actions';
import { getAllExpenses1 } from '@/lib/actions/expense.actions';
import { getAllSalary } from '@/lib/actions/salary.actions';
import SubmitButton from '../SubmitButton';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
const Expenses1Form = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [income, setIncome] = useState<any>([]);
  const [salary, setSalary] = useState<any>([]);

  useEffect(() => {
    // Expenses Total
    const fetchExpense = async () => {
      const expenseData: any = await getAllExpenses1();
      let temp: number = 0;
      for (let i = 0; i < expenseData.length; i++) {
        temp += parseFloat(expenseData[i].netIncome);
      }

      setIncome(temp);
    };
    // Salary Total
    const fetchSalary = async () => {
      const expenseData: any = await getAllSalary();
      let temp: number = 0;
      for (let i = 0; i < expenseData.length; i++) {
        temp += parseFloat(expenseData[i].total);
      }

      setSalary(temp);
    };

    fetchExpense();
    fetchSalary();
  }, []);
  const form = useForm<z.infer<typeof expense1Validation>>({
    resolver: zodResolver(expense1Validation),
    defaultValues: {
      oil: 0,
      waterLaydh: 0,
      internet: 0,
      dayactir: 0,
      spareParts: 0,
      smallExpense: 0,
      description: '',
      salary: 0,
      netTotal: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof expense1Validation>) {
    setIsLoading(true);

    try {
      const {
        oil,
        waterLaydh,
        internet,
        dayactir,
        spareParts,
        smallExpense,
        description,
      } = values;
      const netAmount =
        income - (oil + waterLaydh + dayactir + spareParts + smallExpense);

      const result = netAmount - salary;
      const expense = await createExpense2({
        total: income,
        oil: oil,
        waterLayadh: waterLaydh,
        internet: internet,
        dayactir: dayactir,
        spareParts: spareParts,
        smallExpense: smallExpense,
        salary: salary,
        description: description,
        netTotal: result,
      });

      if (expense) {
        router.push('/dashboard/expense1');
      }
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <Label>Dakhali:</Label>
          <Input type="number" readOnly value={income} />
        </div>
        <div>
          <Label>Salary:</Label>
          <Input type="number" readOnly value={salary} />
        </div>
        <FormFields
          control={form.control}
          type="number"
          name="oil"
          label="Saliid"
          placeholder="Saliid"
        />
        <FormFields
          control={form.control}
          type="number"
          name="waterLaydh"
          label="Biyo iyo Laydh"
          placeholder="Biyo Iyo Laydh..."
        />
        <FormFields
          control={form.control}
          type="number"
          name="internet"
          label="Internet"
          placeholder="Internet..."
        />
        <FormFields
          control={form.control}
          type="number"
          name="dayactir"
          label="Dayactir"
          placeholder="Dayactir..."
        />
        <FormFields
          control={form.control}
          type="number"
          name="spareParts"
          label="Spare Parts"
          placeholder="Spare Parts..."
        />
        <FormFields
          control={form.control}
          type="number"
          name="smallExpense"
          label="Kharash Yar"
          placeholder="Kharash Yar..."
        />
        <FormFields
          control={form.control}
          type="text"
          name="description"
          label="Description"
          placeholder="Enter Description..."
        />

        <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
      </form>
    </Form>
  );
};

export default Expenses1Form;
