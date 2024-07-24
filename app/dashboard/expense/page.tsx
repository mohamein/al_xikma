'use client';
import { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import Link from 'next/link';

import ExpenseTable from '@/components/ExpenseTable';
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
const Expense = () => {
  const [data, setData] = useState<ExpenseData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const expense: any = await getAllExpenses();

      if (expense) {
        setData(expense);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="space-y-2">
      <h2 className="text-slate-800 font-semibold text-2xl">Expense</h2>
      <Link
        className="bg-[#395CA0] rounded-md text-white text-base font-semibold py-4 px-2 w-[100px] flex items-center  gap-2"
        href="/dashboard/expense/add"
      >
        <FaPlus className="text-white" />
        Create
      </Link>

      <ExpenseTable data={data} />
    </div>
  );
};

export default Expense;
