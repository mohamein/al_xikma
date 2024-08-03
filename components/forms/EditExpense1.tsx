'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import SubmitButton from '../SubmitButton';
import { updateExpense1 } from '@/lib/actions/expense.actions';
interface EditExpense1Props {
  id: string;
  form: any;
  setForm: (form: any) => void;
}
const EditExpense1 = ({ id, form, setForm }: EditExpense1Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: any) => {
    let name: string = e.target.name;
    let value: string | number = e.target.value;
    let type: string = e.target.type;
    if (type === 'number') {
      value = e.target.valueAsNumber;
    }
    setForm({
      ...form,
      [name]: value,
    });
  };

  const total =
    form.amount + form.salary + form.expenses + form.shaxaad + form.fuel;

  const netAmount = total - form.feePercentage;

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const resp = await updateExpense1(id, {
        income: form.income,
        fuel: form.fuel,
        shaxaad: form.shaxaad,
        salary: form.salary,
        expenses: form.expenses,
        description: form.description,
        feePercentage: form.feePercentage,
        total: total,
        netIncome: netAmount,
      });
      if (resp) {
        router.push('/dashboard/expense');
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="">Dakhali:</Label>
        <Input
          type="number"
          min="0"
          max="999999"
          name="income"
          value={form.amount}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="">Shidaal:</Label>
        <Input
          type="number"
          min="0"
          max="999999"
          name="fuel"
          value={form.fuel}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="">Shaxaad:</Label>
        <Input
          type="number"
          min="0"
          max="999999"
          name="shaxaad"
          value={form.shaxaad}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="">Salary:</Label>
        <Input
          type="number"
          min="0"
          max="999999"
          name="salary"
          value={form.salary}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="">Expenses:</Label>
        <Input
          type="number"
          min="0"
          max="999999"
          name="expenses"
          value={form.expenses}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="">Description:</Label>
        <Input
          type="text"
          name="description"
          placeholder="Update Description"
          value={form.description}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="">Khidmada:</Label>
        <Input
          type="number"
          min="0"
          max="999999"
          name="feePercentage"
          value={form.feePercentage}
          onChange={handleChange}
        />
      </div>
      <SubmitButton isLoading={isLoading}>Edit</SubmitButton>
    </form>
  );
};

export default EditExpense1;
