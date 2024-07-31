'use client';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { salaryValidation } from '@/lib/validation';
import SubmitButton from '../SubmitButton';
import FormFields from '@/components/FormFields';

import { createSalary } from '@/lib/actions/salary.actions';
import { getAllEmployee } from '@/lib/actions/employee.actions';

const SalaryForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [employeeId, setEmployeeId] = useState('');
  const [employee, setEmployee] = useState<any>([]);

  useEffect(() => {
    const fetchEmployee = async () => {
      const employeData = await getAllEmployee();

      setEmployee(employeData);
    };
    fetchEmployee();
  }, []);
  const form = useForm<z.infer<typeof salaryValidation>>({
    resolver: zodResolver(salaryValidation),
    defaultValues: {
      amount: 0,
      horumarin: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof salaryValidation>) {
    setIsLoading(true);
    try {
      const { amount, horumarin } = values;
      const netTotal = amount - horumarin;
      const salaryData = await createSalary({
        employeeId: employeeId,
        amount: amount,
        horumarin: horumarin,
        total: netTotal,
      });
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

  const handleChange = (id: string) => {
    setEmployeeId(id);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Select onValueChange={handleChange} defaultValue={employeeId}>
          <SelectTrigger>
            <SelectValue placeholder="Select Employee" />
          </SelectTrigger>
          <SelectContent>
            {employee?.map((list: any) => (
              <SelectItem key={list.id} value={list.id}>
                {list.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
