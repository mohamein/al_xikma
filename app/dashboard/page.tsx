import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Card from '@/components/Card';
import { FaUser, FaFileInvoice } from 'react-icons/fa';
import { PiCraneBold } from 'react-icons/pi';
import { getAllEmployee } from '@/lib/actions/employee.actions';
import { getAllInvoice } from '@/lib/actions/invoice.actions';
const Dashboard = async () => {
  const employee: any = await getAllEmployee();
  const invoice: any = await getAllInvoice();
  return (
    <>
      {/* cards */}
      <div className="flex flex-col gap-4 mt-5">
        <div className="flex items-center gap-4 w-full">
          <Card
            title="Employee"
            Icon={() => (
              <FaUser size={64} className="text-gray-300 opacity-30" />
            )}
            length={employee?.length}
            className="bg-[#dd6480]"
          />
          <Card
            title="Crane"
            Icon={() => (
              <PiCraneBold size={68} className="text-gray-300 opacity-30" />
            )}
            length={2}
            className="bg-[#1a8692]"
          />
          <Card
            title="Invoices"
            Icon={() => (
              <FaFileInvoice size={64} className="text-gray-300 opacity-30" />
            )}
            length={invoice?.length}
            className="bg-[#2a6fca]"
          />
        </div>

        {/* Table */}
        <div className="flex  gap-4">
          <div className="bg-white shadow-md mx-2 flex-1">
            <Table>
              <TableHeader className="bg-red-600">
                <TableRow>
                  <TableHead className="text-white">FullName</TableHead>
                  <TableHead className="text-white">Email</TableHead>
                  <TableHead className="text-white">Phone</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {employee?.slice(0, 4).map((list: any) => (
                  <TableRow key={list.id}>
                    <TableCell>{list.name}</TableCell>
                    <TableCell>{list.email}</TableCell>
                    <TableCell>{list.phone}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex-1">
            <h2>Invoice</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
