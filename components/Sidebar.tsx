import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Sidebar = () => {
  return (
    <div className="sticky top-0 left-0 bg-[#395CA0] h-screen w-[250px]">
      <div className="flex flex-col gap-10 p-6">
        <h2 className="text-white text-xl font-semibold">Al-Xikma</h2>

        <ul className="text-white flex flex-col space-y-6">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/dashboard/employee">Employee</Link>
          <Link href="/dashboard/salary">Salary</Link>
          <Link href="/dashboard/crane/1">Crane 1</Link>
          <Link href="/dashboard/crane/2">Crane 2</Link>
          <Link href="/dashboard/expense">Expenses</Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
