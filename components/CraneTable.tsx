import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';

interface TableProps {
  data: any;
}

const CraneTable = ({ data }: TableProps) => {
  const RenderTable = () => {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-[#395CA0]">Customer:</TableHead>
            <TableHead className="text-[#395CA0]">Description:</TableHead>
            <TableHead className="text-[#395CA0]">Price:</TableHead>
            <TableHead className="text-[#395CA0]">Receipt_No:</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((crane: any) => (
            <TableRow key={crane.id}>
              <TableCell>{crane.customer}</TableCell>
              <TableCell>{crane.description}</TableCell>
              <TableCell>{crane.price}</TableCell>
              <TableCell>{crane.receipt_no}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
  return (
    <div className="bg-white shadow-md">
      <RenderTable />
    </div>
  );
};

export default CraneTable;
