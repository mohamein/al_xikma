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
        <TableHeader className="bg-red-600">
          <TableRow>
            <TableHead className="text-white">Shidaal:</TableHead>
            <TableHead className="text-white">Shaxaad:</TableHead>
            <TableHead className="text-white">Salary:</TableHead>
            <TableHead className="text-white">Expenses:</TableHead>
            <TableHead className="text-white">Crane:</TableHead>
            <TableHead className="text-white">Description:</TableHead>
            <TableHead className="text-white">Total:</TableHead>
            <TableHead className="text-white">Date:</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((expense: any) => (
            <TableRow key={expense.id}>
              <TableCell>{expense.fuel}</TableCell>
              <TableCell>{expense.shaxaad}</TableCell>
              <TableCell>{expense.salary}</TableCell>
              <TableCell>{expense.expenses}</TableCell>
              <TableCell>{expense.crane}</TableCell>
              <TableCell>{expense.description}</TableCell>
              <TableCell>{expense.total}</TableCell>
              <TableCell>{formatDate(expense.createdAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ExpenseTable;
