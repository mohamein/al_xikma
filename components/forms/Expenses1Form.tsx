'use client';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import FormFields from '../FormFields';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';

import { createExpense2 } from '@/lib/actions/expense.actions';
import { getAllExpenses1 } from '@/lib/actions/expense.actions';
import { getAllSalary } from '@/lib/actions/salary.actions';
import { getAllFinal } from '@/lib/actions/final.actions';
import { expense1Validation } from '@/lib/validation';

import SubmitButton from '../SubmitButton';
const Expenses1Form = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [income, setIncome] = useState<any>([]);
  const [salary, setSalary] = useState<any>([]);
  const [sales, setSales] = useState<any>([]);
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    // Expenses Total
    const fetchExpense = async () => {
      const expenseData: any = await getAllExpenses1();
      let temp: number = 0;
      for (let i = 0; i < expenseData?.length; i++) {
        temp += parseFloat(expenseData[i].netIncome);
      }
      setIncome(temp);
    };
    // Sales total
    const fetchSales = async () => {
      const sale: any = await getAllFinal();
      let temp: number = 0;

      for (let i = 0; i < sale?.length; i++) {
        temp += parseFloat(sale[i].total);
      }

      setSales(temp);
    };
    // Salary Total
    const fetchSalary = async () => {
      const expenseData: any = await getAllSalary();
      let temp: number = 0;
      for (let i = 0; i < expenseData?.length; i++) {
        temp += parseFloat(expenseData[i].total);
      }

      setSalary(temp);
    };

    fetchExpense();
    fetchSales();
    fetchSalary();
  }, []);
  const form = useForm<z.infer<typeof expense1Validation>>({
    resolver: zodResolver(expense1Validation),
    defaultValues: {
      oil: 0,
      dayactir: 0,
      spareParts: 0,
      smallExpense: 0,
      description: '',
      salary: 0,
      netTotal: 0,
    },
  });

  let subTotal: number = 0;
  subTotal = sales - income;

  async function onSubmit(values: z.infer<typeof expense1Validation>) {
    setIsLoading(true);
    try {
      const { oil, dayactir, spareParts, smallExpense, description } = values;
      const addition = oil + dayactir + spareParts + smallExpense;
      const totalAmount = subTotal - addition;
      const result = totalAmount - salary;
      const expense = await createExpense2({
        oil: oil,
        total: subTotal,
        dayactir: dayactir,
        spareParts: spareParts,
        smallExpense: smallExpense,
        salary: salary,
        description: description,
        expense_date: date,
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

        <div className="mt-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn(
                  'w-[280px] justify-start text-left font-normal',
                  !date && 'text-[#5874c7]'
                )}
              >
                <CalendarIcon className="mr-2 h-6 w-6" />
                {date ? (
                  format(date, 'MMM y')
                ) : (
                  <span className="font-medium">Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
      </form>
    </Form>
  );
};

export default Expenses1Form;
