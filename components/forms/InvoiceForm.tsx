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
import { createInvoice } from '@/lib/actions/invoice.actions';

const InvoiceForm = () => {
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
      const invoiceValue = {
        customer: values.customer,
        description: values.description,
        price: values.price,
        receipt_no: values.receipt_no,
      };

      const invoice = await createInvoice(invoiceValue);

      if (invoice) {
        router.push(`/dashboard/invoice/${invoice.id}`);

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
          name="customer"
          label="Customer:"
          placeholder="Enter Customer Name"
        />
        <FormFields
          control={form.control}
          type="text"
          name="description"
          label="Description:"
          placeholder="Enter Description..."
        />
        <FormFields
          control={form.control}
          type="number"
          name="price"
          label="Xaddiga:"
          placeholder="Xaddiga Lacagta"
        />
        <FormFields
          control={form.control}
          type="text"
          name="receipt_no"
          label="Receipt No:"
          placeholder="Receipt No"
        />

        <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
      </form>
    </Form>
  );
};

export default InvoiceForm;
