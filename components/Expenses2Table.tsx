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
        <TableHeader className="bg-red-600">
          <TableRow>
            <TableHead className="text-white">Total Dakhli:</TableHead>
            <TableHead className="text-white">Saliid:</TableHead>
            <TableHead className="text-white">Biyo Iyo Laydh:</TableHead>
            <TableHead className="text-white">Internet:</TableHead>
            <TableHead className="text-white">Dayactir:</TableHead>
            <TableHead className="text-white">Spare Parts:</TableHead>
            <TableHead className="text-white">Kharash Yar:</TableHead>
            <TableHead className="text-white">Net Total:</TableHead>
            <TableHead className="text-white">Date:</TableHead>
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
