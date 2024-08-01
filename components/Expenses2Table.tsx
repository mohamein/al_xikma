import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';
const Expenses2Table = ({ data }: any) => {
  const formatDate = (date: Date) => {
    const dateOptions: any = {
      year: 'numeric',
      month: 'long', // or 'short' or 'numeric'
      day: 'numeric',
    };

    return date.toLocaleDateString(undefined, dateOptions);
  };
  return (
    <div className="bg-white shadow-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-[#5874c7]">Total Dakhli:</TableHead>
            <TableHead className="text-[#5874c7]">Saliid:</TableHead>
            <TableHead className="text-[#5874c7]">Biyo Iyo Laydh:</TableHead>
            <TableHead className="text-[#5874c7]">Internet:</TableHead>
            <TableHead className="text-[#5874c7]">Dayactir:</TableHead>
            <TableHead className="text-[#5874c7]">Spare Parts:</TableHead>
            <TableHead className="text-[#5874c7]">Kharash Yar:</TableHead>
            <TableHead className="text-[#5874c7]">Description:</TableHead>
            <TableHead className="text-[#5874c7]">Mushahar:</TableHead>
            <TableHead className="text-[#5874c7]">Net Total:</TableHead>
            <TableHead className="text-[#5874c7]">Date:</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((expense: any) => (
            <TableRow key={expense.id}>
              <TableCell>{expense.total}</TableCell>
              <TableCell>{expense.oil}</TableCell>
              <TableCell>{expense.waterLayadh}</TableCell>
              <TableCell>{expense.internet}</TableCell>
              <TableCell>{expense.dayactir}</TableCell>
              <TableCell>{expense.spareParts}</TableCell>
              <TableCell>{expense.smallExpense}</TableCell>
              <TableCell>{expense.description}</TableCell>
              <TableCell>{expense.salary}</TableCell>
              <TableCell>{expense.netTotal}</TableCell>
              <TableCell>{formatDate(expense.createdAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Expenses2Table;
