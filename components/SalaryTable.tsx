'use client';
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
const SalaryTable = ({ data }: any) => {
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
        <TableHeader className="bg-[#395CA0]">
          <TableRow>
            <TableHead className="text-white">Employee:</TableHead>
            <TableHead className="text-white">Mushaharka:</TableHead>
            <TableHead className="text-white">Horumarin:</TableHead>
            <TableHead className="text-white">Total:</TableHead>
            <TableHead className="text-white">Date:</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((salary: any) => (
            <TableRow key={salary.id}>
              <TableCell>{salary.employee}</TableCell>
              <TableCell>{salary.amount}</TableCell>
              <TableCell>{salary.horumarin}</TableCell>
              <TableCell>{salary.amount - salary.horumarin}</TableCell>
              <TableCell>{formatDate(salary.createdAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SalaryTable;
