import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';
interface ExpenseProps {
  data: any;
}
const ExpenseTable = ({ data }: ExpenseProps) => {
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
            <TableHead className="text-[#5874c7]">Dakhali:</TableHead>
            <TableHead className="text-[#5874c7]">Shidaal:</TableHead>
            <TableHead className="text-[#5874c7]">Shaxaad:</TableHead>
            <TableHead className="text-[#5874c7]">Salary:</TableHead>
            <TableHead className="text-[#5874c7]">Expenses:</TableHead>
            <TableHead className="text-[#5874c7]">Description:</TableHead>
            <TableHead className="text-[#5874c7]">Total:</TableHead>
            <TableHead className="text-[#5874c7]">Khidmada:</TableHead>
            <TableHead className="text-[#5874c7]">Net Total:</TableHead>
            <TableHead className="text-[#5874c7]">Date:</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((expense: any) => (
            <TableRow key={expense.id}>
              <TableCell>{expense.amount}</TableCell>
              <TableCell>{expense.fuel}</TableCell>
              <TableCell>{expense.shaxaad}</TableCell>
              <TableCell>{expense.salary}</TableCell>
              <TableCell>{expense.expenses}</TableCell>
              <TableCell>{expense.description}</TableCell>
              <TableCell>{expense.total}</TableCell>
              <TableCell>{expense.feePercentage}</TableCell>
              <TableCell>{expense.netIncome}</TableCell>
              <TableCell>{formatDate(expense.createdAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ExpenseTable;
