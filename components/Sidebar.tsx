import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiHome } from 'react-icons/fi';
import { FaUser, FaMoneyBillAlt } from 'react-icons/fa';
import { SiExpensify } from 'react-icons/si';
import { TbCarCrane, TbReport } from 'react-icons/tb';
const Sidebar = () => {
  return (
    <div className="sticky top-0 left-0 bg-black h-screen w-[250px]">
      <div className="flex flex-col gap-10 p-6">
        <div className="flex gap-2 items-center">
          <Image src="/images/logo.png" alt="logo" width={80} height={80} />
          <h2 className="text-white text-base font-semibold">Al-xikma</h2>
        </div>

        <ul className="text-white flex flex-col space-y-4">
          <span className="text-gray-200 text-sm font-medium">Main</span>
          <div className="flex flex-col space-y-6">
            <Link href="/dashboard" className="flex items-center gap-2">
              <FiHome size={20} />
              Dashboard
            </Link>
            <Link
              className="flex items-center gap-2"
              href="/dashboard/employee"
            >
              <FaUser size={20} />
              Employee
            </Link>
            <Link href="/dashboard/salary" className="flex items-center gap-2">
              <FaMoneyBillAlt size={20} />
              Salary
            </Link>
            <Link href="/dashboard/crane/1" className="flex items-center gap-2">
              <TbCarCrane size={23} />
              Crane 1
            </Link>
            <Link href="/dashboard/crane/2" className="flex items-center gap-2">
              <TbCarCrane size={23} />
              Crane 2
            </Link>
            <Link className="flex items-center gap-2" href="/dashboard/expense">
              <SiExpensify size={20} />
              Expenses
            </Link>
          </div>
        </ul>
        <ul className="text-white flex flex-col space-y-3">
          <span className="text-gray-200 text-sm font-medium">Other</span>
          <Link className="flex items-center gap-2" href="/dashboard/report">
            <TbReport size={20} />
            Report
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
