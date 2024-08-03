'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import SubmitButton from '../SubmitButton';
import { updateExpense2 } from '@/lib/actions/expense.actions';
interface EditExpense2Props {
  id: string;
  form: any;
  setForm: (form: any) => void;
}
const EditExpense2 = ({ id, form, setForm }: EditExpense2Props) => {
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

  const adding =
    form.oil +
    form.waterLayadh +
    form.dayactir +
    form.spareParts +
    form.smallExpense;
  const netAmount = form.total - adding;
  const result = netAmount - form.salary;
  console.log('Net total', result);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const resp = await updateExpense2(id, {
        oil: form.oil,
        waterLayadh: form.waterLayadh,
        internet: form.internet,
        dayactir: form.dayactir,
        spareParts: form.spareParts,
        smallExpense: form.smallExpense,
        description: form.description,
        salary: form.salary,
        total: netAmount,
        netTotal: result,
      });
      if (resp) {
        router.push('/dashboard/expense1');
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="total">Total:</Label>
        <Input
          type="number"
          min="0"
          max="999999"
          name="total"
          value={form.total}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="oil">Oil:</Label>
        <Input
          type="number"
          min="0"
          max="999999"
          name="oil"
          value={form.oil}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="waterLayadh">Biyo & Layadh:</Label>
        <Input
          type="number"
          min="0"
          max="999999"
          name="waterLayadh"
          value={form.waterLayadh}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="internet">Internet:</Label>
        <Input
          type="number"
          min="0"
          max="999999"
          name="internet"
          value={form.internet}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="dayactir">Dayactir:</Label>
        <Input
          type="number"
          name="dayactir"
          value={form.dayactir}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="">Spare Parts:</Label>
        <Input
          type="number"
          min="0"
          max="999999"
          name="spareParts"
          value={form.spareParts}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="">Kharash Yar:</Label>
        <Input
          type="number"
          min="0"
          max="999999"
          name="smallExpense"
          value={form.smallExpense}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="">Description:</Label>
        <Input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="">Salary:</Label>
        <Input
          min="0"
          max="999999"
          type="number"
          name="salary"
          value={form.salary}
          onChange={handleChange}
        />
      </div>
      <SubmitButton isLoading={isLoading}>Edit</SubmitButton>
    </form>
  );
};

export default EditExpense2;
