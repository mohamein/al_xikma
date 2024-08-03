'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import SubmitButton from '../SubmitButton';
import { updateSalary } from '@/lib/actions/salary.actions';
interface EditSalaryProps {
  id: string;
  form: any;
  setForm: (form: any) => void;
}
const EditSalary = ({ id, form, setForm }: EditSalaryProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: any) => {
    let name = e.target.name;
    let value = e.target.valueAsNumber;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const netTotal = form.amount - form.horumarin;

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const resp = await updateSalary(id, {
        amount: form.amount,
        horumarin: form.horumarin,
        total: netTotal,
        employeeId: form.employeeId,
      });

      if (resp) {
        router.push('/dashboard/salary');
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div>
        <Label htmlFor="total">Mushahar:</Label>
        <Input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="horumarin">Horumarin:</Label>
        <Input
          type="number"
          name="horumarin"
          value={form.horumarin}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="total">Total:</Label>
        <Input
          type="number"
          name="total"
          value={form.total}
          onChange={handleChange}
        />
      </div>

      <SubmitButton isLoading={isLoading}>Edit</SubmitButton>
    </form>
  );
};

export default EditSalary;
