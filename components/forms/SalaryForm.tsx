'use client';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { z } from 'zod';
import { Form } from '@/components/ui/form';

import { salaryValidation } from '@/lib/validation';
import SubmitButton from '../SubmitButton';
import FormFields from '@/components/FormFields';

import { createSalary } from '@/lib/actions/salary.actions';

const SalaryForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof salaryValidation>>({
    resolver: zodResolver(salaryValidation),
    defaultValues: {
      employee: '',
      amount: 0,
      horumarin: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof salaryValidation>) {
    setIsLoading(true);
    try {
      const salary = {
        employee: values.employee,
        amount: values.amount,
        horumarin: values.horumarin,
      };

      const salaryData = await createSalary(salary);
      if (salaryData) {
        console.log(salaryData);

        router.push('/dashboard/salary');
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormFields
          control={form.control}
          type="text"
          name="employee"
          label="Employee:"
          placeholder="Employee Name..."
        />
        <FormFields
          control={form.control}
          type="number"
          name="amount"
          label="Mushahar:"
          placeholder="Xaddiga Mushaharka..."
        />
        <FormFields
          control={form.control}
          type="number"
          name="horumarin"
          label="Horumarin:"
          placeholder="Xaddiga Horumarinta..."
        />

        <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
      </form>
    </Form>
  );
};

export default SalaryForm;
