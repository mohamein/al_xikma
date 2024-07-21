import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';

const ExpenseTable = ({ data }) => {
  return (
    <div className="bg-white shadow-md">
      <Table>
        <TableHeader className="bg-[#395CA0]">
          <TableRow>
            <TableHead className="text-white">Shidaal:</TableHead>
            <TableHead className="text-white">Shaxaad:</TableHead>
            <TableHead className="text-white">Salary:</TableHead>
            <TableHead className="text-white">Expenses:</TableHead>
            <TableHead className="text-white">Description:</TableHead>
            <TableHead className="text-white">Total:</TableHead>
            <TableHead className="text-white">Fee Percentage:</TableHead>
            <TableHead className="text-white">Total Amount:</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>{expense.fuel}</TableCell>
              <TableCell>{expense.shaxaad}</TableCell>
              <TableCell>{expense.salary}</TableCell>
              <TableCell>{expense.expenses}</TableCell>
              <TableCell>{expense.description}</TableCell>
              <TableCell>{expense.total}</TableCell>
              <TableCell>{expense.feePercentage}</TableCell>
              <TableCell>{expense.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ExpenseTable;
