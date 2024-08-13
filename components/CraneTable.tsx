import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import { Button } from './ui/button';
import Link from 'next/link';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface TableProps {
  data: any;
  id: string;
  handleDelete: (id: string) => void;
}

const CraneTable = ({ data, id, handleDelete }: TableProps) => {
  const formatDate = (date: Date) => {
    const dateOptions: any = {
      year: 'numeric',
      month: 'long', // or 'short' or 'numeric'
      day: 'numeric',
    };

    return date.toLocaleDateString(undefined, dateOptions);
  };
  const RenderTable = () => {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-[#395CA0]">Customer:</TableHead>
            <TableHead className="text-[#395CA0]">Description:</TableHead>
            <TableHead className="text-[#395CA0]">Price:</TableHead>
            <TableHead className="text-[#395CA0]">Receipt_No:</TableHead>
            <TableHead className="text-[#395CA0]">Date:</TableHead>
            <TableHead className="text-[#395CA0]">Actions:</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((crane: any) => (
            <TableRow key={crane.id}>
              <TableCell>{crane.customer}</TableCell>
              <TableCell>{crane.description}</TableCell>
              <TableCell>{crane.price}</TableCell>
              <TableCell>{crane.receipt_no}</TableCell>
              <TableCell>{formatDate(crane.date)}</TableCell>
              <TableCell className="flex items-center gap-2">
                <Link
                  className="text-green-500"
                  href={`/dashboard/crane/${id}/edit/${crane.id}`}
                >
                  <FaEdit size={18} />
                </Link>
                /
                <Button
                  onClick={() => handleDelete(crane?.id)}
                  className="bg-transparent border-none text-red-500  hover:bg-transparent"
                >
                  <FaTrash size={18} />
                </Button>
              </TableCell>
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
