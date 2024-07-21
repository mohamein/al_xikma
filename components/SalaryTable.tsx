import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

const SalaryTable = ({ data }) => {
  return (
    <div className="bg-white shadow-md">
      <Table>
        <TableHeader className="bg-[#395CA0]">
          <TableRow>
            <TableHead className="text-white">Employee:</TableHead>
            <TableHead className="text-white">Mushaharka:</TableHead>
            <TableHead className="text-white">Horumarin:</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((salary) => (
            <TableRow key={salary.id}>
              <TableCell>{salary.employee}</TableCell>
              <TableCell>{salary.amount}</TableCell>
              <TableCell>{salary.horumarin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SalaryTable;
