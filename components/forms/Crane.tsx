'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import FormFields from '@/components/FormFields';
import { Form } from '@/components/ui/form';
import { craneValidation } from '@/lib/validation';
import { useState } from 'react';
import SubmitButton from '../SubmitButton';
import { useRouter } from 'next/navigation';
import {
  createCrane1,
  createCrane2,
  createCrane3,
} from '@/lib/actions/crane.actions';

const Crane = ({ id }: any) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof craneValidation>>({
    resolver: zodResolver(craneValidation),
    defaultValues: {
      customer: '',
      description: '',
      price: 0,
      receipt_no: '',
    },
  });
  async function onSubmit(values: z.infer<typeof craneValidation>) {
    setIsLoading(true);
    try {
      if (id === '1') {
        const data = await createCrane1({
          customer: values.customer,
          description: values.description,
          price: values.price,
          receipt_no: values.receipt_no,
        });

        if (data) {
          router.push(`/dashboard/crane/${id}`);
        }
        setIsLoading(false);

        console.log(data);
      } else if (id === '2') {
        const data = await createCrane2({
          customer: values.customer,
          description: values.description,
          price: values.price,
          receipt_no: values.receipt_no,
        });

        setIsLoading(false);
        if (data) {
          router.push(`/dashboard/crane/${id}`);
        }
        console.log(data);
      } else {
        const data = await createCrane3({
          customer: values.customer,
          description: values.description,
          price: values.price,
          receipt_no: values.receipt_no,
        });

        setIsLoading(false);
        if (data) {
          router.push(`/dashboard/crane/${id}`);
        }
        console.log(data);
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
          name="customer"
          label="Customer Name:"
          placeholder="Enter Customer Name"
        />
        <FormFields
          control={form.control}
          type="text"
          name="description"
          label="Description:"
          placeholder="Enter Description...."
        />
        <FormFields
          control={form.control}
          type="number"
          name="price"
          label="Price:"
          placeholder="Enter Price..."
        />
        <FormFields
          control={form.control}
          type="text"
          name="receipt_no"
          label="Receipt_No:"
          placeholder="Enter Receipt No..."
        />

        <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
      </form>
    </Form>
  );
};

export default Crane;
