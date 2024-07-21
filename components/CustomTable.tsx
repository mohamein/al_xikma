import { FaTrash, FaEdit } from 'react-icons/fa';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const CustomTable = ({ data, head: { fullName, email, phone, address } }) => {
  return (
    <div className="bg-white shadow-md mx-2">
      <Table>
        <TableHeader className="bg-[#395CA0]">
          <TableRow>
            <TableHead className="text-white">{fullName}</TableHead>
            <TableHead className="text-white">{email}</TableHead>
            <TableHead className="text-white">{phone}</TableHead>
            <TableHead className="text-white">{address}</TableHead>
            <TableHead className="text-white">actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.phone}</TableCell>
              <TableCell>{employee.address}</TableCell>
              <TableCell className="flex items-center gap-2">
                <Link
                  className="text-green-500"
                  href={`/dashboard/employee/${employee.id}/update`}
                >
                  <FaEdit size={18} />
                </Link>
                /
                <Link
                  className="text-red-500"
                  href={`/dashboard/employee/${employee.id}/update`}
                >
                  <FaTrash size={18} />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomTable;
