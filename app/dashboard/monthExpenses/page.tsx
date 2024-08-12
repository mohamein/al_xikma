'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';
import MonthExpenseTable from '@/components/MonthExpenseTable';
import { getAllMonthExpense } from '@/lib/actions/month.actions';
const MonthExpenses = () => {
  const [data, setData] = useState<any>();

  const fetchMonthExpense = async () => {
    const expense: any = await getAllMonthExpense();
    setData(expense);
  };
  useEffect(() => {
    fetchMonthExpense();
  }, []);

  return (
    <div className="space-y-4 px-4">
      <h2 className="text-slate-800 font-semibold text-2xl">Month Expenses</h2>
      <Link
        className="bg-[#395CA0] rounded-md text-white text-base font-semibold py-4 px-2 w-[100px] flex items-center justify-center gap-2"
        href="/dashboard/monthExpenses/add"
      >
        <FaPlus className="text-white" />
        Create
      </Link>

      {/* Table */}
      <MonthExpenseTable data={data} />
    </div>
  );
};

export default MonthExpenses;
