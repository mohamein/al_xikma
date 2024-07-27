'use client';
import Expenses2Table from '@/components/Expenses2Table';
import { getAllExpenses2 } from '@/lib/actions/expense.actions';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const Expenses1 = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const expense: any = await getAllExpenses2();

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
        href="/dashboard/expense1/add"
      >
        <FaPlus className="text-white" />
        Create
      </Link>

      <Expenses2Table data={data} />
    </div>
  );
};

export default Expenses1;
