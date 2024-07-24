'use client';
import { useState, useEffect } from 'react';

import ReportTable from '@/components/ReportTable';
import Filter from '@/components/Filter';
import { getAllExpenses } from '@/lib/actions/expense.actions';
interface ExpenseData {
  id: string;
  fuel: number;
  shaxaad: number;
  salary: number;
  expenses: number;
  description: string;
  total: number;
}
const DebtPage = () => {
  const [data, setData] = useState<ExpenseData[]>([]);
  const [value, setValue] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const expense: any = await getAllExpenses();

      if (expense) {
        setData(expense);
      }
    };
    fetchData();
  }, []);

  const handleFilter = (value: any) => {
    const filterData: any = data.filter((item: any) => {
      if (item.salary === value) {
        setData(item);
      }
    });

    return filterData;
  };

  return (
    <div className="space-y-2">
      {/* Filter and Heading */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl text-slate-700 font-semibold">
          Report Section.
        </h2>
        <Filter value={value} setValue={setValue} />
      </div>

      <ReportTable data={data} value={value} />
    </div>
  );
};

export default DebtPage;
