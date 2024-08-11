import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';
const MonthExpenseTable = ({ data }: any) => {
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
            <TableHead className="text-[#5874c7]">Expenses 1:</TableHead>
            <TableHead className="text-[#5874c7]">Khidmada:</TableHead>
            <TableHead className="text-[#5874c7]">SubTotal:</TableHead>
            <TableHead className="text-[#5874c7]">Expenses 2:</TableHead>
            <TableHead className="text-[#5874c7]">Salary:</TableHead>
            <TableHead className="text-[#5874c7]">SubTotal:</TableHead>
            <TableHead className="text-[#5874c7]">Sales:</TableHead>
            <TableHead className="text-[#5874c7]">Net Total:</TableHead>
            <TableHead className="text-[#5874c7]">Date:</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((expense: any) => (
            <TableRow key={expense?.id}>
              <TableCell>{expense?.expenses1}</TableCell>
              <TableCell>{expense?.feePercentage}</TableCell>
              <TableCell>{expense?.subTotal1}</TableCell>
              <TableCell>{expense?.expenses2}</TableCell>
              <TableCell>{expense?.salary}</TableCell>
              <TableCell>{expense?.subTotal2}</TableCell>
              <TableCell>{expense?.sales}</TableCell>
              <TableCell>{expense?.total}</TableCell>
              <TableCell>{formatDate(expense?.date)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MonthExpenseTable;
