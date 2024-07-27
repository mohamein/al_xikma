'use client';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import { expense1Validation } from '@/lib/validation';
import FormFields from '../FormFields';
import { createExpense2 } from '@/lib/actions/expense.actions';
import SubmitButton from '../SubmitButton';

const Expenses1Form = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof expense1Validation>>({
    resolver: zodResolver(expense1Validation),
    defaultValues: {
      total: 0,
      oil: 0,
      waterLaydh: 0,
      internet: 0,
      dayactir: 0,
      spareParts: 0,
      smallExpense: 0,
      netTotal: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof expense1Validation>) {
    setIsLoading(true);

    try {
      const {
        total,
        oil,
        waterLaydh,
        internet,
        dayactir,
        spareParts,
        smallExpense,
      } = values;
      const netAmount =
        total - (oil + waterLaydh + dayactir + spareParts + smallExpense);

      const expense = await createExpense2({
        total: total,
        oil: oil,
        waterLayadh: waterLaydh,
        internet: internet,
        dayactir: dayactir,
        spareParts: spareParts,
        smallExpense: smallExpense,
        netTotal: netAmount,
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
        <FormFields
          control={form.control}
          type="number"
          name="total"
          label="Dakhli"
          placeholder="Dakhliga"
        />
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

        <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
      </form>
    </Form>
  );
};

export default Expenses1Form;
