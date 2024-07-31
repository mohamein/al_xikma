'use client';
import { Form } from '@/components/ui/form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { z } from 'zod';

import { finalValidation } from '@/lib/validation';
import { createFinal } from '@/lib/actions/final.actions';

import SubmitButton from '../SubmitButton';
import FormFields from '@/components/FormFields';

const FinalForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof finalValidation>>({
    resolver: zodResolver(finalValidation),
    defaultValues: {
      crane1: 0,
      crane2: 0,
      crane3: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof finalValidation>) {
    setIsLoading(true);
    try {
      const { crane1, crane2, crane3 } = values;
      const netTotal = crane1 + crane2 + crane3;
      const final = await createFinal({
        crane1: crane1,
        crane2: crane2,
        crane3: crane3,
        total: netTotal,
      });
      if (final) {
        router.push('/dashboard/expense/add');
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
          type="number"
          name="crane1"
          label="crane 25t"
          placeholder="Enter Crane 20t Total"
        />
        <FormFields
          control={form.control}
          type="number"
          name="crane2"
          label="crane 60t"
          placeholder="Enter Crane 60t Total"
        />
        <FormFields
          control={form.control}
          type="number"
          name="crane3"
          label="crane 160t"
          placeholder="Enter Crane 160t Total"
        />
        <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
      </form>
    </Form>
  );
};

export default FinalForm;
