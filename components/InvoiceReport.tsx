'use client';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { getAllInvoice } from '@/lib/actions/invoice.actions';
const InvoiceReport = () => {
  const [date, setDate] = useState<Date>();
  const [data, setData] = useState<any>([]);
  const [search, setSearch] = useState('');

  const formatDate = (date: Date) => {
    const dateOptions: any = {
      year: 'numeric',
      month: 'long', // or 'short' or 'numeric'
      day: 'numeric',
    };

    return date.toLocaleDateString(undefined, dateOptions);
  };

  useEffect(() => {
    const fetchData = async () => {
      const invoice: any = await getAllInvoice();
      if (invoice) {
        setData(invoice);
      }
    };

    fetchData();
  }, []);
  const handleFilterDate = (reportData: any, selectedDate: any) => {
    if (!selectedDate) return data;

    return reportData?.filter((report: any) => {
      const reportDate = new Date(report.createdAt);
      return (
        reportDate.toDateString() === new Date(selectedDate).toDateString()
      );
    });
  };

  const filterBySearch = (reportData: any, searchValue: string) => {
    if (!searchValue) return data;
    return reportData?.filter((report: any) => {
      return searchValue.toLowerCase() === ''
        ? report
        : report.customer.toLowerCase().includes(searchValue);
    });
  };

  let filteredData;
  if (date) {
    filteredData = handleFilterDate(data, date);
  } else {
    filteredData = filterBySearch(data, search);
  }
  return (
    <div className="flex flex-col mt-10 gap-4">
      <div className="flex gap-4 items-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn(
                'w-[280px] justify-start text-left font-normal',
                !date && 'text-[#5874c7]'
              )}
            >
              <CalendarIcon className="mr-2 h-6 w-6" />
              {date ? (
                format(date, 'MMM y')
              ) : (
                <span className="font-medium">Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <Input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[300px]"
        />
      </div>

      <div className="bg-white shadow-md mr-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-[#5874c7]">Invoice To:</TableHead>
              <TableHead className="text-[#5874c7]">Description:</TableHead>
              <TableHead className="text-[#5874c7]">Price:</TableHead>
              <TableHead className="text-[#5874c7]">Total:</TableHead>
              <TableHead className="text-[#5874c7]">Date:</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData?.map((list: any) => (
              <TableRow key={list.id}>
                <TableCell>{list.customer}</TableCell>
                <TableCell>{list.description}</TableCell>
                <TableCell>{list.price}</TableCell>
                <TableCell>{list.price}</TableCell>
                <TableCell>{formatDate(list.createdAt)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default InvoiceReport;
