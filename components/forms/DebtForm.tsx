'use client';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import SubmitButton from '../SubmitButton';
import FormFields from '@/components/FormFields';
import { debtValidation } from '@/lib/validation';
import { createDebt } from '@/lib/actions/debt.actions';
const DebtForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof debtValidation>>({
    resolver: zodResolver(debtValidation),
    defaultValues: {
      company: '',
      description: '',
      amount: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof debtValidation>) {
    setIsLoading(true);
    try {
      const resp = await createDebt({
        company: values.company,
        description: values.description,
        amount: values.amount,
      });

      if (resp) {
        router.push('/dashboard/debts');
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
        <FormFields
          control={form.control}
          type="text"
          name="company"
          placeholder="Enter company name...."
          label="Company"
        />
        <FormFields
          control={form.control}
          name="description"
          type="text"
          placeholder="Enter description...."
          label="Description"
        />
        <FormFields
          control={form.control}
          type="number"
          name="amount"
          placeholder="Enter amount...."
          label="Company"
        />

        <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
      </form>
    </Form>
  );
};

export default DebtForm;
