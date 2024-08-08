'use client';
import { useState, useEffect } from 'react';
import EditExpense1 from '@/components/forms/EditExpense1';
import { getExpense1ById } from '@/lib/actions/expense.actions';
const EditExpensesPage = ({ params }: any) => {
  const [form, setForm] = useState<any>({
    amount: 0,
    fuel: 0,
    internet: 0,
    waterLaydh: 0,
    shaxaad: 0,
    salary: 0,
    expenses: 0,
    description: '',
    feePercentage: 0,
  });

  useEffect(() => {
    const fetchById = async () => {
      const resp: any = await getExpense1ById(params.id);
      setForm({
        amount: resp.amount,
        fuel: resp.fuel,
        internet: resp.internet,
        waterLaydh: resp.waterLayadh,
        shaxaad: resp.shaxaad,
        salary: resp.salary,
        expenses: resp.expenses,
        description: resp.description,
        feePercentage: resp.feePercentage,
      });
    };

    fetchById();
  }, [params.id]);
  return (
    <div className="flex flex-col gap-4 px-6">
      <div className="space-y-2">
        <h2 className="text-xl text-slate-700 font-semibold">
          Complete The Form
        </h2>
        <p className="text-gray-400 font-normal">Expenses1 form editing.</p>
      </div>
      <EditExpense1 id={params.id} form={form} setForm={setForm} />
    </div>
  );
};

export default EditExpensesPage;
