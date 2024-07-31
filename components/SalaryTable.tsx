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
        <TableHeader>
          <TableRow>
            <TableHead className="text-[#5874c7]">Employee:</TableHead>
            <TableHead className="text-[#5874c7]">Phone:</TableHead>
            <TableHead className="text-[#5874c7]">Address:</TableHead>
            <TableHead className="text-[#5874c7]">Mushaharka:</TableHead>
            <TableHead className="text-[#5874c7]">Horumarin:</TableHead>
            <TableHead className="text-[#5874c7]">Total:</TableHead>
            <TableHead className="text-[#5874c7]">Date:</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((salary: any) => (
            <TableRow key={salary.id}>
              <TableCell>{salary.employee.name}</TableCell>
              <TableCell>{salary.employee.phone}</TableCell>
              <TableCell>{salary.employee.address}</TableCell>
              <TableCell>{salary.amount}</TableCell>
              <TableCell>{salary.horumarin}</TableCell>
              <TableCell>{salary.total}</TableCell>
              <TableCell>{formatDate(salary.createdAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SalaryTable;
