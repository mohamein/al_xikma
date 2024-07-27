'use client';
import { useState, useEffect } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Card from '@/components/Card';
import { FaFileInvoice } from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';
import { PiCraneBold } from 'react-icons/pi';
import { getAllEmployee } from '@/lib/actions/employee.actions';
import { getAllExpenses2 } from '@/lib/actions/expense.actions';
import { getAllInvoice } from '@/lib/actions/invoice.actions';

const Dashboard = () => {
  const [income, setIncome] = useState(0);
  const [employee, setEmployee] = useState<any>([]);
  const [invoice, setInvoice] = useState<any>([]);
  const fetchEmployee = async () => {
    const employeeData: any = await getAllEmployee();

    setEmployee(employeeData);
  };
  const fetchInvoice = async () => {
    const invoiceData: any = await getAllInvoice();
    setInvoice(invoiceData);
  };

  const fetchExpense = async () => {
    const expenseData: any = await getAllExpenses2();
    let temp = 0;
    for (let i = 0; i < expenseData.length; i++) {
      temp += parseFloat(expenseData[i].netTotal);
    }

    setIncome(temp);
  };

  useEffect(() => {
    // Employee
    fetchEmployee();

    // Invoice
    fetchInvoice();

    // Expense
    fetchExpense();
  }, []);

  console.log(income);

  return (
    <>
      {/* cards */}
      <div className="flex flex-col gap-4 mt-5">
        <div className="flex items-center gap-4 w-full">
          <Card
            title="Net Income"
            Icon={() => (
              <MdAttachMoney size={64} className="text-gray-200 opacity-30" />
            )}
            length={income}
            className="bg-[#dd6480]"
          />
          <Card
            title="Crane"
            Icon={() => (
              <PiCraneBold size={68} className="text-gray-300 opacity-30" />
            )}
            length={3}
            className="bg-[#1a8692]"
          />
          <Card
            title="Invoices"
            Icon={() => (
              <FaFileInvoice size={64} className="text-gray-300 opacity-30" />
            )}
            length={invoice?.length}
            className="bg-[#2a6fca]"
          />
        </div>

        {/* Table */}
        <div className="flex  gap-4">
          <div className="bg-white shadow-md mx-2 flex-1">
            <Table>
              <TableHeader className="bg-red-600">
                <TableRow>
                  <TableHead className="text-white">FullName</TableHead>
                  <TableHead className="text-white">Email</TableHead>
                  <TableHead className="text-white">Phone</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {employee?.slice(0, 4).map((list: any) => (
                  <TableRow key={list.id}>
                    <TableCell>{list.name}</TableCell>
                    <TableCell>{list.email}</TableCell>
                    <TableCell>{list.phone}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex-1">
            <h2>Invoice</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
