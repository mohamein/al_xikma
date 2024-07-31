'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Card from '@/components/Card';
import { getAllExpenses2 } from '@/lib/actions/expense.actions';

const Dashboard = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState<any>([]);

  const fetchExpense = async () => {
    const expenseData: any = await getAllExpenses2();
    let temp1: number = 0;
    let temp2: number = 0;
    for (let i = 0; i < expenseData.length; i++) {
      temp1 += parseFloat(expenseData[i].netTotal);
    }

    for (let i = 0; i < expenseData.length; i++) {
      temp2 += parseFloat(expenseData[i].total);
    }

    setIncome(temp1);
    setExpenses(temp2);
  };

  useEffect(() => {
    // Expense
    fetchExpense();
  }, []);
  return (
    <>
      {/* cards */}
      <div className="flex flex-col gap-4 mt-5">
        <div className="flex items-center gap-4 w-full">
          <Card className="bg-white">
            <div className="bg-[#F4F7FE] w-[56px] h-[56px] rounded-full flex items-center justify-center">
              <Image
                src="/assets/icon.svg"
                alt="money"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-[15px] font-medium text-slate-400">
                Net Income
              </h3>
              <h2 className="text-2xl text-slate-800 font-bold">${income}</h2>
            </div>
          </Card>
          <Card className="bg-white">
            <div className="bg-[#F4F7FE] w-[56px] h-[56px] rounded-full flex items-center justify-center mr-5">
              <Image
                src="/assets/money.svg"
                alt="money"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <h3 className="text-[15px] text-slate-400">Spend month</h3>
              <h2 className="text-2xl text-slate-800 font-bold">$0</h2>
            </div>
          </Card>

          <Card className="bg-white">
            <div className="flex flex-col items-start w-full">
              <h3 className="text-[15px] text-slate-400">Sales</h3>
              <h2 className="text-2xl text-slate-800 font-bold">${expenses}</h2>
            </div>
          </Card>
        </div>

        {/* Charts */}
      </div>
    </>
  );
};

export default Dashboard;
