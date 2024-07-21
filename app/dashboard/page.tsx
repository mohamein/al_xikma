import Card from '@/components/Card';
import { FaUser } from 'react-icons/fa';
import { getAllEmployee } from '@/lib/actions/employee.actions';
const Dashboard = async () => {
  const employee = await getAllEmployee();
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
            link="/dashboard/employee"
            className="bg-[#c64765]"
          />
          <Card
            title="Budget"
            Icon={() => (
              <FaUser size={64} className="text-gray-300 opacity-30" />
            )}
            length="0"
            link="/dashboard/salary"
            className="bg-[#13585f] "
          />
          <Card
            title="Employee"
            Icon={() => (
              <FaUser size={64} className="text-gray-300 opacity-30" />
            )}
            length="0"
            link="/dashboard/employee"
            className="bg-[#1c5db1] "
          />
        </div>

        {/* Table */}

        <h2>Table</h2>
      </div>
    </>
  );
};

export default Dashboard;
