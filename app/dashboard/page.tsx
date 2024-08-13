'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Card from '@/components/Card';
import { LineGraph } from '@/components/Line';
import { DoughnutChart } from '@/components/DoughnutChart';
import { getAllMonthExpense } from '@/lib/actions/month.actions';
import { getAllInvoice } from '@/lib/actions/invoice.actions';
import { getAllFinal } from '@/lib/actions/final.actions';

const Dashboard = () => {
  const [income, setIncome] = useState<any>([]);
  const [sales, setSales] = useState<any>([]);
  const [invoiceLength, setInvoiceLength] = useState(0);

  // // Function to format the date as 'YYYY-MM-DD'
  // const formatDate = (date: Date) => {
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, '0');
  //   const day = String(date.getDate()).padStart(2, '0');
  //   return `${year}-${month}-${day}`;
  // };

  // // Function to get the current month in 'YYYY-MM' format
  // const getCurrentMonth = () => {
  //   const now = new Date();
  //   const year = now.getFullYear();
  //   const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  //   return `${year}-${month}`;
  // };

  // const groupExpensesByMonth = (expense: any) => {
  //   return expense?.reduce((acc: any, data: any) => {
  //     const month = formatDate(data.date).slice(0, 7);
  //     if (!acc[month]) {
  //       acc[month] = 0;
  //     }
  //     acc[month] += data.total;

  //     return acc;
  //   }, {});
  // };
  const fetchExpense = async () => {
    const expenseData: any = await getAllMonthExpense();
    let temp: number = 0;
    for (let i = 0; i < expenseData?.length; i++) {
      temp += parseFloat(expenseData[i].total);
    }

    setIncome(temp);
  };

  const fetchSales = async () => {
    const sale: any = await getAllFinal();
    let temp: number = 0;

    for (let i = 0; i < sale?.length; i++) {
      temp += parseFloat(sale[i].total);
    }

    setSales(temp);
  };

  const fetchInvoice = async () => {
    const invoiceData: any = await getAllInvoice();

    setInvoiceLength(invoiceData?.length);
  };

  useEffect(() => {
    // Expenses
    fetchExpense();
    // Sales
    fetchSales();
    // Invoice
    fetchInvoice();
  }, []);

  // const currentMonth = getCurrentMonth();
  // const totalByDate = groupExpensesByMonth(income);

  // const currentMonthTotal = totalByDate[currentMonth] || 0;

  return (
    <>
      {/* cards */}
      <div className="flex flex-col gap-4 mt-5">
        <div className="flex items-center gap-4 w-full">
          <Card className="bg-white">
            <div className="bg-[#F4F7FE] w-[56px] h-[56px] rounded-full flex items-center justify-center">
              <Image
                src="/assets/earning.svg"
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
            <div className="bg-[#F4F7FE] w-[56px] h-[56px] rounded-full flex items-center justify-center mr-4">
              <Image
                src="/assets/money.svg"
                alt="money"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <h3 className="text-[15px] text-slate-400">Sales</h3>
              <h2 className="text-2xl text-slate-800 font-bold">${sales}</h2>
            </div>
          </Card>
          <Card className="bg-white">
            <div className="flex flex-col items-start w-full">
              <h3 className="text-[15px] text-slate-400">Total Invoice</h3>
              <h2 className="text-2xl text-slate-800 font-bold">
                {invoiceLength}
              </h2>
            </div>
          </Card>
        </div>

        {/* Charts */}
        <div className="flex gap-4 mr-2">
          <LineGraph />

          <DoughnutChart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
