import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';
const InvoiceTable = ({ data }: any) => {
  const formatDate = (date: Date) => {
    const dateOptions: any = {
      year: 'numeric',
      month: 'long', // or 'short' or 'numeric'
      day: 'numeric',
    };

    return date.toLocaleDateString(undefined, dateOptions);
  };
  return (
    <div className="bg-white shadow-md mr-2">
      <Table>
        <TableHeader className="bg-red-600">
          <TableRow>
            <TableHead className="text-white">Invoice To:</TableHead>
            <TableHead className="text-white">Description:</TableHead>
            <TableHead className="text-white">Price:</TableHead>
            <TableHead className="text-white">Total:</TableHead>
            <TableHead className="text-white">Date:</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((invoice: any) => (
            <TableRow key={invoice.id}>
              <TableCell>{invoice.customer}</TableCell>
              <TableCell>{invoice.description}</TableCell>
              <TableCell>{invoice.price}</TableCell>
              <TableCell>{invoice.price}</TableCell>
              <TableCell>{formatDate(invoice.createdAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InvoiceTable;
